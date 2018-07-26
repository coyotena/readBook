import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import NavTop from '../../component/NavTop';
import { Form, Icon, Input, Button } from 'antd';
import '../../static/less/register.less';
const FormItem = Form.Item;

class Login extends React.Component {
    state = {
        showPwd: false
    };
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    };

    toggleShowPwd = () => {
        this.setState({
            showPwd: !this.state.showPwd
        })
    };

    render(){
        const { getFieldDecorator } = this.props.form;
        return (
            <div className="registerBox">
                <NavTop title="登录" goBack={true}/>

                <div className="conBox">
                    <h2>文旅</h2>

                    <Form onSubmit={this.handleSubmit} className="login-form">
                        <FormItem>
                            {getFieldDecorator('userName', {
                                rules: [{ required: true, message: '请输入你的账号' }],
                            })(
                                <Input placeholder="请输入你的账号" />
                            )}
                        </FormItem>
                        <FormItem>
                            {getFieldDecorator('password', {
                                rules: [{ required: true, message: '请输入你的密码' }],
                            })(
                                <Input suffix={<Icon onClick={this.toggleShowPwd} type={this.state.showPwd ? 'eye-o': 'eye'} />} type={this.state.showPwd ? 'text': 'password'} placeholder="请输入你的密码" />
                            )}
                        </FormItem>
                        <FormItem className='btnBox'>
                            <Button htmlType="submit" className="login-form-button">登录</Button>
                        </FormItem>
                    </Form>
                    <div className="other">
                        <Link to="/person/register">还没注册？快速注册</Link>
                    </div>
                </div>
            </div>
        )
    }
}


export default connect()(Form.create()(Login));
