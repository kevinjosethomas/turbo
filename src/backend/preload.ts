import { contextBridge, ipcRenderer, IpcRendererEvent } from "electron";

contextBridge.exposeInMainWorld("ipc", {
  window: {
    emitters: {
      minimize: () => ipcRenderer.send("window-minimize"),
      restore: () => ipcRenderer.send("window-restore"),
      close: () => ipcRenderer.send("window-close"),
    },
  },
  tab: {
    listeners: {
      update: (func: (event: IpcRendererEvent, tabs: object[]) => void) =>
        ipcRenderer.on("update-tabs", func),
    },
    emitters: {
      request: () => ipcRenderer.send("tab-request"),
      new: () => ipcRenderer.send("tab-new"),
    },
  },
});
