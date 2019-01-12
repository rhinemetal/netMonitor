import React from 'react';
import overview_l1A from '../../mock/overview_l1A';
import axios from 'axios';
import API from '../api';

export default class ComponentOvL1A extends React.Component{

  constructor() {
    super();
    this.state = {
      name: "碳排放量",
      valueName: ["标准碳(t)", "二氧化碳(t)", "二氧化硫(t)", "氮氧化物(t)"],
      list: ''
    };
  }

  getData(){
    let that = this;
    axios.get(API().l1A).then(function (response) {
        that.setState({list: response.data.data});
    })
    .catch(function (error) {
      console.log(error + "\n服务器响应异常");
    });
  };

  componentDidMount() {
    this.getData();
    // this.timer = setInterval(()=>{
    //   this.getData();
    // },3000)
  };

  componentWillUnmount(){
    // clearTimeout(this.timer)
  };

  render(){
    const {list} = this.state;
    const listStr = list.length ? list.map((item, i) => {
        return (
          <li key={i} className={`c${i+1}`}>
            <p><u>{this.state.valueName[i]}</u><i>{item.value}</i></p>
          </li>
        )
    }): '没有加载到任何数据';
    return(
      <div className="l1-1 bo">
        <h6><span>{this.state.name}</span></h6>
        <ul className="c">{listStr}</ul>
      </div>
    )
  }

}
