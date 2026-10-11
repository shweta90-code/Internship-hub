import React from "react";
import "../css/header.css";
import { NavLink,Link } from "react-router-dom";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark custom-navbar">
      <div className="container">

        {/* Logo */}
        <NavLink className="navbar-brand" to="/">
         Internship hub
        </NavLink>

        {/* Mobile Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu */}
        <div className="collapse navbar-collapse" id="navbarContent">

          <ul className="navbar-nav mx-auto">

            <li className="nav-item">
              <NavLink className="nav-link active" to="/">
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/aboutUs">
                About Us
              </NavLink>
            </li>
             <li className="nav-item">
              <NavLink className="nav-link" to="/contactUs">
                Contact Us
              </NavLink>
            </li>

            <li className="nav-item dropdown">
              <NavLink
                className="nav-link dropdown-toggle"
                to="#"
                role="button"
                data-bs-toggle="dropdown"
              >
                Registration
              </NavLink>

              <ul className="dropdown-menu">
                <li>
                  <NavLink className="dropdown-item" to="/studentRegistration">
                     Student Registration
                  </NavLink>
                </li>

                {/* <li>
                  <NavLink className="dropdown-item" to="/providerRegistration">
                    Provider Registration
                  </NavLink>
                </li> */}
              </ul>
            </li>
            <li className="nav-item dropdown">
              <NavLink
                className="nav-link dropdown-toggle"
                to="#"
                role="button"
                data-bs-toggle="dropdown"
              >
                Login
              </NavLink>

              <ul className="dropdown-menu">
                <li>
                  <NavLink className="dropdown-item" to="/adminLogin">
                    Admin Login
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/studentLogin">
                    Student Login
                  </NavLink>
                </li>


                {/* <li>
                  <NavLink className="dropdown-item" to="/providerLogin">
                    Provider Login
                  </NavLink>
                </li> */}
              </ul>
            </li>
            {/* <li className="nav-item">
              <NavLink className="nav-link" to="/feedback">
                Feedback
              </NavLink>
            </li>  */}
            <li className="nav-item">
              <NavLink className="nav-link" to="/allNoticeCommon">
                Notices
              </NavLink>
            </li>
           
            <li className="nav-item">
              <NavLink className="nav-link" to="/internshipGallery">
                Gallery
              </NavLink>
            </li>



          </ul>


        </div>
      </div>
    </nav>
  );
}

export default Header;