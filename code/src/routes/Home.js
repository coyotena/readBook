import React from 'react'
import {connect} from 'react-redux'
import NavBottom from '../component/NavBottom'
import { Carousel } from 'antd';
import {Link} from "react-router-dom"
import {banner} from "../api/home"
import '../static/less/home.less'
import Grid from "./home/Grid"
let gridTop =[
    {
    id:5,
    name:"双地铁",
    desc:"双地铁蒲黄榆近天安门北京南站温馨小开间",
    pic:require('../static/img/lv-1.jpg')
},{
    id:6,
    name:"蒲黄榆",
    desc:"双地铁蒲黄榆近天安门北京南站温馨小开间",
    pic:require('../static/img/lv-2.jpg')
},{
    id:7,
    name:"天安门",
    desc:"双地铁蒲黄榆近天安门北京南站温馨小开间",
    pic:require('../static/img/lv-3.jpg')
},{
    id:8,
    name:"北京南站",
    desc:"双阿斯顿发黄榆近天安门北京南站温馨小开间",
    pic:require('../static/img/lv-4.jpg')
}]
let modularImg={
    top:require("../static/img/img-grid1.jpg"),
    bottom:require("../static/img/img-grid2.jpg")
}
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
        let {bannerList=[]} = this.state.result;
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
                    gridTop.map((item,index)=>{
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