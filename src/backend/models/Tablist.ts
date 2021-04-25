import { BrowserView, IpcMainEvent } from "electron";

import Tab from "./Tab";
import Window from "./Window";

import { FriendlyTabProps } from "../types/index";

class Tablist {
  tablist: Tab[];
  history: Tab[];
  window: Window;

  constructor(window: Window) {
    this.window = window;
    this.tablist = [];
    this.history = [];
  }

  newTab(event: IpcMainEvent) {
    const view = new BrowserView();
    view.setAutoResize({
      width: true,
      height: true,
      horizontal: true,
      vertical: true,
    });
    this.tablist.push(
      new Tab(
        {
          id: view.webContents.id,
          url: "https://turbobrowser.io/",
          friendlyUrl: "https://turbobrowser.io/",
          view: view,
        },
        this,
        event
      )
    );
    this.window.window.addBrowserView(view);
    this.setActiveTab(view.webContents.id);
  }

  setActiveTab(id: number) {
    this.tablist.forEach((tab, index) => {
      if (tab.id === id) {
        this.tablist[index].setActive(this.window.getSize());
      } else if (tab.active && tab.id !== id) {
        this.tablist[index].setInactive();
      }
    });
  }

  getFriendlyTabs(): object[] {
    const friendlyTablist: FriendlyTabProps[] = new Array();
    for (const tab of this.tablist) {
      console.log(tab);
      friendlyTablist.push({
        id: tab.id,
        url: tab.url,
        friendlyUrl: tab.friendlyUrl,
        title: tab.title,
        favicon: tab.favicon,
        active: tab.active,
        engine: tab.engine,
      });
    }
    return friendlyTablist;
  }
}

export default Tablist;
