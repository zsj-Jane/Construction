<template>
  <div class="waterLevelChart">
    <div class="title">计划资金累计完成情况</div>
    <div class="detail">
      累计完成
      <span>235,600</span>元
    </div>
    <div class="chart">
      <dv-water-level-pond :config="config" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'waterLevelChart',
  data() {
    return {
      config: {
        data: [55],
        shape: "round",
        waveHeight: 25,
        waveNum: 2
      }
    };
  }
};
</script>

<style lang="less">
.waterLevelChart {
  width: 20%;
  box-sizing: border-box;
  margin-left: 20px;
  background-color: rgba(6, 30, 93, 0.5);
  border-top: 2px solid rgba(1, 153, 209, 0.5);
  display: flex;
  flex-direction: column;
  .title {
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    font-weight: bold;
  }
  .detail {
    height: 15%;
    display: flex;
    justify-content: center;
    font-size: 17px;
    align-items: flex-end;
    span {
      font-size: 35px;
      font-weight: bold;
      color: #58a1ff;
      margin: 0 5px -5px;
    }
  }
  .chart {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    .dv-water-pond-level {
      max-width: 90%;
      width: 200px;
      height: 200px;
      border: 10px solid #19c3eb;
      border-radius: 50%;
    }
    ellipse {
      stroke: transparent !important;
    }
    text {
      font-size: 40px;
    }
  }
}
</style>