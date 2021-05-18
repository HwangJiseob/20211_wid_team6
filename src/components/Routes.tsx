import { Switch, Route } from "react-router-dom";
import pages from "@data/pages";

import Page from "@components/Page";

const Routes = () => {
  return (
    <Switch>
      {pages.map((page) => {
        return (
          <Route
            key={page.name}
            exact
            path={page.path}
            component={() => {
              const Component = page.component;
              return (
                <Page title={page.title}>
                  <Component />
                </Page>
              );
            }}
          />
        );
      })}
    </Switch>
  );
};

export default Routes;
