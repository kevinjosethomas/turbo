import Tab from "./Tab";
import Window from "./Window";

class Tablist {
  tablist: Array<Tab>;
  history: Array<Tab>;
  window: Window;

  constructor(window: Window) {
    this.window = window;
    this.tablist = [];
    this.history = [];
  }
}

export default Tablist;
