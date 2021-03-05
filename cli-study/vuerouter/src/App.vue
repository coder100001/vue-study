<template>
  <div id="app">
    <router-view></router-view>
    <main-tab-bar></main-tab-bar>
    <div>{{message}}</div>
    <vue-x-study>{{$store.state.counter}}</vue-x-study>
    <h2>{{$store.getters.powerCounter}}</h2>
    <button @click="addition">+</button>
    <button @click="subtraction">-</button>

    <p>{{$store.getters.mergeAgeStudent(20)}}</p>
  </div>
</template>

<script>
import MainTabBar from "@/components/MainTabBar"
import VueXStudy from '@/components/VueXStudy'
import request from '@/network/request'

export default {
    name: "App",
    components: {
        MainTabBar,
        VueXStudy,
    },
    data: function() {
        return {
            message: {},
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
    },
    created: function () {
        request({
            url:'/utest/preview/queryMidList?desc={"status":2,"isNewUser":1,"expireStatus":0}',
        }).then((res) => {
            this.message = res.data.data.midList.join('-')
        })
    },
};
</script>

<style>
@import "./assets/css/base.css";
</style>
