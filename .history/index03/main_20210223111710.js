let child = Vue.extend({
    template: `
        <h2> this is test02 </h2>
    `,
})
let btn = {
    template: `
        <div> 
            <p>this is test</p>
            <child></child>
        </div>
        
    `,
    components: {
        child: child,
    }
}

new Vue({
    el: '#components-demo',
    components: {
        btn: btn,
    }
})