<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-actived"></slot>
    </div>
    <div v-bind:class="{active:isActive}">
        <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
    name:"TabBar",
    data() {
      return {
        isActive: false,
      }
    },
    actived() {
      this.isActive = true
    },
    methods: {
      itemClick() {
        console.log('item');
        
      }
    }
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
      margin-top: 2px;
  }

  .active {
    color: pink;
  }
</style>