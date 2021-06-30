// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById("skill-p"));

// 指定图表的配置项和数据
var option = {
  radar: {
    // shape: 'circle',
    indicator: [
      { name: "静态页面", max: 100 },
      { name: "编程基础", max: 100 },
      { name: "Vue", max: 100 },
      { name: "React", max: 100 },
      { name: "项目开发", max: 100 },
      { name: "沟通能力", max: 100 },
    ],
  },
  series: [
    {
      name: "预算 vs 开销（Budget vs spending）",
      type: "radar",
      data: [
        {
          value: [90, 74, 85, 70, 75, 88],
          name: "能力雷达",
        },
      ],
    },
  ],
};

// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);
