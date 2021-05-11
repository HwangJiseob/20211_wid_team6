import React from "react";
import { Switch, Route } from "react-router-dom";
import pages from "../data/pages";

const Routes = () => {
  return (
    <Switch>
      {pages.map((page) => {
        return (
          <Route
            key={page.name}
            exact
            path={page.path}
            component={page.component}
          />
        );
      })}
    </Switch>
  );
};

export default Routes;
