let child = Vue.extend({
    template: `
        <h2> this is test02 </h2>
    `,
})
let btn = {
    template: `
        <div> 
    <p></p>this is test 
        <btn2></btn2>
        </div>
        
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