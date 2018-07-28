/**
 * @autor: Eva
 * @Created by Eva on 2018/7/5.
 */
import React from 'react'
import {connect} from 'react-redux'
import {Switch,Route,Redirect} from 'react-router-dom'
import NavBottom from '../component/NavBottom'
import Login from './person/Login'
import Info from './person/Info'
import Register from './person/Register'



class Person extends React.Component{
    constructor(props,context){
        super(props,context)
    }
    render(){
        return <div className="person">
            <Switch>
                <Route path="/person/main" component={Info}/>
                <Route path="/person/login" component={Login}/>
                <Route path="/person/Register" component={Register}/>

                <Redirect from="/person" to='/person/main'/>
            </Switch>
        </div>
    }
}

export default connect()(Person)