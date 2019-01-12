module.exports = data => ({
    tooltip : {
        trigger: 'axis',
        formatter: "{b}月",
        axisPointer : {
            type : 'shadow'
        }
    },
    legend: {
        top:0,
        right: 10,
        itemWidth: 15,
        itemHeight: 10,
        textStyle: {
            color: '#fff'
        },
        data:['A','B','C']
    },
    grid: {
        top: '30%',
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            data : ['1','2','3','4','5','6','7','8','9','10','11','12'],
            axisLine: {
                lineStyle:{
                    color: "#fff"
                }
            }
        }
    ],
    yAxis : [
        {
            type : 'value',
            name : '次      ',
            splitLine: {
                show: false
            },
            axisLabel:{
                show: true
            },
            axisLine: {
                show: false,
                lineStyle:{
                    color: "#fff"
                }
            },
            axisTick:{
                show: false
            }
        }
    ],
    series : [
        {
            name: 'A',
            type:'bar',
            stack: 'A',
            color: '#4490FF',
            barWidth: 20,
            data: data[0]
        },
        {
            name: 'B',
            type:'bar',
            stack: 'A',
            color: "#00FF9C",
            data: data[1]
        },
        {
            name: 'C',
            type:'bar',
            stack: 'A',
            color: "#00E5FF",
            data: data[2]
        }
    ]
})
