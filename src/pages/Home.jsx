import React from "react";
import FeaturedWork from "../components/FeaturedWork";
import ComingSoon from "../components/ComingSoon";
import SignUp from "../components/SignUp";

const Home = () => {
	return (
		<React.Fragment>
			<section className="intro">
				<div className="container">
					<h1 className="title is-1">Find creative talent across Africa</h1>
					<p className="subtitle">
						Be a part of our creator's community or find designers who are looking for their next opportunity.
					</p>
				</div>
			</section>
			<FeaturedWork />
			<ComingSoon />
			<SignUp />
			<footer className="footer">
				<p>&copy; 2021 Bantu. All rights reserved.</p>
			</footer>
		</React.Fragment>
	);
};

export default Home;
