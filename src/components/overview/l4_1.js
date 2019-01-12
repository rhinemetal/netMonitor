import React from 'react';
import ReactEcharts from 'echarts-for-react';
import overview_l4A from '../../mock/overview_l4A';
import axios from 'axios';
import API from '../api';
import echObj from './echObj/l4A';
import { Radio } from 'antd';


export default class ComponentOvL4A extends React.Component{

  constructor() {
    super();
    this.state = {
      name: "用能设备能耗组成",
      option: echObj,
      list: '',
      data: '',
      sort: 'down',
      defaultTab: 'gas'
    }
  }


  getData(tab){
    let that = this;
    axios.get(API().l4A).then(function (response) {
      that.setState({list: response.data.data});
      that.bindData(that.state.defaultTab);
    })
    .catch(function (error) {
      console.log(error + "\n服务器响应异常");
    });
  }


  setTab(tab, sort) {
    this.setState({defaultTab: tab});
    this.getData(tab);
    this.bindData(tab);
  }


  bindData(tab) {
    eval("this.setState({data: this.state.list." + tab + "})");
  }


  componentDidMount() {
    this.getData(this.state.defaultTab);
  }


  render(){
    const {data} = this.state;
    return(
      <div className="l4-1 bo">
        <h6><span>{this.state.name}</span></h6>
        <Radio.Group defaultValue={this.state.defaultTab} buttonStyle="solid">
          <Radio.Button value="gas" onClick={this.setTab.bind(this, "gas")}>气</Radio.Button>
          <Radio.Button value="electric" onClick={this.setTab.bind(this, "electric")}>电</Radio.Button>
          <Radio.Button value="water" onClick={this.setTab.bind(this, "water")}>水</Radio.Button>
          <Radio.Button value="cold" onClick={this.setTab.bind(this, "cold")}>冷</Radio.Button>
        </Radio.Group>
        <ReactEcharts
          option={this.state.option(data)}
          lazyUpdate={true}
          style={{height: '170px'}} />
      </div>
    )
  }


}
