import React from "react";
// import { Link } from "react-router-dom";
const Register = () => {
    return (

        <div className="auth">
            <h1>Register Page</h1>
            <form>
                <input type="text" placeholder="username" />
                <input type="email" placeholder="email" />
                <input type="password" placeholder="password" />
                <input type="password" placeholder="confirm password" />
                <button>注册</button>
                <span>
                    <p className="tips">Do you have an account?</p>
                    {/* <Link to="/login">  Log in</Link> */}
                    <p className="error">Error!</p>
                </span>
            </form>
        </div>

    );
}
export default Register;