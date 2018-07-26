import React from 'react';
import {withRouter} from 'react-router-dom';
import {Icon} from 'antd';

/*
 必传项：
 title: 头文案,
 goBack: 是否带返回按钮
 */

class NavTop extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            title: props.title,
            goBack: props.goBack
        }
    }

    render() {
        let {title, goBack} = this.state;
        return (
            <div className="navTop">
                {!goBack ? null : (<div className="goBack" onClick={() => {
                    this.props.history.go(-1);
                }}><Icon type="left"/></div>)
                }
                {!title ? null : (<div className="title">{title}</div>)}
            </div>
        )
    }
}

export default withRouter(NavTop);
