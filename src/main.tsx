import React from "react";
import ReactDOM from "react-dom/client";
import ErrorPage from "./components/ErrorPage/errorPage";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
// import App from "./App";
import CatalogLayout from "./components/roseSeedlings/CatalogLayout ";
// import MainPage from "./components/mainPage";
import RoseCatalog from "./components/roseSeedlings/RoseCatalog";
import EnglandRose from "./components/roseSeedlings/EnglandRoseCatalog";
import TeaHybrid from "./components/roseSeedlings/TeaHYbride";
import BordersRose from "./components/roseSeedlings/BordersRose";
import CreepingRoseCatalog from "./components/roseSeedlings/CreepingRoseCatalog";
import MainPage from "./components/mainPage";
import SingleTeaRosePage from "./components/roseSeedlings/TeaHybrideSunRoseDetalicPage";
import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "catalog",
    element: <CatalogLayout />,
    children: [
      {
        path: "roses",
        children: [
          {
            index: true,
            element: <RoseCatalog />,
          },
          {
            path: "england",
            element: <EnglandRose />,
          },
          {
            path: "tea",
            children: [
              {
                index: true,
                element: <TeaHybrid />,
              },
              {
                path: "sunnyrose",
                element: <SingleTeaRosePage />, // якщо потрібна деталка
              },
            ],
          },
          {
            path: "borders",
            element: <BordersRose />,
          },
          {
            path: "creeping",
            element: <CreepingRoseCatalog />,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
