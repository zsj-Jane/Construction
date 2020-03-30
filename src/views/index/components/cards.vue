<template>
  <div class="cards">
    <div class="card-item" v-for="(item, index) in cards" :key="index">
      <!-- 标题 -->
      <div class="title">
        <div class="left">{{item.title}}</div>
        <div class="right">{{'0'+(index+1)}}</div>
      </div>
      <!-- 圆环 -->
      <dv-charts class="ring-charts" :option="item.ring" />
      <!-- 数据 -->
      <div class="card-footer">
        <div class="card-footer-item">
          <div class="title">累计金额</div>
          <div class="detail">
            <dv-digital-flop :config="item.total" style="width:70%;height:35px;" />元
          </div>
        </div>
        <div class="card-footer-item">
          <div class="title">巡查病害</div>
          <div class="detail">
            <dv-digital-flop :config="item.num" style="width:70%;height:35px;" />处
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cards: [
        {
          title: "测试路段",
          total: {
            number: [1000],
            content: "{nt}",
            textAlign: "right",
            style: {
              fill: "#ea6027",
              fontWeight: "bold"
            }
          },
          num: {
            number: [30],
            content: "{nt}",
            textAlign: "right",
            style: {
              fill: "#26fcd8",
              fontWeight: "bold"
            }
          },
          ring: {
            series: [
              {
                type: "gauge",
                // 仪表盘起始角度（弧度值）
                startAngle: -Math.PI / 2,
                // 仪表盘结束角度（弧度值）
                endAngle: Math.PI * 1.5,
                // 仪表盘圆弧线条宽度
                arcLineWidth: 13,
                // 仪表盘半径
                radius: "80%",
                // 构成仪表盘的圆弧的数据
                data: [
                  {
                    // 构成仪表盘的圆弧的名称
                    name: "资金占比",
                    // 构成仪表盘的圆弧的值
                    value: 20
                  }
                ],
                // 坐标标签配置项
                axisLabel: {
                  // 是否显示坐标标签
                  show: false
                },
                // 坐标刻度配置项
                axisTick: {
                  // 是否显示刻度
                  show: false
                },
                // 仪表盘指针配置项
                pointer: {
                  // 是否显示指针
                  show: false
                },
                // 仪表盘背景圆弧配置
                backgroundArc: {
                  // 背景环样式
                  style: {
                    stroke: "#224590"
                  }
                },
                // Data子元素构成的圆弧的详情的配置项
                details: {
                  // 是否显示详情
                  show: true,
                  // 详情内容格式化
                  formatter: "资金占比{value}%",
                  // 详情样式
                  style: {
                    fill: "#1ed3e5",
                    fontSize: 20
                  }
                }
              }
            ],
            color: ["#03d3ec"]
          }
        },
        {
          title: "测试路段",
          total: {
            number: [1000],
            content: "{nt}",
            textAlign: "right",
            style: {
              fill: "#ea6027",
              fontWeight: "bold"
            }
          },
          num: {
            number: [30],
            content: "{nt}",
            textAlign: "right",
            style: {
              fill: "#26fcd8",
              fontWeight: "bold"
            }
          },
          ring: {
            series: [
              {
                type: "gauge",
                // 仪表盘起始角度（弧度值）
                startAngle: -Math.PI / 2,
                // 仪表盘结束角度（弧度值）
                endAngle: Math.PI * 1.5,
                // 仪表盘圆弧线条宽度
                arcLineWidth: 13,
                // 仪表盘半径
                radius: "80%",
                // 构成仪表盘的圆弧的数据
                data: [
                  {
                    // 构成仪表盘的圆弧的名称
                    name: "资金占比",
                    // 构成仪表盘的圆弧的值
                    value: 20
                  }
                ],
                // 坐标标签配置项
                axisLabel: {
                  // 是否显示坐标标签
                  show: false
                },
                // 坐标刻度配置项
                axisTick: {
                  // 是否显示刻度
                  show: false
                },
                // 仪表盘指针配置项
                pointer: {
                  // 是否显示指针
                  show: false
                },
                // 仪表盘背景圆弧配置
                backgroundArc: {
                  // 背景环样式
                  style: {
                    stroke: "#224590"
                  }
                },
                // Data子元素构成的圆弧的详情的配置项
                details: {
                  // 是否显示详情
                  show: true,
                  // 详情内容格式化
                  formatter: "资金占比{value}%",
                  // 详情样式
                  style: {
                    fill: "#1ed3e5",
                    fontSize: 20
                  }
                }
              }
            ],
            color: ["#03d3ec"]
          }
        },
        {
          title: "测试路段",
          total: {
            number: [1000],
            content: "{nt}",
            textAlign: "right",
            style: {
              fill: "#ea6027",
              fontWeight: "bold"
            }
          },
          num: {
            number: [30],
            content: "{nt}",
            textAlign: "right",
            style: {
              fill: "#26fcd8",
              fontWeight: "bold"
            }
          },
          ring: {
            series: [
              {
                type: "gauge",
                // 仪表盘起始角度（弧度值）
                startAngle: -Math.PI / 2,
                // 仪表盘结束角度（弧度值）
                endAngle: Math.PI * 1.5,
                // 仪表盘圆弧线条宽度
                arcLineWidth: 13,
                // 仪表盘半径
                radius: "80%",
                // 构成仪表盘的圆弧的数据
                data: [
                  {
                    // 构成仪表盘的圆弧的名称
                    name: "资金占比",
                    // 构成仪表盘的圆弧的值
                    value: 20
                  }
                ],
                // 坐标标签配置项
                axisLabel: {
                  // 是否显示坐标标签
                  show: false
                },
                // 坐标刻度配置项
                axisTick: {
                  // 是否显示刻度
                  show: false
                },
                // 仪表盘指针配置项
                pointer: {
                  // 是否显示指针
                  show: false
                },
                // 仪表盘背景圆弧配置
                backgroundArc: {
                  // 背景环样式
                  style: {
                    stroke: "#224590"
                  }
                },
                // Data子元素构成的圆弧的详情的配置项
                details: {
                  // 是否显示详情
                  show: true,
                  // 详情内容格式化
                  formatter: "资金占比{value}%",
                  // 详情样式
                  style: {
                    fill: "#1ed3e5",
                    fontSize: 20
                  }
                }
              }
            ],
            color: ["#03d3ec"]
          }
        },
        {
          title: "测试路段",
          total: {
            number: [1000],
            content: "{nt}",
            textAlign: "right",
            style: {
              fill: "#ea6027",
              fontWeight: "bold"
            }
          },
          num: {
            number: [30],
            content: "{nt}",
            textAlign: "right",
            style: {
              fill: "#26fcd8",
              fontWeight: "bold"
            }
          },
          ring: {
            series: [
              {
                type: "gauge",
                // 仪表盘起始角度（弧度值）
                startAngle: -Math.PI / 2,
                // 仪表盘结束角度（弧度值）
                endAngle: Math.PI * 1.5,
                // 仪表盘圆弧线条宽度
                arcLineWidth: 13,
                // 仪表盘半径
                radius: "80%",
                // 构成仪表盘的圆弧的数据
                data: [
                  {
                    // 构成仪表盘的圆弧的名称
                    name: "资金占比",
                    // 构成仪表盘的圆弧的值
                    value: 20
                  }
                ],
                // 坐标标签配置项
                axisLabel: {
                  // 是否显示坐标标签
                  show: false
                },
                // 坐标刻度配置项
                axisTick: {
                  // 是否显示刻度
                  show: false
                },
                // 仪表盘指针配置项
                pointer: {
                  // 是否显示指针
                  show: false
                },
                // 仪表盘背景圆弧配置
                backgroundArc: {
                  // 背景环样式
                  style: {
                    stroke: "#224590"
                  }
                },
                // Data子元素构成的圆弧的详情的配置项
                details: {
                  // 是否显示详情
                  show: true,
                  // 详情内容格式化
                  formatter: "资金占比{value}%",
                  // 详情样式
                  style: {
                    fill: "#1ed3e5",
                    fontSize: 20
                  }
                }
              }
            ],
            color: ["#03d3ec"]
          }
        },
        {
          title: "测试路段",
          total: {
            number: [1000],
            content: "{nt}",
            textAlign: "right",
            style: {
              fill: "#ea6027",
              fontWeight: "bold"
            }
          },
          num: {
            number: [30],
            content: "{nt}",
            textAlign: "right",
            style: {
              fill: "#26fcd8",
              fontWeight: "bold"
            }
          },
          ring: {
            series: [
              {
                type: "gauge",
                // 仪表盘起始角度（弧度值）
                startAngle: -Math.PI / 2,
                // 仪表盘结束角度（弧度值）
                endAngle: Math.PI * 1.5,
                // 仪表盘圆弧线条宽度
                arcLineWidth: 13,
                // 仪表盘半径
                radius: "80%",
                // 构成仪表盘的圆弧的数据
                data: [
                  {
                    // 构成仪表盘的圆弧的名称
                    name: "资金占比",
                    // 构成仪表盘的圆弧的值
                    value: 20
                  }
                ],
                // 坐标标签配置项
                axisLabel: {
                  // 是否显示坐标标签
                  show: false
                },
                // 坐标刻度配置项
                axisTick: {
                  // 是否显示刻度
                  show: false
                },
                // 仪表盘指针配置项
                pointer: {
                  // 是否显示指针
                  show: false
                },
                // 仪表盘背景圆弧配置
                backgroundArc: {
                  // 背景环样式
                  style: {
                    stroke: "#224590"
                  }
                },
                // Data子元素构成的圆弧的详情的配置项
                details: {
                  // 是否显示详情
                  show: true,
                  // 详情内容格式化
                  formatter: "资金占比{value}%",
                  // 详情样式
                  style: {
                    fill: "#1ed3e5",
                    fontSize: 20
                  }
                }
              }
            ],
            color: ["#03d3ec"]
          }
        },
      ]
    };
  }
};
</script>

<style lang="less">
.cards {
  display: flex;
  justify-content: space-between;
  height: 45%;
  .card-item {
    background-color: rgba(6, 30, 93, 0.5);
    border-top: 2px solid rgba(1, 153, 209, 0.5);
    width: 19%;
    display: flex;
    flex-direction: column;
    .title {
      display: flex;
      height: 20%;
      align-items: center;
      justify-content: space-between;
      .left {
        font-size: 18px;
        font-weight: bold;
        padding-left: 20px;
      }
      .right {
        padding-right: 20px;
        font-size: 40px;
        color: #03d3ec;
      }
    }
    .ring-charts {
      height: 55%;
    }
    .card-footer {
      height: 25%;
      display: flex;
      align-items: center;
      justify-content: space-around;
      .card-footer-item {
        padding: 5px 10px 0 10px;
        box-sizing: border-box;
        width: 40%;
        background-color: rgba(6, 30, 93, 0.7);
        border-radius: 3px;
        .title {
          font-size: 15px;
          margin-bottom: 5px;
        }
        .detail {
          font-size: 20px;
          color: #1294fb;
          display: flex;
          font-size: 18px;
          align-items: center;
          .dv-digital-flop {
            margin-right: 5px;
          }
        }
      }
    }
  }
}
</style>