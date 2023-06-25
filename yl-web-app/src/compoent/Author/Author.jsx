import { Avatar, Divider } from 'antd'
import './Author.module.less'
const Author = (props) => {

    return (
        <div className="author-div comm-box">
            <div> <Avatar style={{ backgroundColor: 'teal' }} size={64} gap='1'>admin</Avatar> </div>
            <div className="author-introduction">
                <Divider>Account</Divider>
                {/* <Avatar size={28} className="account" />
                <Avatar size={28} className="account" />
                <Avatar size={28} className="account" /> */}
            </div>
        </div >
    )

}

export default Author