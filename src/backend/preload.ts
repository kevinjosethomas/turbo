import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld("ipc", {
  minimize: () => ipcRenderer.send("window-minimize"),
  restore: () => ipcRenderer.send("window-restore"),
  close: () => ipcRenderer.send("window-close"),
});
