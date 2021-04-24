import { BrowserWindow } from "electron";

class Browser {
  window: BrowserWindow;

  constructor(window: BrowserWindow) {
    this.window = window;
  }

  // on(event: string, func: () => void) {
  //   this.window.on(event, func);
  // }

  maximizeWindow() {
    this.window.maximize();
  }

  setWindow(window: BrowserWindow) {
    this.window = window;
  }

  showWindow() {
    this.window.show();
  }

  setURL(url: string) {
    this.window.loadURL(url);
  }

  toggleDevTools() {
    this.window.webContents.toggleDevTools();
  }
}

export default Browser;
