import React, { Suspense } from "react";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const Navbar = React.lazy(() => import("nav/Navbar"));
const ProductPage = React.lazy(() => import("product_page/ProductPage"));

const StoreProviderLazy = React.lazy(() =>
  import("store_remote/Store").then((module) => ({
    default: module.StoreProvider,
  }))
);

import Layout from "./components/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Layout />
      </div>
    ),
  },
  {
    path: "/product-page/:id",
    element: (
      <div>
        <Suspense fallback={<>Navbar is loading...</>}>
          <Navbar />
        </Suspense>
        <Suspense fallback={<div>Loading Product Page...</div>}>
          <ProductPage />
        </Suspense>
      </div>
    ),
  },
  {
    path: "/nav",
    element: (
      <Suspense fallback={<>Navbar is loading...</>}>
        <Navbar />
      </Suspense>
    ),
  },
]);

function App() {
  return (
    <Suspense fallback={<div>Loading StoreProvider...</div>}>
      <StoreProviderLazy>
        <RouterProvider router={router} />
      </StoreProviderLazy>
    </Suspense>
  );
}

export default App;
