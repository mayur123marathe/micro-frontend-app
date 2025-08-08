import React, { Suspense } from "react";
const Navbar = React.lazy(() => import("nav/Navbar"));
import Body from "./Body";

export default function Layout() {
  return (
    <>
      <Suspense fallback={<>Navbar is loading...</>}>
        <Navbar />
      </Suspense>
      <Body />
    </>
  );
}
