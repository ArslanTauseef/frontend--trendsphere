import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import {
  createBrowserRouter as routerArray,
  RouterProvider,
  Routes,
  Route,
} from "react-router-dom";

const router = routerArray([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/about",
        // element: <ChildComponent />,
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
