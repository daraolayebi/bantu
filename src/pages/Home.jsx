import React from "react";
import LandingHeading from "../components/LandingHeading";
import FeaturedWork from "../components/FeaturedWork";
import ComingSoon from "../components/ComingSoon";

const Home = () => {
	return (
		<React.Fragment>
			<LandingHeading />
			<FeaturedWork />
			<ComingSoon />
		</React.Fragment>
	);
};

export default Home;
