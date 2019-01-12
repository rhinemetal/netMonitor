module.exports = data => ({
    series: [
      {
        type: 'gauge',
        radius: '100%',
        center: ['50%', '65%'],
        startAngle: 180,
        endAngle: 0,
        axisLine: {
          lineStyle: {
            color: [[0.2, '#4CBAFF'], [0.8, '#4CBAFF'], [1, '#4CBAFF']],
            width: 4
          }
        },
        axisTick: {
          length: 8,
          lineStyle: {
            width: 1,
            color: '#4CBAFF'
          }
        },
        splitLine: {
          length: 15,
          lineStyle: {
            width: 2,
            color: 'auto'
          }
        },
        axisLabel: {
          show:false
        },
        title : {
          show:false
        },
        detail : {
          formatter: value => value + "%",
          fontSize:15,
          color: '#fff',
        },
        itemStyle:{
          color: '#fff',
        },
        pointer: {
          width:2
        },
        data: data
      }
    ]
})
