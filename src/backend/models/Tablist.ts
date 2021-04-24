import { BrowserWindow } from "electron";

import Tab from "./Tab";

class Tablist {
  tablist: Array<Tab>;
  history: Array<Tab>;
  window: BrowserWindow;

  constructor(window: BrowserWindow) {
    this.window = window;
    this.tablist = [];
  }
}

export default Tablist;
