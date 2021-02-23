let child = {
    template: "#child",
}
let btn = {
    template: "#cpn",
    components: {
        child: child,
    },
    props: ['childCount'],
    data: function() {
        return {
            count: 111,
        };
    },
    method: {

    }
}

new Vue({
    el: '#app',
    components: {
        btn: btn,
    }
})