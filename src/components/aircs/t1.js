import React from 'react';
import ReactDOM from 'react-dom';
import ComponentTabs from './tabs';
import img from '../../images/airCondition01.png';
import API from '../api';
import dataT1 from '../../mock/T1';
import axios from 'axios';


export default class ComponentAirCS_T1 extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      pageTitle: "运行监视-T1航站楼及连廊",
      list: ''
    }
  }

  getData(){
    let that = this;
    axios.get(API().T1).then(function (response) {
        that.setState({list: response.data.data});
    })
    .catch(function (error) {
      console.log(error + "\n服务器响应异常");
    })
  }

  componentDidMount() {
    this.getData();
    this.timer = setInterval(()=>{
      this.getData();
    },3000)
  }

  componentWillUnmount(){
    clearTimeout(this.timer)
  }

  render(){
    const styleComponent = {
      imgBg: {
        width: "1539px",
        height: "801px",
        backgroundImage: 'url(' + img + ')',
        backgroundPosition: "center bottom",
        backgroundRepeat: "no-repeat",
        position: "relative",
        display: "inline-block"
			},
      dataBox:[
        { top: "354px", left: "385px" },
        { top: "354px", left: "565px" },
        { top: "293px", left: "929px" },
        { top: "364px", left: "929px" },
        { top: "293px", left: "1147px" },
        { top: "364px", left: "1147px" }
      ],
      bBox:[
        { top: "517px", left: "404px" },
        { top: "517px", left: "520px" },
        { top: "517px", left: "1213px" },
        { top: "517px", left: "1342px" }
      ]
		};

    const dataBox = this.state.list ? this.state.list.listTop.map((item, i) => (
      <div className={`dataBox box-${item.s}`} key={i} style={styleComponent.dataBox[i]}>
        <p>{`${item.c}℃`}</p>
        <p className="line">{`${item.p}%`}</p>
        <p className="line">{`${item.m} ppm`}</p>
      </div>
    )): '';

    const bBox = this.state.list ? this.state.list.listBottom.map((item, i) => (
      <div className={`bBox`} key={i} style={styleComponent.bBox[i]}>
        <em>{i%2 === 0 ? "供水温度":"回水温度"}</em>
        <i>{`${item.c} ℃`}</i>
      </div>
    )): '';

    return(
      <div>
        <ComponentTabs mode={"T1"} />
        <div className="T1">
          <div className="imgCon">
            <div style={styleComponent.imgBg} className="imgBg">
              {dataBox}{bBox}
            </div>
          </div>
        </div>
      </div>
    )

  }
}
