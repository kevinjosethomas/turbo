import { contextBridge, ipcRenderer, IpcRendererEvent } from "electron";
import { HandlerPropsEvents } from "./lib/types";

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
      order: (from: number, to: number) =>
        ipcRenderer.send("tab-order", { from, to }),
      open: (url: string) => ipcRenderer.send("tab-open", url),
      active: (id: number) => ipcRenderer.send("tab-active", id),
      back: (id: number) => ipcRenderer.send("tab-back"),
      forward: (id: number) => ipcRenderer.send("tab-forward"),
      reload: (id: number) => ipcRenderer.send("tab-reload"),
      close: (id: number) => ipcRenderer.send("tab-close", id),
      showWindow: () => ipcRenderer.send("tab-window-show"),
    },
  },
});
