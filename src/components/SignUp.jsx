import React, { Component } from 'react';
import axios from 'axios'

class SignUp extends Component {
    state = {  loading: false, submitted: false, timestamp: "", email: "", occupation: "default" }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({ loading: true })
        const data = new FormData()
        data.append('timestamp', new Date())
        data.append('email', this.state.email)
        data.append('occupation', this.state.occupation)
        const scriptURL = "https://script.google.com/macros/s/AKfycbzSxzwLt883aYqzt509cEsqxsKVQTSsOcJ_VFhJm0BLZ6Wfr_DPQ6CXLZmr9UpEL2xT/exec" 
        // 'https://script.google.com/macros/s/AKfycbzNtg0GyRgEW-nk0UR8PUY3L1ytu4YvG4lW-Psf1KZrzFYyE6wYH8NK2Q/exec'
        axios.post(scriptURL, data)
        .then(response => {
            this.setState({ 
                loading: false, 
                submitted: true, 
                timestamp: "", 
                email: "", 
                occupation: "" 
            })
            return (
                <small>Your details have been submitted!</small>
              )
        })
        .catch(error => {
            this.setState({ loading: false, submitted: false })
            alert(error)
        }) 
    }   

    handleChange = (event) => {
        const {name, value} = event.target
        this.setState({ [name]: value }) 
    }
        
    render() { 
        const { loading } = this.state;
        return ( 
            <div id="signup" className="signup text-center">
                <div className="container">
                    <h2>Get notified when we launch</h2>
                    <form name="sign-up" className="signup-form" onSubmit={this.handleSubmit}>
                        <input type="email" name="email" value={this.state.email} onChange={this.handleChange.bind(this)} placeholder="Your email" required />
                        <select name="occupation" value={this.state.occupation} onChange={this.handleChange.bind(this)} required>
                            <option value="default" disabled>What you do</option>
                            <option value="Photographer">Photographer</option>
                            <option value="Graphic Designer">Graphic Designer</option>
                            <option value="UI/UX Designer">UI/UX Designer</option>
                            <option value="Developer">Developer</option>
                            <option value="Illustrator">Illustrator</option>
                            <option value="Cinematographer">Cinematographer</option>
                            <option value="3D Animator">3D Animator</option>
                        </select>
                        <button type="submit" className="button button-signup" disabled={loading}>{loading ? 'Signing Up ...' : 'Sign Up'}</button>
                        <small>{}</small>
                    </form>
                </div>
            </div>
        );
    }
}
 
export default SignUp;