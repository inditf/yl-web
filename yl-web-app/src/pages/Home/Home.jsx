import { useState, useEffect, Fragment } from 'react';
import { Row, Col, Button, message, Space, Table, Input, Form, Divider } from 'antd';
import Author from '../../compoent/Author/Author';
import { useToken } from '../../provider/tokenProvider';
import { useNavigate } from 'react-router-dom';
import ajax from '../../provider/ajax.jsx';
import './Home.less';

const { Column } = Table;

const Home = () => {
    const { setToken } = useToken();//修改Token
    const navigate = useNavigate();//路由跳转
    const [userList, setUserList] = useState([]);//用户列表
    const [username, setUsername] = useState(null);//用户名
    const [userpassword, setUserpassword] = useState(null);//用户密码
    const [newpassword, setNewpassword] = useState(null);//新密码

    useEffect(() => {
        console.log("useEffect userList");
        console.log(userList);
    }, [userList]);

    const checkToken = () => {//检验Token
        ajax("/jwtmessage", {}, 'GET')
            .then(res => {
                if (res.code === 2000) {
                    message.success(res.msg);
                }
                else {
                    message.error(res.msg);
                }
            });
    }
    const changeToken = () => {//修改Token
        setToken("1234567890");
        message.success("Token已修改");
    }
    const logOut = () => {//退出登录
        message.success("退出登录");
        setTimeout(() => { setToken(null) }, 0);
        navigate("/login", { replace: true });
    }
    const destoryUser = () => {//注销账号
        ajax("/jwtdestory", {}, 'GET')
            .then(res => {
                if (res.code === 2000) {
                    message.success(res.msg);
                    navigate("/login", { replace: true });
                }
                else {
                    message.error(res.msg);
                }
                setTimeout(() => { setToken(null) }, 0);
            });
    }
    const getUser = () => {//获取用户
        ajax("/jwtqueryUser", {}, 'GET')
            .then(res => {
                if (res.code === 2000) {
                    setUserList(res.data);
                    message.success(res.msg);
                }
                else {
                    message.error(res.msg);
                }
            });
    }
    const deleteUser = (record) => {//删除用户
        ajax("/jwtdeleteUser", record, 'POST').then(res => {
            if (res.code === 2000) {
                message.success(res.msg);
                setUserList(userList.filter(item => item.username !== record.username));
            }
            else {
                message.error(res.msg);
            }
        });
    }

    const changePassword = () => {//修改密码
        let user = {
            username: username,
            password: userpassword,
            newpassword: newpassword
        };

        ajax("/jwtupdateUser", user, 'POST').then(res => {
            if (res.code === 2000) {
                message.success(res.msg);

            }
            else {
                message.error(res.msg);
            }
        }
        );
    }

    return (
        <>
            <div className='home'>
                <Row className="comm-main" type="flex" justify="center">
                    <Col className='comm-left'>
                        <Button className="log-out" onClick={checkToken}>检验Token</Button>
                        <Button className="log-out" onClick={changeToken}>修改Token</Button>
                        <Button className="log-out" onClick={logOut}>退出登录</Button>
                        <Button danger className="log-out" onClick={destoryUser}>注销账号</Button>
                        <Divider>修改密码</Divider>
                        <Form onFinish={changePassword}>
                            <Form.Item name="userName" rules={[{ required: true, message: '请输入用户名!' }]}>
                                <Input
                                    type="text"
                                    placeholder="username"
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                            </Form.Item>
                            <Form.Item name="userOldPassword" rules={[{ required: true, message: '请输入旧密码!' }]} >
                                <Input.Password
                                    type="password"
                                    placeholder="current password"
                                    onChange={(e) => setUserpassword(e.target.value)}
                                />
                            </Form.Item>
                            <Form.Item name="userNewPassword" rules={[{ required: true, message: '请输入新密码!' }]}>
                                <Input.Password
                                    type="password"
                                    placeholder="new password"
                                    onChange={(e) => setNewpassword(e.target.value)}
                                />
                            </Form.Item>
                            <Form.Item>
                                <Button
                                    className="log-out"
                                    type="primary"
                                    htmlType="submit"
                                >
                                    修改密码
                                </Button>
                            </Form.Item>
                        </Form>
                    </Col>
                    <Col className='comm-right'>
                        <Author username={localStorage.getItem('username')} />
                        <Button className="log-out" onClick={getUser}>获取用户列表</Button>
                        <Table dataSource={userList}>
                            <Column title="User-Name" dataIndex="username" key="username" />
                            <Column
                                title="Usear-Password"
                                dataIndex="password"
                                key="password"
                            />
                            <Column
                                title="Action"
                                key="action"
                                render={(_, record) => (
                                    <Space size="middle">
                                        <Button danger size="small" onClick={() => (deleteUser(record))}>Delete</Button>
                                    </Space>
                                )}
                            />
                        </Table>

                    </Col>
                </Row>
            </div >
        </>

    )
}

export default Home;