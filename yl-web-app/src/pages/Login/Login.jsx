import { Form, Input, Button } from 'antd';
import React from "react";
import { Link } from "react-router-dom";
import "./Login.less";
const onFinish = (values) => {
    setTimeout(() => {
        console.log("Received values of Login form: ", values);
    }, 2000);
}

const Login = () => {
    return (
        <div className="auth">
            <h1>Login Page</h1>
            <Form className="login-form" initialValues={{ remember: true }} onFinish={onFinish}>
                <Form.Item name="username" rules={[{ required: true, message: '请输入用户名!' }]}>
                    <Input type="text" placeholder="username" />
                </Form.Item>
                <Form.Item name="userpassword" rules={[{ required: true, message: '请输入密码!' }]}>
                    <Input type="password" placeholder="password" />
                </Form.Item>
                <Form.Item>
                    <Button className="sub-button" type="primary" htmlType="submit" >登录</Button>
                </Form.Item>
                <span>
                    <p className="tips">Don't you have an account </p>
                    <Link to="/register">Register</Link>
                    <p className="error">Error!</p>
                </span>
            </Form >
        </div >

    );
}
export default Login;