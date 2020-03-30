<template>
  <div class="roseChart">
    <div class="title">累计计量资金分布</div>
    <dv-charts :option="option" />
  </div>
</template>

<script>
export default {
  name: "roseChart",
  data() {
    return {
      option: {
        series: [
          {
            type: 'pie',
            radius: '50%',
            // 玫瑰图模式下是否启用自动排序
            roseSort: false,
            // 构成饼状图的数据
            data: [
              { name: "路基", value: 93 },
              { name: "交安设施", value: 32 },
              { name: "日常养护", value: 65 },
              { name: "桥通", value: 44 },
              { name: "交通事故", value: 52 },
              { name: "路面", value: 32 },
              { name: "绿化", value: 65 },
              { name: "计日工", value: 44 },
              { name: "除雪", value: 52 }
            ],
            // 饼状图内部标签配置
            insideLabel: {
                // 是否显示外部标签
              show: true
            },
            roseType: true,
            // 饼状图外部标签配置
            outsideLabel: {
                // 标签格式化
              formatter: '{name} {percent}%',
            //   标签线末端长度
              labelLineEndLength: 20,
            //   标签默认样式
              style: {
                fill: '#fff'
              },
            //   标签线默认配置
              labelLineStyle: {
                stroke: '#fff'
              }
            },
          }
        ],
        // 图表全局配色
        color: ['#da2f00', '#fa3600', '#ff4411', '#ff724c', '#541200', '#801b00', '#a02200', '#5d1400', '#b72700']
      }
    };
  }
};
</script>

<style lang="less">
.roseChart {
  width: 30%;
  min-height: 100%;
  background-color: rgba(6, 30, 93, 0.5);
  border-top: 2px solid rgba(1, 153, 209, 0.5);
  box-sizing: border-box;
  .title{
      height: 50px;
      font-weight: bold;
    text-indent: 20px;
      font-size: 20px;
      display: flex;
      align-items: center;
  }
  .dv-charts-container {
    height: calc(~"100% - 50px");
  }
}
</style>