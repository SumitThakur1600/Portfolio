import React from "react";
import {Outlet} from "react-router";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
export default function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
