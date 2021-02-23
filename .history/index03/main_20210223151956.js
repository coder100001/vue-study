let child = {
    template: "#child",
    props: ['childCount'],
    data() {
        return {}
    }
}
let btn = {
    template: "#cpn",
    props: ['count'],
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