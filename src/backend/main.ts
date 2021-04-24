import path from "path";
import { app, BrowserWindow } from "electron";

import Window from "./models/Browser";

let window: Window | null = null;
const createWindow: () => void = () => {
  window = new Window(
    new BrowserWindow({
      show: false,
      frame: false,
      webPreferences: {
        contextIsolation: false,
        preload: path.join(__dirname, "preload.ts"),
      },
    })
  );

  const url: string = process.env.FRONTEND_URL || "http://localhost:3000";
  window.setURL(url);
  window.maximizeWindow();
  window.showWindow();

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