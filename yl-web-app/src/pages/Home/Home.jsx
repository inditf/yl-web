import React from 'react';
import { Row, Col, Button, message } from 'antd';
import './Home.less';
import Author from '../../compoent/Author/Author';
import { useToken } from '../../provider/tokenProvider';
import { useNavigate } from 'react-router-dom';
import ajax from '../../provider/ajax.jsx';
const Home = () => {
    const { setToken } = useToken();
    const navigate = useNavigate();
    const checkToken = () => {//检验Token
        ajax("/jwtmessage", { username: "admin" }, 'GET')
            .then(res => {
                if (res.code === 2000) {
                    message.success("Token有效");
                }
                else {
                    message.error("Token无效");
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

    return (
        <>
            <div className='home'>
                <Row className="comm-main" type="flex" justify="center">
                    <Col className='comm-left'>
                        <Button className="log-out" onClick={checkToken}>检验Token</Button>
                        <Button className="log-out" onClick={changeToken}>修改Token</Button>
                        <Button className="log-out" onClick={logOut}>退出</Button>
                    </Col>
                    <Col className='comm-right'>
                        <Author />
                    </Col>
                </Row>
            </div>
        </>

    )
}
export default Home;