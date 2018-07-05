import React from 'react'
import {connect} from 'react-redux'

class Person extends React.Component{
    constructor(props,context){
        super(props,context)
    }
    render(){
        return <div>
            我是个人中心
        </div>
    }
}

export default connect()(Person)