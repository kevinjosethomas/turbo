import { useState, useEffect } from "react";

import './assets/styles/tailwind.css';
import './assets/styles/fontawesome.css';
import { CoreLayout } from './layouts/core';

const App = () => {

  const [isMaximized, setMaximized] = useState(true);
  const [tablist, setTablist] = useState([]);

  useEffect(() => {

    const maximizedListener = (_, value) => {
      setMaximized(value);
    };
    window.ipcRenderer.on('receive-window-maximized', maximizedListener);

    const tabListener = (_, tabs) => {
      setTablist(tabs);
    }
    window.ipcRenderer.on('receive-tabs', tabListener);

    return () => {
      window.ipcRenderer.removeListener('receive-window-maximized', maximizedListener);
      window.ipcRenderer.removeListener('receive-tabs', tabListener);
    }

  })

  return (
    <CoreLayout tablist={tablist} isMaximized={isMaximized}>
    </CoreLayout>
  )

}

export default App;
