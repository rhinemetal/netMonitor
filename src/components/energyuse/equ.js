import React from 'react';
import ReactDOM from 'react-dom';
import ComponentTabs from './tabs';
import API from '../api';
import { Progress } from 'antd';

export default class ComponentEqu extends React.Component{

  constructor() {
    super();
    this.state = {
      pageTitle: "运行监视-用能监视",
      equ: ''
    }
  }

  componentDidMount() {
    var myFetchOptions = {
      method: 'GET'
    };
    fetch(API().energyUseEqu, myFetchOptions).then( response => {
      return response.json();
    }).then( data => {
      this.setState({equ: data.data});
    }).catch( e => {
      console.log("服务器响应异常");
    });
  };

  render(){
    const {equ} = this.state;
    const equStr = equ.length ? equ.map((item, i) => {
        return (
          <li key={i} className={parseInt(item.state) === 1 ? "red":""}>
            <h6><span>{item.name}</span></h6>
            <div className="box">
              <div className="boxT">
                  <p>
                      <em>总额定功率</em>
                      <span>{item.totalPower}</span><i>kW</i>
                  </p>
                  <p>
                      <em>总实时功率</em>
                      <span>{item.actualPower}</span><i>kW</i>
                  </p>
              </div>
              <div className="boxB">
                  <div className="boxB-l">
                      <Progress type="circle" strokeWidth={8} percent={parseInt(item.percentage)} width={80} format={() => item.percentage + "%"} />
                      <i>月节省率</i>
                  </div>
                  <div className="boxB-r">
                      <div className="percentage">
                        <div className="in" style={{width: item.percentage + "%" }}><i>{item.percentage}%</i></div>
                      </div>
                      <p>年度电能消耗率</p>
                  </div>
              </div>
            </div>
          </li>
        )
    }): '没有加载到任何数据';

    return(
      <div>
        <ComponentTabs mode={"equ"} />
        <ul className="con c">{equStr}</ul>
      </div>
    )
  }

}
