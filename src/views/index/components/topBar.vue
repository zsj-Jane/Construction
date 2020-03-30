<template>
  <div class="topBar">
    <dv-decoration-8 class="left" />
    <dv-decoration-5 class="center" />
    <dv-decoration-8 :reverse="true" class="right" />
    <div class="title">数据</div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less">
.topBar {
  position: relative;
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;

  .left {
    width: 25%;
    height: 60px;
  }
  .center {
    width: 40%;
    height: 60px;
    margin-top: 30px;
  }
  .right {
    width: 25%;
    height: 60px;
  }
  .title {
    position: absolute;
    left: 50%;
    top: 15px;
    font-size: 30px;
    font-weight: bold;
    transform: translateX(-50%);
  }
}
</style>