import React from "react";
import {Link} from "react-router-dom";
import AppNav from "../global/AppNav";

const MainLayout = ({children}) => {
	return (
		<section className="main-layout">
			<AppNav />
			<main className="main-container">{children}</main>
			<footer>
				<div className="container">
					<div className="footer-inner">
						<ul className="footer-inner--list">
							<li>
								<Link to="/contact">Contact</Link>
							</li>
							<li>
								<Link to="/terms">Terms</Link>
							</li>
						</ul>
						<p>&copy; 2021 Bantu. All rights reserved.</p>
					</div>
				</div>
			</footer>
		</section>
	);
};

export default MainLayout;
