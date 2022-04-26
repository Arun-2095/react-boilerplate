import { Route, Routes } from "react-router-dom";

import { RouterMap } from "./router.js";

import React, { Component } from "react";

export default class AppRouter extends Component {
  render() {
    return (
      <React.Suspense fallback="<div> Testing </div>">
        <Routes>
          {RouterMap.map(({ path, Component, children = [], ...rest }, index) => {
            if (children.length > 0) {
              return (
                <Route key={path} path={path} element={<Component />}>
                  {children.map(({ path, Component: Child, ...rest }, index) => {
                    return <Route key={path} path={path} {...rest} element={<Child />} />;
                  })}
                </Route>
              );
            } else {
              return <Route key={path} path={path} element={<Component />} />;
            }
          })}
        </Routes>
      </React.Suspense>
    );
  }
}
