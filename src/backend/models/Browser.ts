import { BrowserWindow } from "electron";

class Browser {
  constructor(window: BrowserWindow | null) {
    this.window: BrowserWindow | null = window;
  }

  on(event: string, func: () => void) {
    this.window.on(event, func);
  }

  maximizeWindow() {
    this.window.maximize();
  }

  setWindow(window: BrowserWindow | null) {
    this.window = window;
  }

  showWindow() {
    this.window.show();
  }

  setURL(url: string) {
    this.window.loadURL(url);
  }
}

export default Browser;
