import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld("ipc", {
  send: (event: any, data: any) => ipcRenderer.send(event, data),
});
