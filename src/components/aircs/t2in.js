import React from 'react';
import ReactDOM from 'react-dom';
import ComponentTabs from './tabs';
import API from '../api';
import axios from 'axios';

export default class ComponentAirCS_T2in extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      pageTitle: "运行监视-T2航站楼到达层",
      list: ''
    }
  }


  render(){
    return(
      <div>
        <ComponentTabs mode={"T2in"} />
        <p><br /><br />　　T2航站楼到达层正在准备中...</p>
      </div>
    )
  }
}
