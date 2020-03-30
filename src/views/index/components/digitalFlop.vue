<template>
  <div class="digitalFlop">
    <div class="digitalFlop-item" v-for="(item, index) in digitalFlopData" :key="index">
      <div class="title">{{item.title}}</div>
      <div class="content">
        <!-- 数字翻牌器 -->
        <dv-digital-flop :config="item.number" style="width:100px;height:50px;" />
        <div class="unit">{{item.unit}}</div>
      </div>
    </div>
    <dv-decoration-10 />
  </div>
</template>

<script>
export default {
  name: "digitalFlop",
  data() {
    return {
      digitalFlopData: [
        {
          title: "管养里程",
          number: {
            number: [100],
            content: "{nt}",
            textAlign: "center",
            style: {
              fill: "#4d99fc",
              fontWeight: "bold"
            }
          },
          unit: "个"
        },
        {
          title: "桥梁",
          number: {
            number: [10],
            content: "{nt}",
            textAlign: "right",
            style: {
              fill: "#f46827",
              fontWeight: "bold"
            }
          },
          unit: "座"
        },
        {
          title: "涵洞隧道",
          number: {
            number: [20],
            content: "{nt}",
            textAlign: "right",
            style: {
              fill: "#40faee",
              fontWeight: "bold"
            }
          },
          unit: "个"
        },
        {
          title: "匝道",
          number: {
            number: [30],
            content: "{nt}",
            textAlign: "right",
            style: {
              fill: "#4d99fc",
              fontWeight: "bold"
            }
          },
          unit: "个"
        },
        {
          title: "隧道",
          number: {
            number: [5],
            content: "{nt}",
            textAlign: "right",
            style: {
              fill: "#f46827",
              fontWeight: "bold"
            }
          },
          unit: "个"
        },
        {
          title: "服务区",
          number: {
            number: [6],
            content: "{nt}",
            textAlign: "right",
            style: {
              fill: "#40faee",
              fontWeight: "bold"
            }
          },
          unit: "个"
        },
        {
          title: "收费站",
          number: {
            number: [7],
            content: "{nt}",
            textAlign: "right",
            style: {
              fill: "#4d99fc",
              fontWeight: "bold"
            }
          },
          unit: "个"
        },
        {
          title: "超限站",
          number: {
            number: [8],
            content: "{nt}",
            textAlign: "right",
            style: {
              fill: "#f46827",
              fontWeight: "bold"
            }
          },
          unit: "个"
        },
        {
          title: "停车区",
          number: {
            number: [9],
            content: "{nt}",
            textAlign: "right",
            style: {
              fill: "#40faee",
              fontWeight: "bold"
            }
          },
          unit: "个"
        }
      ]
    };
  }
};
</script>

<style lang="less">
.digitalFlop {
  position: relative;
  height: 15%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(6, 30, 93, 0.5);
  .digitalFlop-item {
    width: 11%;
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-left: 3px solid rgb(6, 30, 93);
    border-right: 3px solid rgb(6, 30, 93);
    .title {
      font-size: 20px;
      margin-bottom: 20px;
    }
    .content {
      display: flex;
      .unit {
        margin-left: 10px;
        display: flex;
        align-items: flex-end;
        box-sizing: border-box;
        padding-bottom: 13px;
      }
    }
  }
  .dv-decoration-10 {
    position: absolute;
    width: 95%;
    left: 2.5%;
    height: 5px;
    bottom: 0px;
  }
}
</style>