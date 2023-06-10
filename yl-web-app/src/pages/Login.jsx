import React from "react";
// import { Link } from "react-router-dom";
const Login = () => {
    return (
        <div className="auth">
            <h1>Login Page</h1>
            <form>
                <input type="text" placeholder="username" />
                <input type="password" placeholder="password" />
                <button>登录</button>
                <span>
                    <p className="tips">Don't you have an account </p>
                    {/* <Link to="/register">Register</Link> */}
                    <p className="error">Error!</p>
                </span>

            </form>
        </div>

    );
}
export default Login;