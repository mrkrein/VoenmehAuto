import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import MouseContextProvider from "./context/mouse-context";


import App from './pages/App';
import DocPage from "./pages/doc-page";
import Price from "./pages/price";
import Contact from "./pages/contact";
import Reviews from "./pages/reviews";
import ErrorPage from "./pages/error-page";
import Login from "./pages/login";
import Register from "./pages/register";
import UserLK from "./pages/user-lk";
import UserExam from "./pages/exam/exam";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/documents",
    element: <DocPage />,
  },
  {
    path: "/price",
    element: <Price />,
  },
  {
    path: "/contacts",
    element: <Contact />,
  },
  {
    path: "/reviews",
    element: <Reviews />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/lk",
    element: <UserLK />,
  },
  {
    path: "/lk/exam",
    element: <UserExam />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MouseContextProvider>
      <RouterProvider router={router} />
    </MouseContextProvider>
  </React.StrictMode>
);

