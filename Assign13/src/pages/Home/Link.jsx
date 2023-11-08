import React from "react";
import { NavLink } from "react-router-dom";

function Link() {
  return (
    <>
      <ul className="d-flex gap-4 " style={{ listStyle: "none" }}>
        <li>
          <NavLink
            className={({ isActive, isPending }) =>
              isActive ? "active link" : isPending ? "pending link" : "link"
            }
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className="link" to="/Blog">
            Blog
          </NavLink>
        </li>
        <li>
          <NavLink className="link" to="/Contact">
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink className="link" to="/About">
            About
          </NavLink>
        </li>
        <li>
          <NavLink className="link" to="/Project">
            Project
          </NavLink>
        </li>
        <li>
          <NavLink className="link" to="/Service">
            Service
          </NavLink>
        </li>
      </ul>
    </>
  );
}

export default Link;
