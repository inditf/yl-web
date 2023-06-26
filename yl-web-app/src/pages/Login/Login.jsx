import { Spin, Form, Input, Button, message } from 'antd';
import { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import ajax from "../../provider/ajax.jsx";
import { useToken } from "../../provider/tokenProvider";
import "./Login.less";

const Login = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [userpassword, setUserpassword] = useState("");
    const [loading, setLoading] = useState(false);
    const { setToken } = useToken();

    const onFinish = () => {
        setLoading(true);
        ajax("/jwtlogin", { username: username, password: userpassword }, 'POST')
            .then(res => {
                if (res.code === 2000) {
                    setToken(res.token);
                    message.success(res.msg)
                    localStorage.setItem('username', username);
                    navigate("/home", { replace: true });
                }
                else {
                    setToken(null);
                    message.error(res.msg);
                    setTimeout(() => { setLoading(false) }, 500);
                }
            })
    }
    return (
        <div className="auth">
            <h1>Login Page</h1>
            <Spin tip="Loading..." spinning={loading} size="large">
                <Form
                    className="login-form"
                    onFinish={onFinish}>
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
                        <Link to="/register">Register</Link>
                        <br />
                        <Link to="/home"><strong>Home</strong></Link>

                    </span>
                </Form >
            </Spin>
        </div >

    );
}
export default Login;