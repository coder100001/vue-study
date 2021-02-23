let btn2 = {
    template: `
        <div > this is test02 < /div>
    `,
}
Vue.component('button-counter', {
    template: ` <
        div > this is test < /div>
        `,
    components: {
        btn2: btn2,
    }
})

new Vue({
    el: '#components-demo',

})