import { useState } from "react";

import './assets/styles/tailwind.css';
import './assets/styles/fontawesome.css';
import { CoreLayout } from './layouts/core';
import { View } from './components/core/View';

const App = () => {

  const [isMaximized, setMaximized] = useState(true);
  window.ipcRenderer.send('request-window-maximized');
  window.ipcRenderer.on('receive-window-maximized', (event, data) => {
    setMaximized(data);
  });

  const [tabList, setTabList] = useState(true);
  window.ipcRenderer.send('request-tabs');
  window.ipcRenderer.on('receive-tabs', (event, data) => {
    setTabList(data);
  });

  return (
    <CoreLayout isMaximized={isMaximized}>
    </CoreLayout>
  )

}

export default App;
