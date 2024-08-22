import React from "react";
import ReactDOM from "react-dom/client";
import { Toaster } from "react-hot-toast";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "@uploadcare/react-uploader/core.css";

import Home from "./view/Home/Home";
import Form from "./view/Form/Form";
import Admin from "./view/Admin/Admin";
import Message from "./view/SuccessMessage/Message";
import NotFound from "./view/NotFound/NotFound";
import Signin from "./components/GoogleSignin/Signin";

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
      element: <NotFound/>
    }
    
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
