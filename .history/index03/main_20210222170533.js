const cptConstruster = Vue.extend({
    template: `
        <div>this is component</div>
    `,
})

Vue.component("my-cpt", cptConstruster)