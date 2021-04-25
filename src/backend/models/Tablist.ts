import { BrowserView, IpcMainEvent, TouchBarScrubber } from "electron";

import Tab from "./Tab";
import Window from "./Window";

class Tablist {
  tablist: Tab[];
  tablog: number[];
  window: Window;

  constructor(window: Window) {
    this.window = window;
    this.tablist = [];
    this.tablog = [];
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
    this.tablist.forEach((tab: Tab, index: number) => {
      if (tab.id === id) {
        this.tablog.push(tab.id);
        this.tablist[index].setActive(this.window.getSize());
      } else if (tab.active && tab.id !== id) {
        this.tablist[index].setInactive();
      }
    });
  }

  closeTab(id: number) {
    this.tablist.forEach((tab: Tab, index: number) => {
      if (tab.id === id) {
        this.window.window.removeBrowserView(tab.view);
        this.tablist.splice(index, 1);
        this.tablog = this.tablog.filter((el) => el !== id);
        if (this.tablist.length && this.tablog.length) {
          this.setActiveTab(this.tablog[this.tablog.length - 1]);
        }
      }
    });
  }

  getFriendlyTabs(): object[] {
    interface FriendlyTabProps {
      id: number;
      url: string;
      friendlyUrl: string;
      title?: string;
      favicon?: string;
      active?: boolean;
      engine?: string;
    }

    const friendlyTablist: FriendlyTabProps[] = new Array();
    for (const tab of this.tablist) {
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
