import { IpcRendererEvent } from "electron";
import { FC, useEffect, useState } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

import Browser from "./pages/browser";
import "./assets/styles/tailwind.css";
import "./assets/styles/fontawesome.css";

declare global {
  interface Window {
    ipc: any;
  }
}

const App: FC = () => {
  const [tablist, setTablist] = useState<object[]>([]);

  window.ipc.tab.listeners.update((event: IpcRendererEvent, tabs: object[]) => {
    setTablist(tabs);
  });

  useEffect(() => {
    window.ipc.tab.emitters.request();
  }, []);

  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Browser />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
