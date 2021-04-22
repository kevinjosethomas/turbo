const path = require("path");
const axios = require("axios");
const { BrowserView } = require("electron");
const buildChromeContextMenu = require("electron-chrome-context-menu").default;

const { engines } = require("../data/engines");
const { settings } = require("../data/settings");
const { checkURL } = require("../utility/methods");

exports.ipcEventHandler = (win, util) => {
  const { ipcMain, tablist, store } = util;

  const pushHistory = (url) => {
    let history = store.get("history");
    history = history ? history : [];

    history.push({
      url: url,
      time: new Date(),
    });
    store.set("history", history);
  };

  ipcMain.on("request-window-maximized", (event) => {
    event.reply("receive-window-maximized", win.isMaximized());
  });

  ipcMain.on("window-change", (_, type) => {
    switch (type) {
      case "minimize":
        win.minimize();
        break;
      case "maximize":
        win.maximize();
        break;
      case "restore":
        win.unmaximize();
        win.setSize(800, 600);
        break;
      case "close":
        win.close();
    }
  });

  ipcMain.on("send-request", async (event, { method, endpoint }) => {
    const fetch =
      method === "GET"
        ? axios.get
        : method === "POST"
        ? axios.post
        : method === "PUT"
        ? axios.put
        : method === "PATCH"
        ? axios.patch
        : method === "DELETE"
        ? axios.delete
        : axios.get;

    const response = await fetch(endpoint);

    event.reply("receive-request", {
      data: response.data,
      headers: response.headers,
    });
  });

  ipcMain.on("request-colors", (event) => {
    event.reply("receive-colors", store.get("design.colors"));
  });

  ipcMain.on("change-color", (event, { name, hex }) => {
    store.set(`design.colors.${name}`, hex);
    event.reply("receive-colors", store.get("design.colors"));
  });

  ipcMain.on("request-tabs", (event) => {
    event.reply("receive-tabs", tablist.friendlyTablist);
  });

  ipcMain.on("create-tab", (event, openURL) => {
    let url;
    let favicon = (title = null);

    if (openURL) {
      if (checkURL(openURL)) {
        if (!openURL.startsWith("http://") && !openURL.startsWith("https://")) {
          url = `https://${openURL}`;
        } else {
          url = openURL;
        }
      } else {
        url = `https://google.com/search?q=${openURL.replace(" ", "+")}`;
      }
    } else {
      url = "https://google.com/";
    }

    const view = new BrowserView({
      webPreferences: {
        contextIsolation: false,
        preload: path.join(__dirname, "../../preload.js"),
      },
    });
    const id = view.webContents.id;
    const parsedUrl = new URL(url);
    const userAgent = parsedUrl.hostname.includes("google.com")
      ? settings.core.userAgent[
          process.platform === "win32" ||
          process.platform === "darwin" ||
          process.platform === "linux"
            ? process.platform
            : "win32"
        ]
      : win.webContents.userAgent;

    view.webContents.loadURL(
      process.env.ELECTRON_START_URL + "/#/endpoint/GET?endpoint=" + url,
      {
        userAgent: userAgent,
      }
    );
    win.addBrowserView(view);

    tablist.push({
      id: id,
      url: url,
      view: view,
      favicon: favicon,
      engine: "google",
      title: title,
    });

    tablist.setActiveTab(id);
    pushHistory(url);

    view.webContents.on("context-menu", (e, params) => {
      const menu = buildChromeContextMenu({
        params: params,
        webContents: view.webContents,
        openLink: (url, disposition) => {
          view.webContents.loadURL(url);
        },
      });
      menu.popup();
    });

    view.webContents.on("page-title-updated", (_, title) => {
      if (title) {
        tablist.setTabTitle(id, title);
        event.reply("receive-tabs", tablist.friendlyTablist);
      }
    });

    view.webContents.on("page-favicon-updated", (_, favicons) => {
      if (favicons.length) {
        favicon = favicons[0];
        tablist.setTabFavicon(id, favicon);
        event.reply("receive-tabs", tablist.friendlyTablist);
      }
    });

    view.webContents.on("did-navigate", (_, url) => {
      tablist.setTabURL(id, url);
      event.reply("receive-tabs", tablist.friendlyTablist);
    });

    view.webContents.on("did-navigate-in-page", (_, url) => {
      tablist.setTabURL(id, url);
      event.reply("receive-tabs", tablist.friendlyTablist);
    });

    event.reply("receive-tabs", tablist.friendlyTablist);
  });

  ipcMain.on("set-active-tab", (event, id) => {
    tablist.setActiveTab(id);
    event.reply("receive-tabs", tablist.friendlyTablist);
  });

  ipcMain.on("set-active-tab-url", (event, { id, url, engine }) => {
    let formattedUrl;

    if (checkURL(url)) {
      if (!url.startsWith("http://") && !url.startsWith("https://")) {
        formattedUrl = `https://${url}`;
      } else {
        formattedUrl = url;
      }
    } else {
      formattedUrl =
        engines.find((el) => el.name === engine).searchURL +
        url.replace(" ", "+");
    }

    pushHistory(formattedUrl);

    tablist.setActiveTabURL(formattedUrl);
    event.reply("receive-tabs", tablist.friendlyTablist);
  });

  ipcMain.on("set-active-tab-engine", (event, engine) => {
    tablist.setActiveTabEngine(engine);
    event.reply("receive-tabs", tablist.friendlyTablist);
  });

  ipcMain.on("backward-tab", () => {
    tablist.backwardActiveTab();
  });

  ipcMain.on("forward-tab", () => {
    tablist.forwardActiveTab();
  });

  ipcMain.on("reload-tab", () => {
    tablist.reloadActiveTab();
  });

  ipcMain.on("close-tab", (event, id) => {
    tablist.closeTab(id);
    event.reply("receive-tabs", tablist.friendlyTablist);
  });
};
