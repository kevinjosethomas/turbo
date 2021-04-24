import { Fragment } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

import "./assets/styles/tailwind.css";
import Browser from "./pages/browser";

const App = () => {
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
