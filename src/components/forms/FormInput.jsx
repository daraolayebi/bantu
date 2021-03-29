import React from "react";
import PropTypes from "prop-types";

const FormInput = ({name, type = "text", label, placeholder, value, onChange, error}) => {
	FormInput.propTypes = {
		name: PropTypes.string.isRequired,
		type: PropTypes.oneOf(["text", "number", "email", "file", "password"]),
		label: PropTypes.string,
		placeholder: PropTypes.string.isRequired,
		value: PropTypes.any,
		onChange: PropTypes.func.isRequired,
	};

	return (
		<div className="form-group">
			<label htmlFor={name}>
				<span className="form-field-label">{label}</span>
				<input
					className="form-field"
					type={type}
					placeholder={placeholder}
					name={name}
					value={value}
					onChange={onChange}
					style={error && {border: "solid 1px red"}}
					required
				/>
			</label>
			{error && <p>{error}</p>}
		</div>
	);
};

export default FormInput;
