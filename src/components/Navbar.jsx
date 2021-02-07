import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from '../assets/icons/logo.svg'

const NavBar = () => {
  return (
    <nav className="navbar">
        <div className="container">
            <div className="navbar-list">
                <Link to="/" className="navbar-brand">
                    <img src={logo} alt="Bantu Logo" width="130" />
                </Link>
                <ul className="navbar-list-items">
                <li className="nav-item">
                    <NavLink to="/jobs" className="nav-link private" activeClassName="is-active">
                    Jobs
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/communities" className="nav-link private" activeClassName="is-active">
                    Communities
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/discover" className="nav-link private" activeClassName="is-active">
                    Discover
                    </NavLink>
                </li>
                <li className="nav-item button">
                    <NavLink to="/login" className="nav-link">
                    Sign Up
                    </NavLink>
                </li>
                </ul>
            </div>
        </div>
    </nav>
  );
};

export default NavBar;
