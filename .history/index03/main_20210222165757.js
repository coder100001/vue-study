const cptConstruster = Vue.extend({
    template: `
    <div id="app" v-cloak>
        <label for="male">
            <input type="text" id="male" value="" v-model.number="sex">
        </label>

        <h2>您选择的性别为 {{sex}} {{typeof sex}}</h2>
    </div>
    `,
})

Vue.component("tst-cpt", )