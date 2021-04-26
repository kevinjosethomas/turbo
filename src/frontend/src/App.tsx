import { IpcRendererEvent } from "electron";
import { FC, useEffect, useState } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

import Browser from "./pages/browser";
import "./assets/styles/tailwind.css";
import { TabProps } from "./lib/types";
import "./assets/styles/fontawesome.css";

declare global {
  interface Window {
    ipc: any;
  }
}

const App: FC = () => {
  const [tablist, setTablist] = useState<TabProps[]>([]);
  const [activeTab, setActiveTab] = useState<TabProps | undefined>();

  const resetActiveTab = () => {
    setActiveTab(tablist.find((el) => el.active === true));
  };

  useEffect(() => {
    window.ipc.tab.listeners.update((event: IpcRendererEvent, tabs: []) => {
      setTablist(tabs);
    });

    window.ipc.tab.emitters.new();

    return () => {
      window.ipc.unload();
    };
  }, []);

  useEffect(() => {
    setActiveTab(tablist.find((el) => el.active === true));
  }, [tablist]);

  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Browser tablist={tablist} activeTab={activeTab} />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
