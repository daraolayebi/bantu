import React from "react";

const FormButton = ({label}) => {
	return (
		<div className="form-group">
			<button className="form-button" type="submit">
				{label}
			</button>
		</div>
	);
};

export default FormButton;
