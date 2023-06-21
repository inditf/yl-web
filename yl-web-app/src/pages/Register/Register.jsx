import { Form, Input, Button } from 'antd';
import { Link } from "react-router-dom";
import { useState } from 'react';
import "./Register.less"


const Register = () => {
    const [username, setUserName] = useState("");
    const [useremail, setUserEmail] = useState("");
    const [userpassword, setUserPassword] = useState("");
    const [userrepassword, setUserRePassword] = useState("");
    const onFinish = () => {
        setTimeout(() => {
            console.log("username:", username, "password:", userpassword);
        }, 2000);
    }
    return (
        <div className="auth">
            <h1>Register Page</h1>
            <Form
                className="login-form"
                initialValues={{ remember: true }}
                onFinish={onFinish}
            >
                <Form.Item
                    name="user-name"
                    rules={[{ required: true, message: '请输入用户名!' }]}
                >
                    <Input
                        type="text"
                        placeholder="username"
                        onChange={(e) => setUserName(e.target.value)}
                    />
                </Form.Item>


                <Form.Item
                    name="user-email"
                    rules={[
                        {
                            type: 'email',
                            message: '请输入正确的E-mail!',
                        },
                        {
                            required: true,
                            message: '请输入E-mail!'
                        },
                    ]}
                >
                    <Input
                        placeholder="email"
                        onChange={(e) => setUserEmail(e.target.value)}
                    />
                </Form.Item>


                <Form.Item
                    name="user-password"
                    // hasFeedback
                    rules={[
                        {
                            required: true,
                            message: '请设置密码!'
                        }
                    ]}
                >
                    <Input
                        type="password"
                        placeholder="password"
                        onChange={(e) => setUserPassword(e.target.value)}
                    />
                </Form.Item>


                <Form.Item
                    name="user-repassword"
                    dependencies={['user-password']}
                    // hasFeedback
                    rules={[
                        { required: true, message: '请重复密码!' },
                        ({ getFieldValue }) => ({
                            validator(_, value) {
                                if (!value || getFieldValue('user-password') === value) {
                                    return Promise.resolve();
                                }
                                return Promise.reject(new Error('密码不匹配!'));
                            },
                        }),
                    ]}
                >
                    <Input
                        type="password"
                        placeholder="confirm password"
                        onChange={(e) => setUserRePassword(e.target.value)}
                    />
                </Form.Item>


                <Form.Item>
                    <Button
                        className="sub-button"
                        type="primary"
                        htmlType="submit"
                    >
                        注册
                    </Button>
                </Form.Item>


                <span>
                    <p className="tips">Do you have an account?</p>
                    <Link to="/login">  Log in</Link>
                </span>
            </Form >
        </div >
    );
}
export default Register;