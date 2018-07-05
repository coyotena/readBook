import React from 'react'
import {connect} from 'react-redux'
import NavBottom from '../component/NavBottom'
class Play extends React.Component{
    constructor(props,context){
        super(props,context)
    }
    render(){
        return <div>
          我是玩法
            <NavBottom/>
        </div>
    }
}

export default connect()(Play)