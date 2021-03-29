import React, {Component} from "react";
import FormInput from "../components/forms/FormInput";
import FormButton from "../components/forms/FormButton";
import {Link} from "react-router-dom";

class Login extends Component {
	state = {
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
		const {email, password, errors} = this.state;
		return (
			<div className="form-wrapper">
				<h3 className="form-heading">Welcome back</h3>
				<form onSubmit={this.handleSubmit}>
					<FormInput
						name="email"
						type="email"
						label="Email Address"
						value={email}
						placeholder="hello@example.com"
						onChange={this.handleChange}
						error={errors.email}
					/>
					<FormInput
						name="password"
						type="password"
						label="Password"
						value={password}
						placeholder="Password"
						onChange={this.handleChange}
						error={errors.password}
					/>
					<FormButton label="Log In" />

					<div className="form-footer">
						<p>
							<Link to="/forgotpassword">Forgot Password?</Link>
						</p>
						<p>
							New here? <Link to="/signup">Sign Up</Link>
						</p>
					</div>
				</form>
			</div>
		);
	}
}

export default Login;
