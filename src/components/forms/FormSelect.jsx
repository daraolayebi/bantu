import React from "react";
import PropTypes from "prop-types";

const FormSelect = ({name, label, value, options, onChange, error, ...props}) => {
	FormSelect.propTypes = {
		name: PropTypes.string.isRequired,
		label: PropTypes.string,
		value: PropTypes.any.isRequired,
		options: PropTypes.array.isRequired,
		onChange: PropTypes.func.isRequired,
	};

	return (
		<div className="form-group">
			<label htmlFor={name}>
				<span className="form-field-label">{label}</span>
				<select
					className="form-field"
					name={name}
					value={value}
					onChange={onChange}
					style={error && {border: "solid 1px red"}}
					required>
					{options.map((option, index) => (
						<option key={index} value={option}>
							{option}
						</option>
					))}
				</select>
			</label>
			{error && <p>{error}</p>}
		</div>
	);
};

export default FormSelect;
