import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";

import Home from "./pages/Home";
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { Nosotros } from './pages/Nosotros';
import { Product } from './pages/Product';
import { Carrito } from './pages/Carrito';
import { Detalle } from './pages/Detalle';

import './App.css'
import "./styles.scss";

const Layout = () => {
  return(
    <>
      <Navbar />
      <Outlet/>
      <Footer/>
    </>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path:"/",
        element: <Home />
      },
      {
        path:"/nosotros",
        element: <Nosotros />
      },
      {
        path:"/carrito",
        element: <Carrito />
      },
      {
        path:"/detalle",
        element: <Detalle />
      },
      {
        path:"/product/:id",
        element: <Product />
      }
    ]
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

function App() {

  return (
    <div className="app">
      <div className="container">
        <RouterProvider router={router} />
      </div>
    </div>
  )
}



export default App
