<template>
  <div class="tab-bar-item" @click="itemClick" :activeColor="activeColor">
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-actived"></slot>
    </div>
    <div :style="activeStyle">
        <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
    name:"TabBar",
    props: {
      path: String,
      activeColor: {
        type: String,
        default: "pink",
      }
    },
    methods: {
      itemClick() {
        this.$router.replace(this.path)
      }
    },
    computed: {
      isActive() {
        return this.$route.path.indexOf(this.path) !== -1
      },
      activeStyle() {
        return this.isActive ? {color: this.activeColor} : {}
      }
    },
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
</style>