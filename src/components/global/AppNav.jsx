// import React from "react";
import React, {Component} from "react";
import {Link, NavLink} from "react-router-dom";
import Logo from "../../assets/icons/logo.svg";

class NavBar extends Component {
	render() {
		return (
			<nav className="navbar">
				<div className="container">
					<div className="navbar-list">
						<Link to="/" className="navbar-logo">
							<img src={Logo} alt="Bantu Logo" />
						</Link>
						<ul className="navbar-list-items">
							<li className="nav-item">
								<NavLink to="/jobs" className="nav-link" activeClassName="is-active">
									Jobs
								</NavLink>
							</li>
							<li className="nav-item">
								<NavLink to="/communities" className="nav-link" activeClassName="is-active">
									Communities
								</NavLink>
							</li>
							<li className="nav-item">
								<NavLink to="/discover" className="nav-link" activeClassName="is-active">
									Discover
								</NavLink>
							</li>
							<hr className="nav-border" />
							<li className="nav-item">
								<NavLink to="/login" className="nav-link" activeClassName="is-active">
									Log In
								</NavLink>
							</li>
							<li className="nav-item g-button g-button--nav">
								<NavLink className="navbar-brand" to="/signup">
									Sign Up
								</NavLink>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		);
	}
}

export default NavBar;
