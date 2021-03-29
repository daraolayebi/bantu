import React, {Component} from "react";
import axios from "axios";

class SignUp extends Component {
	state = {
		timestamp: "",
		email: "",
		occupation: "default",
		loading: false,
		submitted: false,
	};

	handleSubmit = (e) => {
		e.preventDefault();
		this.setState({loading: true, submitted: false});
		const data = new FormData();
		data.append("timestamp", new Date());
		data.append("email", this.state.email);
		data.append("occupation", this.state.occupation);
		const scriptURL =
			"https://script.google.com/macros/s/AKfycbzSxzwLt883aYqzt509cEsqxsKVQTSsOcJ_VFhJm0BLZ6Wfr_DPQ6CXLZmr9UpEL2xT/exec";
		axios
			.post(scriptURL, data)
			.then((response) => {
				this.setState({
					loading: false,
					submitted: true,
					timestamp: "",
					email: "",
					occupation: "default",
				});
			})
			.catch((error) => {
				this.setState({loading: false, submitted: false});
				alert(error);
			});
	};

	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value,
		});
	};

	render() {
		const {email, occupation, loading, submitted} = this.state;
		return (
			<section id="signup" className="signup text-center">
				<div className="container">
					<h2>Get notified when we launch</h2>
					<form name="sign-up" className="signup-form" onSubmit={this.handleSubmit}>
						<label htmlFor="email" aria-label="Email" title="Email"></label>
						<input
							type="email"
							id="email"
							name="email"
							value={email}
							onChange={this.handleChange}
							placeholder="Your email address"
							required
						/>
						<label htmlFor="occupation" aria-label="Occupation" title="Occupation"></label>
						<select value={occupation} id="occupation" name="occupation" onChange={this.handleChange} required>
							<option disabled value="default">
								What you do
							</option>
							<option value="Photographer">Photographer</option>
							<option value="Graphic Designer">Graphic Designer</option>
							<option value="UI/UX Designer">UI/UX Designer</option>
							<option value="Illustrator">Illustrator</option>
							<option value="Cinematographer">Cinematographer</option>
							<option value="3D Animator">3D Animator</option>
						</select>
						<button type="submit" className="button button-signup" disabled={loading}>
							{loading ? "Signing Up ..." : "Sign Up"}
						</button>
					</form>
					<span className="success-message">
						{submitted ? "Your details have been submitted successfully! Thank you!" : ""}
					</span>
				</div>
			</section>
		);
	}
}

export default SignUp;
