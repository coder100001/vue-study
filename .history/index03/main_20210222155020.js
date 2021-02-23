let data = [{
        id: 1,
        name: "算法导论",
        date: "2006-9",
        price: 85.00,
        count: 1,
    },
    {
        id: 2,
        name: "数学之美",
        date: "3321-9",
        price: 12.00,
        count: 2,
    },
    {
        id: 3,
        name: "图解算法",
        date: "2201-9",
        price: 33.00,
        count: 1,
    },
]

const vm = new Vue({
    el: "#app",
    data: {
        books: data,
        disable: false,
    },
    methods: {


    },
})