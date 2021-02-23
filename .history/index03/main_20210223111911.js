let child = Vue.extend({
    template: `
        <h2> this is test02 </h2>
    `,
})
let btn = {
    template: `
        <div> 
            <p>this is test</p>
        </div>
        <child></child>

    `,
    components: {
        child: child,
    }
}

new Vue({
    el: '#app',
    components: {
        btn: btn,
    }
})