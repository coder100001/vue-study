let btn2 = {
    template: `
        <👌> this is test02 </👌>
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