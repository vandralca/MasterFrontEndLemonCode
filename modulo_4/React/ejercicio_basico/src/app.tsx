import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { LoginScene, ListScene, DetailScene } from "scenes";

export const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <LoginScene />
        </Route>
        <Route path="/list">
          <ListScene />
        </Route>
        <Route path="/detail/:id">
          <DetailScene />
        </Route>
      </Switch>
    </Router>
  );
};
