let child = {
    template: "#child",
}
let btn = {
    template: "#cpn",
    components: {
        child: child,
    },
    data: function() {
        return {
            count: 0,
        };
    },
    method:
}

new Vue({
    el: '#app',
    components: {
        btn: btn,
    }
})