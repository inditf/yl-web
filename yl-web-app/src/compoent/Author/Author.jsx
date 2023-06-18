import { Avatar, Divider } from 'antd'
// import '../static/style/components/author.css'
import './Author.module.less'
const Author = () => {

    return (
        <div className="author-div comm-box">
            <div> <Avatar size={100} src="" /></div>
            <div className="author-introduction">

                <Divider>Account</Divider>
                <Avatar size={28} className="account" />
                <Avatar size={28} className="account" />
                <Avatar size={28} className="account" />

            </div>
        </div>
    )

}

export default Author