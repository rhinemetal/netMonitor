import React from 'react';
import ReactDOM from 'react-dom';
import { Radio } from 'antd';
import { Link } from 'react-router-dom';

export default class ComponentTabs extends React.Component{

  render(){
    return(
      <div>
        <Radio.Group defaultValue={this.props.mode} buttonStyle="solid">
          <Radio.Button value="unit"><Link to="unit">内部单位</Link></Radio.Button>
          <Radio.Button value="equ"><Link to="equ">用能设备</Link></Radio.Button>
        </Radio.Group>
      </div>

    )
  }
}
