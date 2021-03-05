import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const vuexx = new Vuex.Store({
    state: {
        counter: 1000,
        students: [{
                id: 1,
                name: "张三",
                age: 12,
            },
            {
                id: 212,
                name: "李四",
                age: 32,
            },
            {
                id: 121,
                name: "王五",
                age: 42,
            }
        ]
    },
    mutations: {
        increment(state) {
            state.counter++
        },
        decrement(state) {
            state.counter--
        }
    },
    actions: {},
    getters: {
        powerCounter(state) {
            return state.counter * state.counter
        },
        getStudentConditions(state) {
            return state.students.filter(student => {
                return student.age > 20
            })
        },
        getStudentNums(state, getters) {
            return getters.getStudentConditions.length
        },
        mergeAgeStudent(state) {
            return age => {
                return state.students.filter(student => {
                    return student.age > age
                })
            }
        }
    },
    modules: {},
})

export default vuexx