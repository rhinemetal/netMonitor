import React from 'react';
import ReactDOM from 'react-dom';
import ComponentTabs from './tabs';
import API from '../api';
import { Progress } from 'antd';

export default class ComponentUnit extends React.Component{

  constructor() {
    super();
    this.state = {
      pageTitle: "运行监视-用能监视",
      unit: ''
    }
  }

  componentDidMount() {
    var myFetchOptions = {
      method: 'GET'
    };
    fetch(API().energyUseUnit, myFetchOptions).then( response => {
      return response.json();
    }).then( data => {
      this.setState({unit: data.data});
    }).catch( e => {
      console.log("服务器响应异常");
    });
    document.getElementById('body').style.overflow = 'auto';
  }

  render(){
    const {unit} = this.state;
    const unitStr = unit.length ? unit.map((item, i) => {
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
            <div className="mask">
                <h5>{item.name}</h5>
                <table>
                  <tbody>
                    <tr>
                        <td className="tar" width="90">单位地址：</td>
                        <td>{item.address}</td>
                    </tr>
                    <tr>
                        <td className="tar">联系电话：</td>
                        <td>{item.phone}</td>
                    </tr>
                    <tr>
                        <td className="tar">联系人：</td>
                        <td>{item.contacts}</td>
                    </tr>
                  </tbody>
                </table>
            </div>
          </li>
        )
    }): '没有加载到任何数据';

    return(
      <div>
        <ComponentTabs mode={"unit"} />
        <ul className="con c">{unitStr}</ul>
      </div>
    )
  }

}
