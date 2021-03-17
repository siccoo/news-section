import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';

import Topbar from "./components/navbar/index";

const App = () => {
  return (
    <Router>
      <Topbar />
        <Switch>
          {/* <Route exact path="/" component={Home} /> */}
        </Switch>
    </Router>
  );
}

export default App;
