import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index'
// import axios from 'axios'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    render: h => h(App),
    store,
    // axios,
})

// axios({
//     url: 'http://10.157.122.165:8108/utest/preview/queryMidList?desc={"status":2,"isNewUser":1,"expireStatus":0}'
// }).then(res => {
//     console.log(res);

// })

// const instance = axios.create({

// })