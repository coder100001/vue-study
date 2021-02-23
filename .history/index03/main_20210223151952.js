let child = {
    template: "#child",
    props: ['childCount'],
    data() {
        return {}
    }
}
let btn = {
    template: "#cpn",
    props: [],
    components: {
        child: child,
    },
    data() {
        return {
            count: 111,
        };
    },
}

new Vue({
    el: '#app',
    data: {
        count: count,
    },
    components: {
        btn: btn,
    },
})