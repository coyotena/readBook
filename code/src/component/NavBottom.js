import React from 'react';
import {connect} from 'react-redux';
import {withRouter,NavLink} from 'react-router-dom';
import {Icon} from 'antd';

class NavBottom extends React.Component {
    constructor(props,context){
        super(props,context);
    }
    render(){
        return (
            <div className="navBottom">
                <NavLink to="/home">
                    <Icon type="home"/>
                    <span>探索</span>
                </NavLink>
                <NavLink to="/play">
                    <Icon type="rocket" />
                    <span>玩法</span>
                </NavLink>
                <NavLink to="/roomcar">
                    <Icon type="car" />
                    <span>房车</span>
                </NavLink>
                <NavLink to="/person">
                    <Icon type="user"/>
                    <span>我的</span>
                </NavLink>
            </div>
        )
    }
}

export default withRouter(connect()(NavBottom));
