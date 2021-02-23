let child = {
    template: "#child",
    props: {
        childCount: {
            type: String,
            default: '101',
            required: true,
        },
        childCategories: {
            type: Array,
            default: function() {
                return [];
            },
            required: true,
        }
    },
    data() {
        return {}
    },
    methods: {
        btnClick: function(category) {
            // send event
            this.$emit("itemclick", category)
            console.log(category.name)
        }
    }
}
let btn = {
    template: "#cpn",
    components: {
        child: child,
    },
    data() {
        return {
            count: '123456',
            categories: [{
                    id: 1,
                    name: "iphone12",
                },
                {
                    id: 2,
                    name: "huawei",
                },
                {
                    id: 3,
                    name: "xiaomi",
                },
            ],
        };
    },
    methods: {
        postCategory: function(category) {
            // 监听
            console.log(category)
        }
    }
}

new Vue({
    el: '#app',
    components: {
        btn: btn,
    },
})