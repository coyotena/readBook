import React from 'react'
import {connect} from 'react-redux'

class RoomCar extends React.Component{
    constructor(props,context){
        super(props,context)
    }
    render(){
        return <div>
            我是房车
        </div>
    }
}

export default connect()(RoomCar)