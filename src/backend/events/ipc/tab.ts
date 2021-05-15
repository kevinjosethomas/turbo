import { ipcMain, IpcMainEvent } from "electron";

import Window from "../../models/Window";
import parseURL from "../../lib/parseURL";
import { HandlerProps } from "../../lib/types";

const handlers = (window: Window, props: HandlerProps) => {
  const { tablist, tablistWindow } = props;

  ipcMain.on("tab-request", (event: IpcMainEvent) => {
    event.reply("update-tabs", tablist.getFriendlyTabs());
  });

  ipcMain.on("tab-new", (event: IpcMainEvent) => {
    tablist.newTab(event);
    event.reply("update-tabs", tablist.getFriendlyTabs());
  });

  ipcMain.on("tab-order", (event: IpcMainEvent, { from, to }) => {
    tablist.reorderTabs(from, to);
    event.reply("update-tabs", tablist.getFriendlyTabs());
  });

  ipcMain.on("tab-open", (event: IpcMainEvent, url: string) => {
    const parsed = parseURL(url);
    if (typeof parsed === "string") {
      tablist.setActiveTabURL(parsed);
    } else {
      tablist.setActiveTabURL(
        `https://google.com/search?q=${url.replace(" ", "+")}`
      );
    }
    event.reply("update-tabs", tablist.getFriendlyTabs());
  });

  ipcMain.on("tab-active", (event: IpcMainEvent, id: number) => {
    tablist.setActiveTab(id);
    event.reply("update-tabs", tablist.getFriendlyTabs());
  });

  ipcMain.on("tab-back", (event: IpcMainEvent) => {
    tablist.backTab();
  });

  ipcMain.on("tab-forward", (event: IpcMainEvent) => {
    tablist.forwardTab();
  });

  ipcMain.on("tab-reload", (event: IpcMainEvent) => {
    tablist.reloadTab();
  });

  ipcMain.on("tab-close", (event: IpcMainEvent, id: number) => {
    tablist.closeTab(id);
    event.reply("update-tabs", tablist.getFriendlyTabs());

    if (!tablist.tablist.length) {
      window.closeWindow();
    }
  });

  ipcMain.on("tab-window-show", (event: IpcMainEvent) => {
    if (tablistWindow.window.isVisible()) {
      tablistWindow.hideWindow();
    } else {
      tablistWindow.showWindow();
      tablistWindow.toggleDevTools();
    }
  });
};

export default handlers;
