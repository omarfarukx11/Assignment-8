import React from "react";
import { createBrowserRouter, Route } from "react-router";
import Root from "../Pages/Root/Root";
import Home from "../Pages/Home/Home";
import Apps from "../Pages/Apps/Apps";
import Installation from "../Pages/Installaton/Installation";
import AppDetails from "../Pages/AppDetails/AppDetails";
import NotFound from "../Pages/NotFound/NotFound";
import AppNotFound from "../Pages/AppNotFound/AppNotFound";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        loader: () => fetch("/data.json"),
        Component: Home,
      },
      {
        path: "/apps",
        loader: () => fetch("/data.json"),
        Component: Apps,
      },
      {
        path: "/install",
        loader: () => fetch("/data.json"),
        Component: Installation,
      },
      {
        path: "/appDetails/:id",
        loader: ({ params }) => fetch("/data.json"),
        Component: AppDetails,
      },

      {
        path: "/appNotFound",
        Component: AppNotFound,
      },
      {
        path: "/apps/*",
        Component: AppNotFound,
      },

      {
        path: "/*",
        Component: NotFound,
      },
    ],
  },
]);

export default router;
