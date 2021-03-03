<template id="app">
     <div>
        <h2>{{message}}</h2>
        <button @click="btnClick(message)">{{name}}</button>
    </div>
</template>


<script>

import Cpn from "./Cpn";

export default {
    template: "#app",
    data() {
        return {
            message: "this is test",
            name: "按钮",
        }
    },
    methods: {
        btnClick: function(params) {
            console.log(params);

        }
    },
    components: {
        Cpn:Cpn,
    }
}
</script>

<style scoped>
    .title {
        color: gray;
    }
</style>
