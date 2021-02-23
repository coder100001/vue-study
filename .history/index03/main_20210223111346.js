Vue.extend('btn2', {
    template: `
        <h2> this is test02 </h2>
    `,
})
let btn = {
    template: `
        <div> this is test </div>
        <btn2></btn2>
    `,
    components: {
        btn2: btn2,
    }
}

new Vue({
    el: '#components-demo',
    components: {
        btn: btn,
    }
})