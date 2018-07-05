import React from 'react'
import {Link} from "react-router-dom"

export default class Grid extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        let {pic,name,id,desc} = this.props.data;
        return <li>
            <Link to={`/home?id=${id}`}>
                <img src={pic} alt={name}/>
                <h4>{name}</h4>
                <p>{desc}</p>
            </Link>
        </li>
    }
}