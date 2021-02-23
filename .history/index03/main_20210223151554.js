let child = {
    template: "#child",
    props: ['childCount'],
}
let btn = {
    template: "#cpn",
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
    components: {
        btn: btn,
    },
})