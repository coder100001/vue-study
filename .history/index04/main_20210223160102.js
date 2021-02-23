let child = {
    template: "#child",
    props: {
        childCount: {
            type: String,
            default: '101',
            required: true,
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
            categories: {
                { id: 1, }
            },
        };
    },
}

new Vue({
    el: '#app',
    components: {
        btn: btn,
    },
})