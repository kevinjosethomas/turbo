import { BrowserView } from "electron";

import Tab from "./Tab";
import Window from "./Window";

class Tablist {
  tablist: Tab[];
  history: Tab[];
  window: Window;

  constructor(window: Window) {
    this.window = window;
    this.tablist = [];
    this.history = [];
  }

  newTab(view: BrowserView) {
    this.tablist.push(
      new Tab({
        id: view.webContents.id,
        url: "https://google.com/",
        friendlyUrl: "https://google.com/",
        view: view,
      })
    );
  }

  getFriendlyTabs(): object[] {
    interface FriendlyTabProps {
      id: number;
      url: string;
      friendlyUrl: string;
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
        favicon: tab.favicon,
        active: tab.active,
        engine: tab.engine,
      });
    }
    return friendlyTablist;
  }
}

export default Tablist;
