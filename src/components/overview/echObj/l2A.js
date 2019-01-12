module.exports = (data, sort, maxSum) => ({
    tooltip: {
        trigger: 'axis',
        formatter: "{b}: {c}",
        axisPointer: {
            type: 'shadow'
        }
    },
    grid: {
        top: '12%',
        left: '4%',
        right: '4%',
        bottom: '-10%',
        containLabel: true
    },
    xAxis: {
        splitNumber: 50,
        show: false
    },
    yAxis: [
        {
            type: 'category',
            inverse: sort,
            position: 'left',
            axisTick: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: "#fff",
                    width: 0
                }
            },
            data: data.name
        },
        {
            type: 'category',
            inverse: sort,
            position: 'right',
            axisLine: {
                lineStyle: {
                    color: "#fff",
                    width: 0
                }
            },
            axisTick: {
                show: false
            },
            data: data.number
        }
    ],
    series: [
        {
            type: 'bar',
            barWidth: 7,
            color: '#00E5FF',
            z: 10,
            data: data.number
        },
        {
            type: 'bar',
            barWidth: 7,
            barGap: '-100%',
            color: "#0C5DB1",
            data: maxSum
        }
    ]
})
