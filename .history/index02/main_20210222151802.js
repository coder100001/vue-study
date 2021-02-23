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
        decrement(index) {
            this.books[index].count--;
        },
        increment(index) {
            this.books[index].count++;
        },
        removeBtn(index) {
            this.books.splice(index, 1)
        }

    },
    filters: {
        fmtPrice(price) {
            return "¥" + price.toFixed(2);
        }
    },
    computed: {
        totalPrice() {
            let totalPrice = 0;
            this.books.reduce((preValue, n) => {

            });

            for (let i = 0; i < this.books.length; i++) {
                totalPrice += this.books[i].price * this.books[i].count;
            }

            this.books.filters
            return totalPrice;
        }
    }
})