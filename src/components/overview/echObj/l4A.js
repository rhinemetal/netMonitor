module.exports = data => ({
    color: ["#3889FF", "#33BF60", "#5B6ECF", "#EAC05D", "#35DDEB", "#A08BFE"],
    tooltip: {
        trigger: 'item',
        formatter: "{b}: {c} ({d}%)"
    },
    series: [{
        type: 'pie',
        radius: ['0%', '65%'],
        label: {
            normal: {
                formatter: '{b|{b}}\n{d}%',
                color: "#05C1E3",
                rich: {
                    b: {
                        color: "#DADFEA",
                        fontSize: 12,
                        lineHeight: 20
                    }
                }
            }
        },
        data: data
    }]
})
