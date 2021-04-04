import { Fragment, useEffect, useState } from "react";

import './assets/styles/tailwind.css';
import './assets/styles/fontawesome.css';
import { Browser } from './layouts/browser';
import { Settings } from './layouts/settings';

const App = () => {

  const [activeWindow, setActiveWindow] = useState('browser');
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

  }, [])

  return (
    <Fragment>
      { activeWindow === 'browser'
        ? (
          <Browser
            tablist={tablist}
            isMaximized={isMaximized}
          />
        ) : (
          <Settings />
        )
      }
    </Fragment>
  )

}

export default App;
