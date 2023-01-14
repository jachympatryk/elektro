import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { useDidUpdate } from "@better-typed/react-lifecycle-hooks";

import { PageRoute } from "components";
import { routes } from "config";

import "./assets/styles/app.scss";

export const App: React.FC = () => {
  const { pathname } = useLocation();

  useDidUpdate(() => {
    window.scroll({ top: 0, left: 0, behavior: "smooth" });
  }, [pathname]);

  return (
    <Routes>
      {routes.map((route) => (
        <Route key={route.name} path={route.path} element={<PageRoute {...route} />} />
      ))}
    </Routes>
  );
};
