import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";

import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import Product from "./pages/Product/Product";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

import "./App.scss"

{/* The page structure. Outlet will be each element between Navbar and Footer */}
const Layout = () => 
{
  return(
    <div className="app">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    // The children is the replacement of <Outlet /> in every page.
    children:
    [
      {
        path: "/",
        element: <Home />
      },
      {
        // It will provide the type/category of products.
        path: "/products/:id",
        element: <Products />
      },
      {
        // It will provide the product id to display it on a single page.
        path: "/product/:id",
        element: <Product />
      },
    ]
  },
]);

function App() {

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
