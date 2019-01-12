import React from 'react';
import ReactEcharts from 'echarts-for-react';
import overview_l4C from '../../mock/overview_l4C';
import axios from 'axios';
import API from '../api';
import echObj from './echObj/l4C';

export default class ComponentOvL4C extends React.Component{

  constructor() {
    super();
    this.state = {
      name: "报警统计",
      option: echObj,
      list: ''
    }
  }


  getData(){
    let that = this;
    axios.get("l4C_data").then(function (response) {
      that.setState({list: response.data.data});
      console.log(response.data.data);
    })
    .catch(function (error) {
      console.log(error + "\n服务器响应异常");
    });
  }


  componentDidMount() {
    this.getData();
  }


  render(){
    const {list} = this.state;
    return(
      <div className="l4-3 bo">
        <h6><span>{this.state.name}</span></h6>
        <ReactEcharts
          option={this.state.option(list)}
          lazyUpdate={true}
          style={{height: '190px',top:'-25px'}} />
      </div>
    )
  }


}
