import { useState } from "react";

import './assets/styles/tailwind.css';
import './assets/styles/fontawesome.css';
import { CoreLayout } from './layouts/core';

const App = () => {

  window.ipcRenderer.removeAllListeners('receive-tabs');
  window.ipcRenderer.removeAllListeners('receive-window-maximized');

  const [isMaximized, setMaximized] = useState(true);
  window.ipcRenderer.on('receive-window-maximized', (_, data) => {
    setMaximized(data);
  });

  const [tablist, setTablist] = useState([]);
  window.ipcRenderer.on('receive-tabs', (_, data) => {
    setTablist(data);
  });

  return (
    <CoreLayout tablist={tablist} isMaximized={isMaximized}>
    </CoreLayout>
  )

}

export default App;
