let btn2 = {
    template: `
        <div> this is test02 </div>
    `,
}
btn = {
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