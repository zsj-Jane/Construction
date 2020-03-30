<template>
  <div id="data-wrap">
    <!-- 全屏容器 -->
    <dv-full-screen-container>
      <!-- 头部标题 -->
      <topBar />
      <div class="main-content">
        <!-- 数字翻牌器 -->
        <digitalFlop></digitalFlop>
        <div class="bottom-block">
          <!-- 排名轮播表 -->
          <rankingBoard></rankingBoard>
          <div class="right-block">
            <div class="top-block">
              <!-- 饼图 -->
              <roseChart></roseChart>
              <!-- 水位图 -->
              <waterLevelChart></waterLevelChart>
              <!-- 轮播表 -->
              <scrollBoard></scrollBoard>
            </div>
            <!-- 数字翻牌器 -->
            <cards></cards>
          </div>
        </div>
      </div>
    </dv-full-screen-container>
  </div>
</template>

<script>
import topBar from "./components/topBar";
import digitalFlop from "./components/digitalFlop";
import rankingBoard from "./components/rankingBoard";
import roseChart from "./components/roseChart";
import waterLevelChart from "./components/waterLevelChart";
import scrollBoard from "./components/scrollBoard";
import cards from "./components/cards";
export default {
  name: "index",
  components: {
    topBar,
    digitalFlop,
    rankingBoard,
    roseChart,
    waterLevelChart,
    scrollBoard,
    cards
  },
  data() {
    return {};
  }
};
</script>

<style lang="less">
#data-wrap {
  width: 100%;
  height: 100%;
  background-color: #030409;
  color: #fff;
  #dv-full-screen-container {
    height: 100%;
    background-image: url("./images/bg.png");
    background-size: 100% 100%;
    display: flex;
    flex-direction: column;
    .main-content {
      flex: 1;
      display: flex;
      flex-direction: column;
      .bottom-block {
        flex: 1;
        display: flex;
        margin-top: 20px;
        .right-block {
          flex: 1;
          display: flex;
          flex-direction: column;
          box-sizing: border-box;
          padding-left: 20px;
          .top-block {
            height: 55%;
            display: flex;
            box-sizing: border-box;
            padding-bottom: 20px;
          }
        }
      }
    }
  }
}
</style>