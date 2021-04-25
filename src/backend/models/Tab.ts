import { BrowserView, IpcMainEvent } from "electron";
import { TabProps } from "../types";

import Tablist from "./Tablist";
import defaults from "../lib/defaults";

class Tab {
  id: number;
  url: string;
  friendlyUrl: string;
  view: BrowserView;
  title: string | undefined;
  favicon: string | undefined;
  active: boolean;
  engine: string;

  tablist: Tablist;

  constructor(props: TabProps, tablist: Tablist, event: IpcMainEvent) {
    this.id = props.id;
    this.url = props.url;
    this.friendlyUrl = props.friendlyUrl;
    this.view = props.view;
    this.title = props.title;
    this.favicon = props.favicon;
    this.active = props.active ? props.active : false;
    this.engine = props.engine ? props.engine : "google";

    this.tablist = tablist;
    this.view.webContents.loadURL(this.url);

    this.eventHandler(tablist, event);
  }

  eventHandler(tablist: Tablist, event: IpcMainEvent) {
    this.view.webContents.on("page-title-updated", (e: any, title: string) => {
      if (title) {
        this.setTitle(title);
        event.reply("update-tabs", tablist.getFriendlyTabs());
      }
    });
    this.view.webContents.on(
      "page-favicon-updated",
      (e: any, favicons: any) => {
        if (favicons.length) {
          this.setFavicon(favicons[0]);
          event.reply("update-tabs", tablist.getFriendlyTabs());
        }
      }
    );
    this.view.webContents.on("did-navigate", (e: any, url: string) => {
      this.setURL(url);
      event.reply("update-tabs", tablist.getFriendlyTabs());
    });
    this.view.webContents.on("did-navigate-in-page", (e: any, url: string) => {
      this.setURL(url);
      event.reply("update-tabs", tablist.getFriendlyTabs());
    });
  }

  setActive(windowSize: { width: number; height: number }) {
    this.active = true;
    this.view.setBounds({
      x: 0,
      y: defaults.size.header.height,
      width: windowSize.width,
      height: windowSize.height - defaults.size.header.height,
    });
  }

  setInactive() {
    this.active = false;
    this.view.setBounds({
      x: 0,
      y: 0,
      width: 0,
      height: 0,
    });
  }

  setURL(url: string) {
    this.url = url;
    this.friendlyUrl = url;
  }

  setTitle(title: string) {
    this.title = title;
  }

  setFavicon(favicon: string) {
    this.favicon = favicon;
  }

  changeURL(url: string) {
    this.url = url;
    this.friendlyUrl = url;
    this.view.webContents.loadURL(url);
  }
}

export default Tab;
