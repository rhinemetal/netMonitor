import React from 'react';
import ReactDOM from 'react-dom';
import ComponentNetMonitorRouter from './router';
import img from '../../images/TS_110kV.png';
import API from '../api';


export default class ComponentNetMonitor1 extends React.Component{

  constructor() {
    super();
    this.state = {
      pageTitle: "航空港110kV变电站一次接线图",
      obj: ''
    }
  }

  componentDidMount() {
    var myFetchOptions = {
      method: 'GET'
    }
    fetch(API().TS_110kV, myFetchOptions).then( response => {
      return response.json();
    }).then( data => {
      this.setState({obj: data.data});
    }).catch( e => {
      console.log("服务器响应异常");
    });
  }

  render(){
    const styleComponent = {
      picOne: {
        width: "1753px",
        height: "860px",
        backgroundImage: 'url(' + img + ')',
        backgroundPosition: "70px 0",
        backgroundRepeat: "no-repeat",
        display: "inline-block",
        position: "relative"
      },
      css: [
        { top: "181px", left: "103px" },
        { top: "7px", left: "343px" },
        { top: "7px", left: "1401px" },
        { top: "181px", left: "1440px" },
        { top: "448px", left: "195px" },
        { top: "448px", left: "544px" },
        { top: "448px", left: "1163px" },
        { top: "399px", left: "1540px" },
        { top: "734px", left: "101px" },
        { top: "734px", left: "1524px" }
      ]
    };
    const {obj} = this.state;
    const list = obj.length ? obj.map((item, i) => (
        <li key={i} className="dataPoint" style={styleComponent.css[i]}>
          {
              item.points.map((subItem,j) => {
                   return (
                     <div key={j}>{subItem.name}:{subItem.value}{subItem.unit}</div>
                   );
              })
          }
        </li>
    )): '没有加载到任何数据';
    return(
      <div className="netMonitor">
        <ComponentNetMonitorRouter menuName={this.state.pageTitle} />
        <h1>{this.state.pageTitle}</h1>
        <article className="picCon">
          <div style={styleComponent.picOne}>
            <ul>{list}</ul>
          </div>
        </article>
      </div>
    )
  }
}
