import React from 'react'
import {connect} from 'react-redux'

class Play extends React.Component{
    constructor(props,context){
        super(props,context)
    }
    render(){
        return <div>
          我是玩法
        </div>
    }
}

export default connect()(Play)