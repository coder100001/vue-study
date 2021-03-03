<template id="app">
     <div>
        <h2>我是cpn展示组件</h2>
        <p>我是cpn组件内容</p>
    </div>
</template>


<script>
export default {
    template: "#app",
    data() {
        return {
            title: "this is test",
            content: "按钮",
        }
    },
    methods: {
        btnClick: function(params) {
            console.log(params);

        }
    },
}
</script>

<style scoped>
    .title {
        color: gray;
    }
</style>
