import React from 'react';
import ReactEcharts from 'echarts-for-react';

export default class ComponentOvL3B extends React.Component{

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
              data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']
          },
          yAxis: {
              name: "kg/m²         ",
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
              type: 'value'
          },
          grid: {
              top: '20%',
              left: '3%',
              right: '4%',
              bottom: '3%',
              containLabel: true
          },
          series: [{
              data: [160, 160, 160, 160, 160, 160, 160, 160, 160, 160, 160, 160],
              type: 'line',
              symbolSize: 0,
              lineStyle: {
                  normal: {
                      color: '#FFC416',
                      width: 2,
                      type: 'dashed'
                  }
              },

          },
          {
              data: [16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16],
              type: 'line',
              symbolSize: 0,
              lineStyle: {
                  normal: {
                      color: '#FD6BA8',
                      width: 2,
                      type: 'dashed'
                  }
              },

          },
          {
              data: [89, 120, 100, 80, 70, 110, 99, 65, 80, 70, 110, 120],
              type: 'line',
              symbolSize: 0,
              lineStyle: {
                  normal: {
                      color: '#63F3FF',
                      width: 1,
                      type: 'dashed'
                  }
              },

          },{
              data: [ 99, 65, 80, 70, 110, 120, 89, 120, 100, 80, 70, 110],
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
      <div className="l3-2 bo">
        <h6><span>航站楼单位平米能耗</span></h6>
        <ReactEcharts
          option={this.state.option()}
          lazyUpdate={true}
          style={{height: '170px'}} />
        <div className="legend" />
      </div>
    )
  }
}
