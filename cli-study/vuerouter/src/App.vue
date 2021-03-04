<template>
  <div id="app">
    <router-view></router-view>
    <main-tab-bar></main-tab-bar>
    <div>{{message}}</div>
    <vue-x-study :counter="counter"></vue-x-study>
    <button @click="counter++">+</button>
    <button @click="counter--">-</button>
  </div>
</template>

<script>
import MainTabBar from "@/components/MainTabBar";
import VueXStudy from '@/components/VueXStudy'

export default {
  name: "App",
  components: {
    MainTabBar,
    VueXStudy,
  },
  data: function() {
    return {
      message: "this is message",
      counter: 0,
    };
  },
};
</script>

<style>
@import "./assets/css/base.css";
</style>
