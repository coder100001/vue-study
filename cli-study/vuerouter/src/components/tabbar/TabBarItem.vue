<template>
  <div class="tab-bar-item">
      <slot name="item-icon"></slot>
      <slot name="item-text"></slot>
  </div>
</template>

<script>
export default {
    name:"TabBar",
}
</script>

<style lang="">
  .tab-bar-item {
      flex: 1;
      text-align: center;
      height: 49px;
      box-shadow: 0 -3px 1px rgba(100, 100, 100, 0.1);
      font-size: 14px;
      margin-top: 3px;
  }

  .tab-bar-item img {
      text-align: center;
      height: 20px;
      width: 30px;
      vertical-align: middle;
      margin-bottom: 2px;
  }
</style>