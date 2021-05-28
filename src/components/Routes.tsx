import { Switch, Route } from "react-router-dom";

import pages from "@data/pages";
import stores from "@data/stores";
import Page from "@components/Page";
import Store from "@components/Store";
import { NotFound } from "@pages";

const Routes = () => {
  return (
    <Switch>
      {stores.map((store) => {
        return (
          <Route
            key={store.id}
            exact
            path={store.path}
            component={() => {
              return (
                <Page title={store.name}>
                  <Store store={store} />
                </Page>
              );
            }}
          />
        );
      })}
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
      <Route
        component={() => {
          return (
            <Page title="Page Error">
              <NotFound />
            </Page>
          );
        }}
      />
    </Switch>
  );
};

export default Routes;
