import React from 'react'
import {connect} from 'react-redux'
import NavBottom from '../component/NavBottom'

class Person extends React.Component{
    constructor(props,context){
        super(props,context)
    }
    render(){
        return <div>
            我是个人中心
            <NavBottom></NavBottom>
        </div>
    }
}

export default connect()(Person)