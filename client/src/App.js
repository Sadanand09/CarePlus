import React from 'react';
import ReactDOM from 'react-dom/client';
import { Toaster } from 'react-hot-toast';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './App.css';
import Home from './view/Home/Home';
import Form from './view/Form/Form';
import Login from './view/Login/Login';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/form",
      element: <Form />
    },
    {
      path: "/login",
      element: <Login />
    }
  ])

  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<>
    <Toaster />
    <RouterProvider router={router} />
  </>

  );
  return (
    <div className="App">

    </div>
  );
}

export default App;
