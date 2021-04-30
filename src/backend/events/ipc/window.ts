import { ipcMain } from "electron";

import Window from "../../models/Window";

const handlers = (window: Window) => {
  ipcMain.on("window-restore", () => {
    if (window.window.isMaximized()) {
      window.restoreWindow();
    } else {
      window.maximizeWindow();
    }
  });

  ipcMain.on("window-minimize", () => {
    window.minimizeWindow();
  });

  ipcMain.on("window-close", () => {
    window.closeWindow();
  });
};

export default handlers;
