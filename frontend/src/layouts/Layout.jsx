import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Outlet />
    </main>
  );
};

export default Layout;
