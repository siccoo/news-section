import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import News from "./pages/news/index";

const App = () => {
  return (
    <Router>
        <Switch>
          <Route exact path="/" component={News} />
        </Switch>
    </Router>
  );
}

export default App;