let child = {
    template: "#child",
    props: ['child-count'],
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