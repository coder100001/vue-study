let child = {
    template: `
        <h2> this is test02 </h2>
    `,
}
let btn = {
    template: `
        <div> 
            <p>this is test</p>
            <child></child>
        </div>
        
    `,
    components: {
        child: child,
    },
    data:
}

new Vue({
    el: '#app',
    components: {
        btn: btn,
    }
})