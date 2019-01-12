import React from 'react';

export default class ComponentOvTop extends React.Component{

  constructor() {
    super();
    this.state = {
      date: "",
      time: ""
    };
  }

  getDate(){
      let todayDate = new Date(),
      date = todayDate.getDate(),
      month = todayDate.getMonth() +1,
      year = todayDate.getYear(),
      dateweek = "";
      if(navigator.appName === "Netscape"){
          dateweek = dateweek + (1900+year) + "年" + month + "月" + date + "日 ";
      }
      if(navigator.appVersion.indexOf("MSIE") !== -1){
          dateweek = dateweek + year + "年" + month + "月" + date + "日 ";
      }
      switch(todayDate.getDay()){
          case 0:dateweek += "星期日";break;
          case 1:dateweek += "星期一";break;
          case 2:dateweek += "星期二";break;
          case 3:dateweek += "星期三";break;
          case 4:dateweek += "星期四";break;
          case 5:dateweek += "星期五";break;
          case 6:dateweek += "星期六";break;
          default:;
      };
      return dateweek
  }

  getTime(){
      let date = new Date();
      const seperator2 = ":";
      let Hours = date.getHours();
      let Minutes = date.getMinutes();
      let Seconds = date.getSeconds();
      if (Hours >= 0 && Hours <= 9) {
          Hours = "0" + Hours;
      }
      if (Minutes >= 0 && Minutes <= 9) {
          Minutes = "0" + Minutes;
      }
      if (Seconds >= 0 && Seconds <= 9) {
          Seconds = "0" + Seconds;
      }
      let currentdate = Hours + seperator2 + Minutes + seperator2 + Seconds;
      return currentdate
  }

  componentDidMount() {
    this.setState({date: this.getDate(), time: this.getTime()});
    this.getTimeTimer = setInterval(()=>{
      this.setState({time: this.getTime()});
    },1000);
	}

  componentWillUnmount(){
    clearTimeout(this.getTimeTimer)
  }

  render(){
    return(
      <div className="top">
          <div className="time">{this.state.time}</div>
          <div className="date">{this.state.date}</div>
          <a href="/home/energysupply" className="logoLink" target="_parent">&nbsp;</a>
      </div>
    )
  }

}
