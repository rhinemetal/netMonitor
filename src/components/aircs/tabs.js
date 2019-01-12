import React from 'react';
import ReactDOM from 'react-dom';
import { Radio } from 'antd';
import { Link } from 'react-router-dom';

export default class ComponentTabs extends React.Component{

  render(){
    return(
      <div>
        <Radio.Group defaultValue={this.props.mode} buttonStyle="solid">
          <Radio.Button value="T1"><Link to="T1">T1航站楼及连廊</Link></Radio.Button>
          {/*
          <Radio.Button value="T2in"><Link to="T2in">T2航站楼到达层</Link></Radio.Button>
          */}
          <Radio.Button value="T2out"><Link to="T2out">T2航站楼出发层</Link></Radio.Button>
        </Radio.Group>
      </div>

    )
  }
}
