let child = {
    template: `
        <h2> this is test02 </h2>
    `,
}
let btn = {
    template: "#cpn",
    components: {
        child: child,
    },
    data: function() {
        return {
            count: 'this is title'
        };
    }
}

new Vue({
    el: '#app',
    components: {
        btn: btn,
    }
})