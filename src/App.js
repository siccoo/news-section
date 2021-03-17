import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';

import Topbar from "./components/navbar/index";
import News from "./pages/news/index";

const App = () => {
  return (
    <Router>
      <Topbar />
        <Switch>
          <Route exact path="/" component={News} />
        </Switch>
    </Router>
  );
}

export default App;
