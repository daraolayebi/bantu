import React from "react";
import {Link} from "react-router-dom";

const LandingHeading = () => {
	return (
		<section className="intro">
			<div className="container">
				<h1 className="intro-title">Find creative talent across Africa</h1>
				<p className="intro-subtitle">
					Be a part of our creator's community or find designers who are looking for their next opportunity.
				</p>

				<div className="intro-actions mt-3">
					<Link to="/signup" className="g-button g-button--white muted">
						Share your work
					</Link>
					<Link to="/discover" className="g-button g-button--white">
						Find talent
					</Link>
				</div>
			</div>
		</section>
	);
};

export default LandingHeading;
