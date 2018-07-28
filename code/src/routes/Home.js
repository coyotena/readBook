import React from 'react'
import {connect} from 'react-redux'
import NavBottom from '../component/NavBottom'
import { Carousel } from 'antd';
import {Link} from "react-router-dom"
import {banner} from "../api/home"
import '../static/less/home.less'
class Home extends React.Component{
    constructor(props,context){
        super(props,context);
        this.state={
            result:[]
        }
    }
    async componentDidMount(){
      let res = await banner();
        console.log(res);
        this.setState({
          result:res
      })
    }
    render(){
        let {result} = this.state;
        return <div className={'homeBox'}>
            <div className="banner">
                <Carousel autoplay>{
                    result.map((item,index)=>{
                        let {pic,id} = item;
                        return <Link to={`/home?id=${id}`} key={index}><img src={pic}/></Link>
                    })
                }</Carousel>
            </div>
            <div className="grid jvcheng">
                <h3>新鲜旅程</h3>
                <ul></ul>
            </div>
           <NavBottom/>
        </div>
    }
}

export default connect()(Home)