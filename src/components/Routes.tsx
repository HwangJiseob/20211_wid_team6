import { Switch, Route } from "react-router-dom";

import pages from "@data/pages";
import stores from "@data/stores";
import { products } from "@data/products";
import Page from "@components/Page";
import Store from "@components/Store";
import Product from "@components/Product";
import { NotFound } from "@pages";

const Routes = () => {
  return (
    <Switch>
      {products.map((product) => {
        return (
          <Route
            key={product.path}
            exact
            path={product.path}
            component={() => {
              return (
                <Page title={product.name}>
                  <Product product={product} />
                </Page>
              );
            }}
          />
        );
      })}
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
