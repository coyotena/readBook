import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {Avatar, Icon} from 'antd';
import NavBottom from '../../component/NavBottom';

import '../../static/less/person.less';

class Info extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            isLogin: false
        }
    }

    render() {
        let {isLogin} = this.state;
        return (
            <div className="person-info">
                <header>
                    <div className="left">
                        {
                            isLogin ? (<h2 onClick={this.test1}>EVA1963</h2>) : (
                                <div>
                                    <h2 onClick={this.test1}>HI，等你好久了</h2>
                                    <p>
                                        <Link to="/person/login">登录</Link>
                                        <Link to="/person/Login">没账号？快去注册</Link>
                                    </p>
                                </div>)
                        }
                    </div>
                    <div className="right">
                        <Avatar size="large" icon="user"/>
                    </div>
                </header>
                <ul className="info-list">
                    <li><Link to="/home"><Icon type="file-text"/>我的订单</Link></li>
                    <li><Link to="/home"><Icon type="contacts"/>我的点评</Link></li>
                    <li><Link to="/home"><Icon type="setting"/>设置</Link></li>
                </ul>
                <NavBottom/>

            </div>
        )
    }

    test1 = () => {
        this.setState({isLogin: !this.state.isLogin})
    };
}


export default connect()(Info);
