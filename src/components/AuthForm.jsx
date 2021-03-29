import React, {Component} from "react";
import FormInput from "../components/common/FormInput";

class AuthForm extends Component {
	state = {};

	renderInput = (name, label, type) => {
		const {data, errors} = this.state;
		return (
			<FormInput
				name={name}
				label={label}
				type={type}
				value={data[name]}
				// error={errors[name]}
				onChange={this.handleChange}
			/>
		);
	};

	render() {
		return <p></p>;
	}
}

export default AuthForm;
