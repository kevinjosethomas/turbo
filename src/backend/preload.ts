import { contextBridge, ipcRenderer, IpcRendererEvent } from "electron";
import { HandlerPropsEvents } from "./types/index";

const handlers: HandlerPropsEvents[] = [];

contextBridge.exposeInMainWorld("ipc", {
  unload: () => {
    for (const handler of handlers) {
      ipcRenderer.removeListener(handler.event, handler.func);
    }
  },
  window: {
    emitters: {
      minimize: () => ipcRenderer.send("window-minimize"),
      restore: () => ipcRenderer.send("window-restore"),
      close: () => ipcRenderer.send("window-close"),
    },
  },
  tab: {
    listeners: {
      update: function (
        func: (event: IpcRendererEvent, tabs: object[]) => void
      ) {
        ipcRenderer.on("update-tabs", func);
        handlers.push({ event: "update-tabs", func: func });
      },
    },
    emitters: {
      request: () => ipcRenderer.send("tab-request"),
      new: () => ipcRenderer.send("tab-new"),
    },
  },
});
