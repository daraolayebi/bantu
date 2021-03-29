import React, {Fragment} from "react";

const AuthBanner = ({image, name}) => {
	return (
		<Fragment>
			<span className="auth-banner-label">
				Image by{" "}
				<a href="/home">
					<u>{name}</u>
				</a>
			</span>
			<div className="auth-banner" style={{backgroundImage: "url(" + image + ")"}}></div>
		</Fragment>
	);
};

export default AuthBanner;
