<template>
  <div class="scrollBoard">
    <dv-scroll-board :config="config" />
  </div>
</template>

<script>
// 导入接口
import { getData } from "@/api/data";
// import axios from "axios";
export default {
  name: "scrollBoard",
  data() {
    return {
      // 拿到的数据
      data: [],
      // 轮播表配置信息
      config: {}
    };
  },
  methods: {
    // 取一个随机数（三位数）
    getRandom() {
      let num = Math.floor(Math.random() * 999);
      if (num < 10) {
        num = "00" + num;
      } else if (num < 100 && num >= 10) {
        num = "0" + num;
      } else {
        num = num;
      }
      return num;
    },
    // 发送请求
    async getRandomData(num) {
      let res = await getData({
        stock_code: "000" + num
      });
      let Dataset = res.data.data.map(item => {
        return [item.publish_time, item.title, item.url];
      });
      // console.log(Dataset);
      this.data.push(...Dataset);
    }
  },
  async created() {
    // 当代码小于十条时
    while (this.data.length < 10) {
      // 请求数据
      await this.getRandomData(this.getRandom());
    }
    // console.log(this.data);
    this.config = {
      // 表头数据
      header: ["时间", "标题", "网址"],
      // 表数据
      data: this.data,
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