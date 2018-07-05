import React from 'react'
import {connect} from 'react-redux'
import NavBottom from '../component/NavBottom'

class RoomCar extends React.Component{
    constructor(props,context){
        super(props,context)
    }
    render(){
        return <div>
            我是房车
            <NavBottom></NavBottom>
        </div>
    }
}

export default connect()(RoomCar)