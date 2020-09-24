import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Main from './components/Main';
import Show from './components/Show';
import New from './components/New';

require("dotenv").config();

export default function App() {
  // ROUTES ================================== //

  const routes = [
    {
      path: "/recipes",
      exact: true,
      component: Main,
      key: "main",
    },
    {
      path: "/new",
      exact: true,
      component: New,
      key: "new"
    },
    {
      path: "/recipes/:id",
      component: Show,
      key: "show"
    },
  ];
  return (
    <BrowserRouter>
      {routes.map((route) => {
        return (
          <Route
            component={route.component}
            path={route.path}
            key={route.key}
            exact={route.exact}
          />
        );
      })}
    </BrowserRouter>
  );
}
