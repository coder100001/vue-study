<template>
  <div id="app">
    <router-view></router-view>
    <main-tab-bar></main-tab-bar>
    <div>{{message}}</div>
    <vue-x-study>{{$store.state.counter}}</vue-x-study>
    <h2>{{$store.getters.powerCounter}}</h2>
    <button @click="addition">+</button>
    <button @click="subtraction">-</button>

    <p>{{$store.getters.getStudentNums}}</p>
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
  methods:{
    addition() {
      this.$store.commit('increment')
    },
    subtraction() {
      this.$store.commit('decrement')
    }
  }
};
</script>

<style>
@import "./assets/css/base.css";
</style>
