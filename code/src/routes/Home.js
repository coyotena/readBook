import React from 'react'
import {connect} from 'react-redux'
import NavBottom from '../component/NavBottom'
import { Carousel } from 'antd';
import {Link} from "react-router-dom"
import {banner} from "../api/home"
import '../static/less/home.less'
import Grid from "./home/Grid"

let modularImg={
    top:require("../static/img/img-grid1.jpg"),
    bottom:require("../static/img/img-grid2.jpg")
};
class Home extends React.Component{
    constructor(props,context){
        super(props,context);
        this.state={
            result:{}
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
        let {bannerList=[],gridTop=[],gridBottom=[]} = this.state.result;
        return <div className={'homeBox'}>
            <div className="banner">
                <Carousel autoplay>{
                    bannerList.map((item,index)=>{
                        let {pic,id} = item;
                        return <Link to={`/home?id=${id}`} key={index}><img src={pic}/></Link>
                    })
                }</Carousel>
            </div>
            <div className="grid jvcheng">
                <h3>新鲜旅程</h3>
                <ul>{
                    gridTop.map((item,index)=>{
                        return <Grid data={item} key={index}/>
                    })
                }</ul>
            </div>
            <div className="linkModular"><Link to={'/home?id=3'}><img src={modularImg.top} alt=""/></Link></div>
            <div className="grid jvcheng">
                <h3>精品酒店</h3>
                <ul>{
                    gridBottom.map((item,index)=>{
                        return <Grid data={item} key={index}/>
                    })
                }</ul>
            </div>
            <div className="linkModular"><Link to={'/home?id=20'}><img src={modularImg.bottom} alt=""/></Link></div>
            <NavBottom/>
        </div>
    }
}

export default connect()(Home)