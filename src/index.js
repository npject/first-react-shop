import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'; 
import Layout from './pages/Layout';
import Home from './pages/Home';
import Products from './pages/Products';
import PageNotFound from './pages/PageNotFound';
import SingleProduct, {loader as loaderSingle} from './pages/single-product';
import Cart from './pages/Cart';

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
  {
    path:"/",
    Component:Layout,
    errorElement: <PageNotFound />,
    children: [
      {
        index:true,
        Component:Home
      },
      {
        path:"shop",
        Component:Products
      },
      {
        path:"shop/:id",
        Component:SingleProduct,
        loader:loaderSingle
      },
      {
        path:"cart",
        Component:Cart
      }
    ]
  }
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
