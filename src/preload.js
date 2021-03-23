const { contextBridge, ipcRenderer, remote } = require('electron');

contextBridge.exposeInMainWorld(
  'electron', {
    remote: remote
  }
)
