import React from 'react';
import ReactDOM from 'react-dom';
import ComponentNetMonitorRouter from './router';
import img from '../../images/TS_10kV.png';
import API from '../api';


export default class ComponentNetMonitor2 extends React.Component{

  constructor() {
    super();
    this.state = {
      pageTitle: "10kV中心变电站",
    obj: ''
    }
  }

  componentDidMount() {
    var myFetchOptions = {
      method: 'GET'
    };
    fetch(API().TS_10kV, myFetchOptions).then( response => {
      return response.json();
    }).then( data => {
      this.setState({obj: data.data});
    }).catch( e => {
      console.log("服务器响应异常");
    });
  };

  render(){
    const styleComponent = {
      picOne: {
        width: "1753px",
        height: "860px",
        backgroundImage: 'url(' + img + ')',
        backgroundPosition: "center 0",
        backgroundRepeat: "no-repeat",
        display: "inline-block",
        position: "relative"
      },
      css: [
        { top: "100px", left: "103px" },
        { top: "364px", left: "1551px" },
        { top: "713px", left: "1513px" }
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
