import { FC } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

import "./assets/styles/tailwind.css";
import "./assets/styles/fontawesome.css";
import Browser from "./pages/browser";

declare global {
  interface Window {
    ipc: any;
  }
}

const App: FC = () => {
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
