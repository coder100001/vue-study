let btn2 = {
    template: `
        < div > this is test02 < /div>
    `,
}
Vue.component('button-counter', {
    template: ` <
        div > this is test < /div>
        `,

})

new Vue({
    el: '#components-demo',
    components: {
        btn2: btn2
    }
})