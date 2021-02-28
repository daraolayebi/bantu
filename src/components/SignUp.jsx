import React from 'react';

const SignUp = () => {
    return (
        <div id="signup" className="signup text-center">
            <div className="container">
                <h2>Get notified when we launch</h2>
                <form action="" className="signup-form" onSubmit={saveData}>
                    <input type="email" name="email" placeholder="Your email"/>
                    <select name="occupation" id="occupation" defaultValue={'default'} >
                        <option value="default" disabled>What you do</option>
                        <option value="Photographer">Photographer</option>
                        <option value="Graphic Designer">Graphic Designer</option>
                        <option value="UI/UX Designer">UI/UX Designer</option>
                        <option value="Developer">Developer</option>
                        <option value="Illustrator">Illustrator</option>
                        <option value="Cinematographer">Cinematographer</option>
                        <option value="3D Animator">3D Animator</option>
                    </select>
                    <button type="submit" className="button button-signup">Sign Up</button>
                </form>
            </div>
        </div>
    )
    
    function saveData() {
        //...
    }
}

export default SignUp;