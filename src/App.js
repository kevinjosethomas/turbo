import { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import './assets/styles/tailwind.css';
import './assets/styles/fontawesome.css';
import { Browser } from './layouts/browser';
import { Settings } from './layouts/settings';

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

    const colorListener = (_, colors) => {
      Object.keys(colors).map(color => {
        document.documentElement.style.setProperty(color, colors[color])
      })
    }
    window.ipcRenderer.on('receive-colors', colorListener);

    window.ipcRenderer.send('request-colors')

    return () => {
      window.ipcRenderer.removeListener('receive-window-maximized', maximizedListener);
      window.ipcRenderer.removeListener('receive-tabs', tabListener);
      window.ipcRenderer.removeListener('receive-colors', colorListener);
    }

  }, [])
  

  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Browser
            tablist={tablist}
            isMaximized={isMaximized}
          />
        </Route>
        <Route path="/settings" exact>
          <Settings />
        </Route>
      </Switch>
    </Router>
  )

}

export default App;
