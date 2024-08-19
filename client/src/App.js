import React from "react";
import ReactDOM from "react-dom/client";
import { Toaster } from "react-hot-toast";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./view/Home/Home";
import Form from "./view/Form/Form";
import Admin from "./view/Admin/Admin";
import Message from "./view/SuccessMessage/Message";

import Mail from "./view/Mail/Mail";

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
  ]);

  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(
    <>
      <Toaster />
      <RouterProvider router={router} />
    </>
  );
  return <div className="App"></div>;
}

export default App;
