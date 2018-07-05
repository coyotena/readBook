import React from 'react'
import {connect} from 'react-redux'
import NavBottom from '../component/NavBottom'

class Home extends React.Component{
    constructor(props,context){
        super(props,context)
    }
    render(){
        return <div>
           <NavBottom></NavBottom>
        </div>
    }
}

export default connect()(Home)