import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "../routes/AppRoutes";
import Content from "./content";
import Navbar from "./navbar";

const Layout = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Content>
          <AppRoutes />
        </Content>
      </Router>
    </div>
  );
};

export default Layout;
