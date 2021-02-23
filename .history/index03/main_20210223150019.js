let child = {
    template: "#child",
    props: ['count'],
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
    method: {

    }
}

new Vue({
    el: '#app',
    components: {
        btn: btn,
    }
})