import React from 'react';
import {connect} from 'react-redux';

import {Link} from 'react-router-dom';

import NavTop from '../../component/NavTop';
import { Form, Icon, Input, Button,Checkbox,Row,Col } from 'antd';
import '../../static/less/register.less';
const FormItem = Form.Item;

class Register extends React.Component {
    state = {
        confirmDirty: false,
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    };

    handleConfirmBlur = (e) => {
        const value = e.target.value;
        this.setState({ confirmDirty: this.state.confirmDirty || !!value });
    }

    compareToFirstPassword = (rule, value, callback) => {
        const form = this.props.form;
        if (value && value !== form.getFieldValue('password')) {
            callback('Two passwords that you enter is inconsistent!');
        } else {
            callback();
        }
    }


    validateToNextPassword = (rule, value, callback) => {
        const form = this.props.form;
        if (value && this.state.confirmDirty) {
            form.validateFields(['confirm'], { force: true });
        }
        callback();
    }


    render(){
        const { getFieldDecorator } = this.props.form;

        return (
            <div className="registerBox">
                <NavTop title="注册" goBack={true}/>

                <div className="conBox">
                    <h2>文旅</h2>

                    <Form onSubmit={this.handleSubmit} className="login-form">
                        <FormItem label="用户名">
                            {getFieldDecorator('name', {
                                rules: [{required: true, message: '用户名为必填项',}],
                            })(
                                <Input placeholder="请输入你的用户名"/>
                            )}
                        </FormItem>
                        <FormItem label="密码">
                            {getFieldDecorator('password', {
                                rules: [{required: true, message: '密码为必填项',}, {validator: this.validateToNextPassword,}],
                            })(<Input type="password" placeholder="请输入密码" />)}
                        </FormItem>
                        <FormItem label="确认密码">
                            {getFieldDecorator('confirm', {
                                rules: [{
                                    required: true, message: '请检查两次输入密码是否一致',
                                }, {
                                    validator: this.compareToFirstPassword,
                                }],
                            })(
                                <Input type="password"  placeholder="请再次输入确认密码" onBlur={this.handleConfirmBlur} />
                            )}
                        </FormItem>
                        <FormItem>
                            {getFieldDecorator('agreement', {
                                valuePropName: 'checked',
                            })(
                                <Checkbox>我已阅读<a href="javascript:;">《文理协议》</a></Checkbox>
                            )}
                        </FormItem>
                        <FormItem className='btnBox'>
                            <Button htmlType="submit" className="login-form-button">注册</Button>
                        </FormItem>
                    </Form>
                </div>
            </div>
        )
    }
}


export default connect()(Form.create()(Register));
