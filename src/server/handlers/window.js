exports.windowEventHandler = (win) => {
  win.on("resize", () => {
    win.webContents.send("receive-window-maximized", win.isMaximized());
  });
};
