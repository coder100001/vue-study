let child = {
    template: "#child",
    props: {
        child_count: {
            type: String,
            default: '101',
            { required: true, message: '请输入', trigger: 'blur' }
        }
    },
    data() {
        return {}
    }
}
let btn = {
    template: "#cpn",
    components: {
        child: child,
    },
    data() {
        return {
            count: '123456',
        };
    },
}

new Vue({
    el: '#app',
    components: {
        btn: btn,
    },
})