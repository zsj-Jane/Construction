<template>
  <div class="scrollBoard">
    <dv-scroll-board :config="config" />
  </div>
</template>

<script>
export default {
  name: "scrollBoard",
  data() {
    return {
      config: {
        // 表头数据
        header: ["时间", "病害信息", "数量", "标段"],
        // 表数据
        data: [
          ["2019-07-01 19:25:00", "路面危害-松散", "5", "xxxxxxx"],
          ["2019-07-02 17:25:00", "路面危害-路面油污清理", "13", "xxxxxxx"],
          ["2019-07-03 16:25:00", "交安设施-交通标志牌结构", "6", "xxxxxxx"],
          ["2019-07-04 15:25:00", "路基危害-防尘网", "2", "xxxxxxx"],
          ["2019-07-05 14:25:00", "交安设施-交通标志牌结构", "1", "xxxxxxx"],
          ["2019-07-06 13:25:00", "路面危害-松散", "3", "xxxxxxx"],
          ["2019-07-07 12:25:00", "路基危害-防尘网", "4", "xxxxxxx"],
          ["2019-07-08 11:25:00", "路面危害-路面油污清理", "2", "xxxxxxx"],
          ["2019-07-09 10:25:00", "交安设施-交通标志牌结构", "5", "xxxxxxx"],
          ["2019-07-10 09:25:00", "路基危害-防尘网", "3", "xxxxxxx"]
        ],
        // 显示行号
        index: true,
        // 列宽度
        columnWidth: [50, 170, 300],
        // 列对齐方式
        align: ["center"],
        // 表行数
        rowNum: 7,
        // 表头背景色
        headerBGC: "#1981f6",
        // 表头高度
        headerHeight: 45,
        // 奇数行背景色
        oddRowBGC: "rgba(0, 44, 81, 0.8)",
        // 偶数行背景色
        evenRowBGC: "rgba(10, 29, 50, 0.8)"
      }
    };
  }
};
</script>

<style lang="less">
.scrollBoard {
  width: 50%;
  height: 100%;
  box-sizing: border-box;
  margin-left: 20px;
  overflow: hidden;
}
</style>