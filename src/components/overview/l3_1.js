import React from 'react';
import ReactEcharts from 'echarts-for-react';
import overview_l3A from '../../mock/overview_l3A';
import axios from 'axios';
import API from '../api';
import echObj from './echObj/l3A';
import { Radio } from 'antd';


export default class ComponentOvL3A extends React.Component{

  constructor() {
    super();
    this.state = {
      name: "驻场单位能耗排名",
      option: echObj,
      list: '',
      data: '',
      sort: 'down',
      maxSum: '',
      defaultTab: 'gas'
    };
  }


  getData(tab){
    let that = this;
    axios.get(API().l3A).then(function (response) {
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


  setSort(){
    this.refs.sortBn.className = this.state.sort === "down" ?  "up" : "down";
    this.setState({sort: this.state.sort === "down" ?  "up" : "down"});
    this.bindData(this.state.defaultTab);
  }


  bindData(tab) {
    Array.prototype.max = function(){
      return Math.max.apply({},this);
    }
    eval("this.setState({data: this.state.list." + tab + "})");
    const max = this.state.data.number;
    let arr = [];
    for (var i = 0; i < this.state.data.number.length; i++) {
      arr.push(this.state.data.number.max());
    }
    this.setState({maxSum: arr});
  }


  componentDidMount() {
    this.getData(this.state.defaultTab);
  }


  render(){
    const {data, maxSum} = this.state;
    return(
      <div className="l3-1 bo">
        <h6><span>{this.state.name}</span><i ref="sortBn" className="down" onClick={this.setSort.bind(this)} /></h6>
        <Radio.Group defaultValue={this.state.defaultTab} buttonStyle="solid" className="greenRadio">
          <Radio.Button value="gas" onClick={this.setTab.bind(this, "gas")}>气</Radio.Button>
          <Radio.Button value="electric" onClick={this.setTab.bind(this, "electric")}>电</Radio.Button>
          <Radio.Button value="water" onClick={this.setTab.bind(this, "water")}>水</Radio.Button>
          <Radio.Button value="cold" onClick={this.setTab.bind(this, "cold")}>冷</Radio.Button>
        </Radio.Group>
        <ReactEcharts
          option={this.state.option(data, this.state.sort === "down" ? 0 : 1, maxSum)}
          lazyUpdate={true}
          style={{height: '170px'}} />
      </div>
    )
  }


}
