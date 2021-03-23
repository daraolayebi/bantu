// import React from "react";
import React, {Component} from "react";
import {Link, NavLink} from "react-router-dom";
import Logo from "../assets/icons/Logo.svg";

class NavBar extends Component {
	render() {
		return (
			<nav className="navbar">
				<div className="container">
					<div className="navbar-list">
						<Link to="/" className="navbar-brand">
							<img src={Logo} alt="Bantu Logo" className="logo" />
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
								<span onClick={() => window.location.replace("/#signup")} className="nav-link">
									Sign Up
								</span>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		);
	}
}

export default NavBar;
