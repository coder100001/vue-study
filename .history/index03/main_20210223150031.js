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