import React from 'react';
import { Row, Col } from 'antd';
import './Home.less';
import Author from '../../compoent/Author/Author';
const Home = () => {
    return (
        <>
            <div className='home'>
                <Row className="comm-main" type="flex" justify="center">
                    <Col className='comm-left'>left</Col>
                    <Col className='comm-right'>
                        <Author />
                    </Col>
                </Row>
            </div>
        </>

    )
}
export default Home;