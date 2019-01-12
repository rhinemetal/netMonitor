import React from 'react';
import ReactEcharts from 'echarts-for-react';

export default class ComponentOvL4D extends React.Component{

  constructor() {
    super();
    this.state = {
      option: (data) => ({
          tooltip : {
              formatter: "{a} <br/>{b} : {c}%"
          },
          series: [
              {
                  name: '业务指标',
                  type: 'gauge',
                  radius: '145%',
                  center: ['50%', '90%'],
                  startAngle: 180,
                  endAngle: 0,
                  axisLine: {            // 坐标轴线
                      lineStyle: {       // 属性lineStyle控制线条样式
                          color: [[0.2, '#FD7675'], [0.8, '#50E2FF'], [1, '#F55371']],
                          width: 8
                      }
                  },
                  axisTick: {            // 坐标轴小标记
                      length: 17,        // 属性length控制线长
                      lineStyle: {       // 属性lineStyle控制线条样式
                          width: 0,
                          color: '#fff'
                      }
                  },
                  splitLine: {           // 分隔线
                      length: 17,         // 属性length控制线长
                      lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                          width: 2,
                          color: '#14306B'
                      }
                  },
                  axisLabel: {
                      distance: -33,
                      fontSize: 8,
                      color: '#fff'
                  },
                  detail : {
                      show: false
                  },
                  pointer: {
                      width: 2,
                      color: "#fff"
                  },
                  itemStyle:{
                      color: '#fff',
                  },
                  data: [{
                      value: data
                  }]
              }
          ]
      })
    };
  };

  render(){
    return(
      <div className="l4-4 bo">
        <h6><span>供能设备负荷水平</span></h6>
        <ul className="c">
          <li>
            <ReactEcharts
              option={this.state.option(30)}
              lazyUpdate={true}
              style={{height: '100px'}} />
            <i>23.34MW</i>
            <u>40%</u>
            <em>110kV变1#主变</em>
          </li>
          <li>
            <ReactEcharts
              option={this.state.option(60)}
              lazyUpdate={true}
              style={{height: '100px'}} />
            <i>23.34MW</i>
            <u>40%</u>
            <em>110kV变1#主变</em>
          </li>
        </ul>
      </div>
    )
  }
}
