import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div
      style={{
        borderBottom: "2px solid lightgray",
        height: "8vh",
        display: "flex",
        alignItems: "center",
        padding: "0 2rem",
      }}
    >
      Navbar
      <ul style={{ display: "flex", justifyContent: "space-around" }}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/users">users</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
