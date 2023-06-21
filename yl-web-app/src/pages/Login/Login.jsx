import { Form, Input, Button, message } from 'antd';
import { useState } from 'react';
import { Link, Navigate, redirect, useNavigate } from "react-router-dom";
import ajax from "../../provider/ajax.jsx";
import axios from "axios";
import { useToken } from "../../provider/tokenProvider";
import "./Login.less";

const Login = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [userpassword, setUserpassword] = useState("");
    const { setToken } = useToken();

    const onFinish = () => {
        ajax("/jwtlogin", { username: username, password: userpassword }, 'POST')
            .then(res => {
                setToken(res.token);
                if (res.code === 2000) {
                    message.success("登录成功")
                    navigate("/home", { replace: true });
                }
                else {
                    message.error("账号或密码错误");
                }
            })
    }
    return (
        <div className="auth">
            <h1>Login Page</h1>
            <Form className="login-form" initialValues={{ remember: true }} onFinish={onFinish}>
                <Form.Item name="username" rules={[{ required: true, message: '请输入用户名!' }]}>
                    <Input
                        type="text"
                        placeholder="username"
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </Form.Item>
                <Form.Item name="userpassword" rules={[{ required: true, message: '请输入密码!' }]}>
                    <Input
                        type="password"
                        placeholder="password"
                        onChange={(e) => setUserpassword(e.target.value)}
                    />
                </Form.Item>
                <Form.Item>
                    <Button
                        className="sub-button"
                        type="primary"
                        htmlType="submit"
                    >
                        登录
                    </Button>
                </Form.Item>
                <span>
                    <p className="tips">Don't you have an account </p>
                    <Link to="/register">Register</Link>  <br />
                    <Link to="/home">Home</Link>
                </span>
            </Form >
        </div >

    );
}
export default Login;