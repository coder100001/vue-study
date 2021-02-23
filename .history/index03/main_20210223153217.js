let child = {
    template: "#child",
    props: {
        child_count: {
            type: String,
            default: '101',
            req
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