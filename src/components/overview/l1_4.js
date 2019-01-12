import React from 'react';
import ReactEcharts from 'echarts-for-react';

export default class ComponentOvL1D extends React.Component{

  constructor() {
    super();
    this.state = {
      option: () => ({
          xAxis: {
              type: 'category',
              boundaryGap: false,
              splitLine: {
                  show: false
              },
              axisLabel:{
                  show: true
              },
              axisLine: {
                  show: true,
                  lineStyle:{
                      color: "#fff"
                  }
              },
              axisTick:{
                  show: false
              },
              data: ['5:00', '6:00', '7:00', '8:00', '9:00', '10:00', '11:00', '12:00', '13:00', '14:00']
          },
          yAxis: {
              name: "℃         ",
              min: 10,
              splitLine: {
                  show: false
              },
              axisLine: {
                  show: false,
                  lineStyle:{
                      color: "#fff"
                  }
              },
              axisTick:{
                  show: false
              },
              type: 'value',
              data: [10, 20, 30, 40, 50]
          },
          grid: {
              top: '20%',
              left: '3%',
              right: '4%',
              bottom: '3%',
              containLabel: true
          },
          series: [{
              data: [15, 18, 20, 33, 23, 27, 19, 27, 30, 28, 35, 22],
              type: 'line',
              symbolSize: 0,
              lineStyle: {
                  normal: {
                      color: '#63F3FF',
                      width: 1,
                      type: 'dashed'
                  }
              }
          },{
              data: [27, 30, 28, 35, 22, 15, 18, 20, 33, 23, 27, 19],
              type: 'line',
              symbolSize: 0,
              lineStyle: {
                  normal: {
                      color: '#63F3FF',
                      width: 2
                  }
              }
          }]
      })
    };
  };

  render(){
    return(
      <div className="l1-4 bo">
        <h6><span>天气预测</span></h6>
        <ReactEcharts
          option={this.state.option()}
          lazyUpdate={true}
          style={{height: '160px'}} />
        <div className="weatherBox">
          <span className="temperature">18℃</span>
          <span className="weather"><i>晴</i>，湿度 40%，南风 3 级</span>
        </div>
      </div>
    )
  }

}
