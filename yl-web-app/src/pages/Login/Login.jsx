import { Form, Input, Button, message } from 'antd';
import React from "react";
import { useState } from 'react';
import { Link } from "react-router-dom";
import "./Login.less";
import ajax from "../../ajax.js";
import axios from 'axios';


const postUrl = 'http://127.0.0.1:7001/jwtlogin';

const Login = () => {
    const [username, setUsername] = useState("");
    const [userpassword, setUserpassword] = useState("");
    // const [token, setToken] = useState("");
    let token = null;
    const checkLogin = () => {

    }
    const onFinish = () => {
        ajax("http://127.0.0.1:7001/jwtlogin", { username: username, password: userpassword }, 'POST')
            .then(res => {
                // setToken(res.token);
                token = res.token
                console.log("code is " + res.code + " token is " + token);
            })
            .then(() => { console.log("token calibration") })
            .then(() => {
                axios.get("http://127.0.0.1:7001/jwtmessage",
                    {
                        headers:
                        {
                            'token': token,
                        }
                    })
                    .then(res => {
                        console.log("code is " + res.data.code + " " + res.data.msg)
                        if (res.data.code == 2000) {
                            // alert("登录成功");
                            message.success("登录成功")
                        }
                        else {
                            // alert("账号或密码错误");
                            message.error("账号或密码错误");
                        }
                    });

            });

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
                        onClick={checkLogin}
                    >
                        登录
                    </Button>
                </Form.Item>
                <span>
                    <p className="tips">Don't you have an account </p>
                    <Link to="/register">Register</Link>
                </span>
            </Form >
        </div >

    );
}
export default Login;