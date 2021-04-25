import { IpcRendererEvent } from "electron";
import { FC, useEffect, useState } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

import Browser from "./pages/browser";
import "./assets/styles/tailwind.css";
import TabProps from "./interface/Tab";
import "./assets/styles/fontawesome.css";

declare global {
  interface Window {
    ipc: any;
  }
}

const App: FC = () => {
  const [tablist, setTablist] = useState<TabProps[]>([]);

  useEffect(() => {
    window.ipc.tab.emitters.request();
    window.ipc.tab.listeners.update(
      (event: IpcRendererEvent, tabs: TabProps[]) => {
        setTablist(tabs);
        console.log("haha");
      }
    );

    return () => {
      window.ipc.unload();
    };
  }, []);

  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Browser tablist={tablist} />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
