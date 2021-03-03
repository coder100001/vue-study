const { add } = require('./js/mathUtils');
console.log(add(100, 200));

import { name, age } from "./js/info";



console.log(name);
console.log(age);

import { body } from "./css/normal.css";
import { less } from "./css/special.less";

importvue from 'vue';
const app = new Vue({
    el: "body",
    data: {
        message: "this is test"
    },
})