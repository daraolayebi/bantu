import React, {Fragment} from "react";
import {Link, useLocation} from "react-router-dom";
import AuthBanner from "../AuthBanner";
import Logo from "../../assets/icons/logo.svg";

const AuthLayout = ({children}) => {
	const location = useLocation();
	let image = "";
	let name = "";

	if (location.pathname === "/login") {
		image = "https://bantu.netlify.app/static/media/theayophillips.10742cca.jpg";
		name = "Shutabug";
	} else {
		image = "https://bantu.netlify.app/static/media/theseyekehinde.0517c094.jpg";
		name = "SeyeKehinde";
	}

	return (
		<Fragment>
			<section className="auth-layout">
				<main className="auth-form-container">
					<Link to="/" className="navbar-logo">
						<img src={Logo} alt="Bantu Logo" width="80" />
					</Link>
					<p className="auth-link">
						{location.pathname === "/login" ? <Link to="/signup">Sign Up</Link> : <Link to="/login">Log In</Link>}
					</p>
					{children}
				</main>
				<aside className="auth-panel">
					<AuthBanner image={image} name={name} />
				</aside>
			</section>
		</Fragment>
	);
};

export default AuthLayout;
