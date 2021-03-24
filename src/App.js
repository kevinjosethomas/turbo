import { useState } from "react";

import './assets/styles/tailwind.css';
import './assets/styles/fontawesome.css';
import { CoreLayout } from './layouts/core';

const App = () => {

  const [isMaximized, setMaximized] = useState(true);
  window.ipcRenderer.send('request-window-maximized');
  window.ipcRenderer.on('receive-window-maximized', (event, data) => {
    setMaximized(data);
  });

  const [tablist, setTablist] = useState(true);
  window.ipcRenderer.send('request-tabs');
  window.ipcRenderer.on('receive-tabs', (event, data) => {
    setTablist(data);
  });

  return (
    <CoreLayout tablist={tablist} isMaximized={isMaximized}>
    </CoreLayout>
  )

}

export default App;
