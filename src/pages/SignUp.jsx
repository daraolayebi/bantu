import React, {Component} from "react";
import {Link} from "react-router-dom";
import FormInput from "../components/forms/FormInput";
import FormSelect from "../components/forms/FormSelect";
import FormButton from "../components/forms/FormButton";

class SignUp extends Component {
	state = {
		name: "",
		occupation: "",
		location: "",
		email: "",
		password: "",
		errors: {},
		submitted: false,
	};
	handleChange = (event) => {
		this.setState({[event.target.name]: event.target.value});
	};

	handleSubmit = (event) => {
		event.preventDefault();
		alert("You have submitted the form.");
	};

	render() {
		const {name, occupation, location, email, password, errors} = this.state;
		return (
			<div className="form-wrapper">
				<h3 className="form-heading">Join other amazing creatives</h3>
				<form onSubmit={this.handleSubmit}>
					<FormInput
						name="name"
						value={name}
						label="Your name"
						placeholder="Your name"
						onChange={this.handleChange}
						// error={errors.username}
					/>
					<div className="form-field-row">
						<FormSelect
							name="occupation"
							value={occupation}
							label="What do you do?"
							options={[
								"Photographer",
								"Graphic Designer",
								"UI/UX Designer",
								"Illustrator",
								"Cinematographer",
								"3D Animator",
							]}
							onChange={this.handleChange}
							// error={errors.username}
						/>
						<FormInput
							name="location"
							value={location}
							label="Location"
							placeholder="Lagos, Nigeria"
							onChange={this.handleChange}
							// error={errors.username}
						/>
					</div>
					<FormInput
						name="email"
						type="email"
						value={email}
						label="Email Address"
						placeholder="hello@example.com"
						onChange={this.handleChange}
						// error={errors.username}
					/>
					<FormInput
						name="password"
						type="password"
						value={password}
						label="Password"
						placeholder="Password"
						onChange={this.handleChange}
						error={errors.password}
					/>
					<small>
						By signing up, you agree to our <span>Terms and Conditions</span> and <span>Privacy Policy</span>.
					</small>
					<FormButton label="Create your account" />
					<div className="form-footer">
						<p>
							Already have an account? <Link to="/login">Log In</Link>
						</p>
					</div>
				</form>
			</div>
		);
	}
}

export default SignUp;
