import React, {Fragment} from "react";

const ImageBanner = ({image, children}) => {
	return (
		<Fragment>
			<div className="image-banner" style={{backgroundImage: "url(" + image + ")"}}>
				{children}
			</div>
		</Fragment>
	);
};

export default ImageBanner;
