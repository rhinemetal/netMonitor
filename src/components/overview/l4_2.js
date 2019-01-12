import React from 'react';
import overview_l4B from '../../mock/overview_l4B';
import axios from 'axios';
import { Tooltip } from 'antd';
import API from '../api';

export default class ComponentOvL4B extends React.Component{

  constructor() {
    super();
    this.state = {
      list: ''
    }
  }

  getData(){
    let that = this;
    axios.get(API().l4B).then(function (response) {
        that.setState({list: response.data.data});
        // console.log(response.data.data);
    })
    .catch(function (error) {
      console.log(error + "\n服务器响应异常");
    });
  };

  componentDidMount() {
    this.getData();
    // this.timer = setInterval(()=>{
    //   this.getData();
    // },3000)
  };

  componentWillUnmount(){
    // clearTimeout(this.timer)
  };

  render(){
    let list = this.state.list;
    return(
      <div className="l4-2 bo">
        <h6><span>最新报警</span></h6>
        <div className="tableCon">
          <table>
            <tbody>
                {list? list.map((item,i) =>
                    <tr key={i}>
                        <td>
                          <Tooltip title={item.title}>
                            <span>{item.title}</span>
                          </Tooltip>
                        </td>
                        <td>{item.date}</td>
                    </tr>
                ): <tr><td>暂无数据</td><td></td></tr>}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}
