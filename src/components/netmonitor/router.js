import React from 'react';
import ReactDOM from 'react-dom';
import { Menu, Dropdown, Button, Icon } from 'antd';
import { Link } from 'react-router-dom';

const menu = (
  <Menu>
    <Menu.Item key="1"><Link to="1"><Icon type="right-circle" /> 航空港110kV变电站一次接线图</Link></Menu.Item>
    <Menu.Item key="2"><Link to="2"><Icon type="right-circle" /> 10kV中心变电站</Link></Menu.Item>
    <Menu.Item key="3"><Link to="3"><Icon type="right-circle" /> T2航站楼10kV＃1变电站主接线图</Link></Menu.Item>
    <Menu.Item key="4"><Link to="4"><Icon type="right-circle" /> T2航站楼10kV＃2变电站主接线图</Link></Menu.Item>
    <Menu.Item key="5"><Link to="5"><Icon type="right-circle" /> T2航站楼10kV＃3变电站主接线图</Link></Menu.Item>
    <Menu.Item key="6"><Link to="6"><Icon type="right-circle" /> 10kV南区开关站主接线图</Link></Menu.Item>
  </Menu>
);

export default class ComponentNetMonitorClass extends React.Component{
  render(){
    return(
      <div className="dropdown">
        <Dropdown overlay={menu}>
          <Button>
            {this.props.menuName} <Icon type="down" />
          </Button>
        </Dropdown>
      </div>
    )
  }
}
