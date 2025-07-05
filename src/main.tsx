import "./index.css";
import App from "./App.tsx";
import Error from "../src/components/ErrorPage/errorPage.tsx";
import CatalogOfRoses from "./components/roseSeedlings/RoseCatalog.tsx";
import EnglandRoseCatalog from "./components/roseSeedlings/EnglandRoseCatalog.tsx";
import TeaHYbride from "./components/roseSeedlings/TeaHYbride.tsx";
import BordersRose from "./components/roseSeedlings/BordersRose.tsx";
import CreepingRoseCatalog from "./components/roseSeedlings/CreepingRoseCatalog.tsx";
import TeaHybrideSunRoseDetalicPage from "./components/roseSeedlings/TeaHybrideSunRoseDetalicPage.tsx";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from "react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/error",
    element: <Error />,
  },
  {
    path: "/catalog-of-roses",
    element: <CatalogOfRoses />,
  },
  {
    path: "/catalog-of-roses/catalog-england-rose",
    element: <EnglandRoseCatalog />,
  },
  {
    path: "/catalog-of-roses/catalog-tea-hybride-rose",
    element: <TeaHYbride />,
  },
  {
    path: "/catalog-of-roses/catalog-borders-rose",
    element: <BordersRose />,
  },
  {
    path: "/catalog-of-roses/catalog-creeping-rose",
    element: <CreepingRoseCatalog />,
  },
  {
    path: "/catalog-of-roses/catalog-tea-hybride-sun-rose",
    element: <TeaHybrideSunRoseDetalicPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
