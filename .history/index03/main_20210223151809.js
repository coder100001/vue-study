let child = {
    template: "#child",
    props: ['childCount'],
    data() {
        return {
            chi
        }
    }
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