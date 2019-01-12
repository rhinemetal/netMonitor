import React from 'react';
import ReactDOM from 'react-dom';
import ComponentTabs from './tabs';
import img from '../../images/airCondition03.png';
import API from '../api';
import dataT1 from '../../mock/T2out';
import axios from 'axios';

export default class ComponentAirCS_T2out extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      pageTitle: "运行监视-T2航站楼出发层",
      list: ''
    }
  }

  getData(){
    let that = this;
    axios.get(API().T2out).then(function (response) {
        that.setState({list: response.data.data});
        // console.log(response.data.data);
    })
    .catch(function (error) {
      console.log(error + "\n服务器响应异常");
    });
  };

  componentDidMount() {
    this.getData();
    this.timer = setInterval(()=>{
      this.getData();
    },3000);
  };

  componentWillUnmount(){
    clearTimeout(this.timer)
  };

  render(){
    const enigma = ["h","v","v","v","v","v","v","h","v","h","h","v","v","v","v","v","v","v","v","h","h","h","h","h","v","v","v","v","h","h","v","v","h","v","v","h","h","v","v","h","h","v","v"];
    const styleComponent = {
      imgBg: {
        width: "1659px",
        height: "872px",
        backgroundImage: 'url(' + img + ')',
        backgroundPosition: "center bottom",
        backgroundRepeat: "no-repeat",
        position: "relative",
        display: "inline-block"
			},
      dataBox:[
        { top: "100px", left: "14px" },
        { top: "143px", left: "14px" },
        { top: "143px", left: "90px" },
        { top: "223px", left: "14px" },
        { top: "223px", left: "90px" },
        { top: "303px", left: "14px" },
        { top: "303px", left: "90px" },
        { top: "386px", left: "14px" },
        { top: "311px", left: "208px" },
        { top: "300px", left: "397px" },
        { top: "360px", left: "471px" },
        { top: "82px", left: "758px" },
        { top: "82px", left: "839px" },
        { top: "160px", left: "758px" },
        { top: "160px", left: "839px" },
        { top: "240px", left: "758px" },
        { top: "240px", left: "839px" },
        { top: "320px", left: "758px" },
        { top: "320px", left: "839px" },
        { top: "300px", left: "1107px" },
        { top: "300px", left: "1312px" },
        { top: "360px", left: "1063px" },
        { top: "360px", left: "1273px" },
        { top: "100px", left: "1503px" },
        { top: "138px", left: "1579px" },
        { top: "218px", left: "1503px" },
        { top: "218px", left: "1579px" },
        { top: "298px", left: "1579px" },
        { top: "376px", left: "1503px" },
        { top: "440px", left: "463px" },
        { top: "489px", left: "477px" },
        { top: "489px", left: "551px" },
        { top: "440px", left: "663px" },
        { top: "489px", left: "662px" },
        { top: "489px", left: "733px" },
        { top: "587px", left: "663px" },
        { top: "440px", left: "863px" },
        { top: "489px", left: "862px" },
        { top: "489px", left: "933px" },
        { top: "587px", left: "863px" },
        { top: "440px", left: "1067px" },
        { top: "489px", left: "1038px" },
        { top: "489px", left: "1110px" }
      ],
      bBox:[
        { top: "705px", left: "745px" },
        { top: "705px", left: "867px" }
      ]
    }


    const dataBox = this.state.list ? this.state.list.listTop.map((item, i) => (
      <div className={`box box-${enigma[i]} ${item.s}-${enigma[i]}`} key={i} style={styleComponent.dataBox[i]}>
        <b>{`${item.c}℃`}</b>
        <i>{`${item.p}%`}</i>
        <u>{`${item.m} ppm`}</u>
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
        <ComponentTabs mode={"T2out"} />
        <div className="T2out">
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
