const { add } = require('./js/mathUtils');
console.log(add(100, 200));

import { name, age } from "./js/info";



console.log(name);
console.log(age);

import { body } from "./css/normal.css";
import { less } from "./css/special.less";

import Vue from 'vue';

const App = {

}

new Vue({
    el: "#app",
    data: {
        message: "this is test",
        name: "按钮",
    },

    methods: {
        btnClick: function(params) {
            console.log(params);

        }
    },
})