import path from "path";
import { app, BrowserWindow } from "electron";

import Window from "./models/Browser";
import { urlObjectKeys } from "next/dist/next-server/lib/utils";

let window: Window = new Window(null);
const createWindow: () => void = () => {
  window.setWindow(
    new BrowserWindow({
      show: false,
      frame: false,
      webPreferences: {
        contextIsolation: false,
        preload: path.join(__dirname, "preload.ts"),
      },
    })
  );

  const url: string = process.env.FRONTEND_URL;
  window.setURL(url);
  window.maximizeWindow();
  window.showWindow();

  window.on("closed", () => {
    window.setWindow(null);
  });
};

app.on("ready", createWindow);

app.on("activate", () => {
  if (window.window === null) {
    createWindow();
  }
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
