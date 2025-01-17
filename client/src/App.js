import React from "react";
import { Toaster } from "react-hot-toast";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "@uploadcare/react-uploader/core.css";

import Home from "./view/Home/Home";
import Form from "./view/Form/Form";
import Admin from "./view/Admin/Admin";
import Message from "./view/SuccessMessage/Message";
import NotFound from "./view/NotFound/NotFound";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/form",
      element: <Form />,
    },
    {
      path: "/message",
      element: <Message />,
    },
    {
      path: "/admin",
      element: <Admin />,
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);

  return (
    <>
      <Toaster />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
