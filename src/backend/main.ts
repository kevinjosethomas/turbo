import path from "path";
import { app, BrowserWindow } from "electron";

import Window from "./models/Window";
import Tablist from "./models/Tablist";
import ipcHandler from "./events/ipc/core";

let window: Window | null = null;
const createWindow: () => void = () => {
  window = new Window(
    new BrowserWindow({
      show: false,
      frame: false,
      webPreferences: {
        preload: path.join(__dirname, "preload.js"),
      },
    })
  );

  const url: string = "http://localhost:3000";
  window.setURL(url);
  window.maximizeWindow();
  window.toggleDevTools();
  window.showWindow();

  const tablist = new Tablist(window);

  const tablistWindow = new Window(
    new BrowserWindow({
      parent: window.window,
      show: false,
      frame: false,
      transparent: true,
      x: 20,
      y: 40,
      width: 400,
      height: 400,
      webPreferences: {
        preload: path.join(__dirname, "preload.js"),
      },
    })
  );

  const tablistWindowURL: string = "http://localhost:3000/#/tablist";
  tablistWindow.setURL(tablistWindowURL);

  ipcHandler(window, { tablist: tablist, tablistWindow: tablistWindow });

  window.window.on("closed", () => {
    window = null;
  });
};

app.on("ready", createWindow);

app.on("activate", () => {
  if (window && window.window === null) {
    createWindow();
  }
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
