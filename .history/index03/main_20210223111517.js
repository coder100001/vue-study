// 注册组件
Vue.component('my-component', {
        template: '<div>A custom component!</div>',
    })
    // 子组件
var childComponent = Vue.extend({
    template: '<p>this is child template</p>'
});
// 父组件
Vue.component("parent", {
    template: '<div><p>this is parent template</p><child></child></div>',
    components: {
        'child': childComponent,
    }
});
new Vue({
    el: '#app',
    data: {}
})