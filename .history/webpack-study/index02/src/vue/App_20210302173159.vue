<template>
    
</template>


<script>
export default {
    template: `
    <div>
        <h2>{{message}}</h2>
        <button @click="btnClick(message)">{{name}}</button>
    </div>
    `,
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
}
</script>
