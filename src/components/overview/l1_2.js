import React from 'react';
import ReactEcharts from 'echarts-for-react';
import overview_l1B from '../../mock/overview_l1B';
import axios from 'axios';
import API from '../api';
import echObj from './echObj/l1B';
import { Radio } from 'antd';

export default class ComponentOvL1B extends React.Component{

  constructor() {
    super();
    this.state = {
      name: "总能耗",
      option: echObj,
      list: '',
      data: '',
      defaultParser: 'month'
    };
  }

  getData(){
    let that = this;
    axios.get(API().l1B).then(function (response) {
      that.setState({list: response.data.data});
      that.bindData(that.state.defaultParser)
    })
    .catch(function (error) {
      console.log(error + "\n服务器响应异常");
    });
  }

  setData(str) {
    this.setState({defaultParser: str});
    this.getData(str);
    this.bindData(str);
  }

  bindData(parser) {
    parser === "month" ? this.setState({data: this.state.list.month}) : this.setState({data: this.state.list.year});
  }

  componentDidMount() {
    this.getData(this.state.defaultParser);
  }

  render(){
    const {data} = this.state;
    const dataStr = data.length ? data.map((item, i) => {
      return (
        <li key={i}>
          <ReactEcharts
            option={this.state.option([{value: item.clock}])}
            lazyUpdate={true}
            style={{height: '115px'}}
            className='con' />
          <p>
            计划用气量：<i>{item.planValue}t</i><br />
            实际用气量：<u>{item.factValue}t</u><br />
          </p>
        </li>
      )
    }): <li>没有加载到任何数据</li>;
    return(
      <div className="l1-2 bo">
        <h6><span>{this.state.name}</span></h6>
        <Radio.Group defaultValue={this.state.defaultParser} buttonStyle="solid">
          <Radio.Button value="month" onClick={this.setData.bind(this, "month")}>本月</Radio.Button>
          <Radio.Button value="year" onClick={this.setData.bind(this, "year")}>全年</Radio.Button>
        </Radio.Group>
        <ul className="c box">{dataStr}</ul>
      </div>
    )
  }

}
