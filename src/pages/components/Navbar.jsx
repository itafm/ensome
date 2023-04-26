import Image from "next/image";
import logo from "../../../public/img/logo.png";
import React from "react";
import { NavLink } from "react-bootstrap";
import { FaRegPlayCircle} from 'react-icons/fa';

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container header ">
          <div>
            <Image className="" src={logo} width={141} height={42} alt={logo} />
          </div>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse d-flex justify-content-center" id="navbarNavDropdown">

            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink
                  className
                  active="nav-link "
                  aria-current="page"
                  href="#"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" href="#">
                  Solutions
                </NavLink>
              </li>

              <li className="nav-item dropdown">
                <NavLink
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Pages
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" href="#">
                  Elements
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" href="#">
                  Blog
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" href="#">
                  Contacts
                </NavLink>
              </li>
            </ul>
          </div>
          <button className="btn btn-primary "><FaRegPlayCircle /> Watch the demo</button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
