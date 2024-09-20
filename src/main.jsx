import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Add from "./screens/add";
import Completed from "./screens/completed";
import { ContextProvider } from "./context/TodoContext.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Navigate to={"/add"} replace /> },
      { path: "add", element: <Add /> },
      { path: "completed", element: <Completed /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContextProvider>
      <RouterProvider router={router} />
      <ToastContainer />
    </ContextProvider>
  </React.StrictMode>
);
