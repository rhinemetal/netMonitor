import React from 'react';
import overview_l1C from '../../mock/overview_l1C';
import axios from 'axios';
import API from '../api';
import { Radio } from 'antd';

export default class ComponentOvL1C extends React.Component{

  constructor() {
    super();
    this.state = {
      name: "航班旅客信息",
      list: '',
      data: '',
      defaultParser: 'month'
    };
  }

  getData(){
    let that = this;
    axios.get(API().l1C).then(function (response) {
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
          <p className={`p${i+1}`}>
            <span>{parseInt(i) === 0 ? "旅客":"航班"}</span>
            <i>{item.number}</i><em>{parseInt(i) === 0 ? "人":"次"}</em><br />
            <u>{`+ ${item.percentage}`}%</u>
            <b>{this.state.defaultParser === "month" ? "环比":"同比"}</b>
          </p>
        </li>
      )
    }): <li>没有加载到任何数据</li>;

    return(
      <div className="l1-3 bo">
        <h6><span>{this.state.name}</span></h6>
        <Radio.Group defaultValue={this.state.defaultParser} buttonStyle="solid">
          <Radio.Button value="month" onClick={this.setData.bind(this, "month")}>本月</Radio.Button>
          <Radio.Button value="year" onClick={this.setData.bind(this, "year")}>全年</Radio.Button>
        </Radio.Group>
        <ul className="box c">
          {dataStr}
        </ul>
      </div>
    )
  }
}
