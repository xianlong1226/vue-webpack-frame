import Vue from 'vue'
import Vuex from 'vuex'
import Vuerouter from 'vue-router'

Vue.use(Vuerouter)
Vue.use(Vuex)

import main from './index.vue'

const store = new Vuex.Store({
    state: {
        count: 0
    },
    mutations: {
        increment: (state, num) => { state.count += num },
        decrement: (state, num) => { state.count -= num }
    }
})

import router1 from './components/router1.vue'
import router2 from './components/router2.vue'
import router3 from './components/router3.vue'

const routes = [
    { path: '/router1', component: router1 },
    { path: '/router2', component: router2 },
    { path: '/router3/:id', component: router3 }
]

let router = new Vuerouter({
    routes: routes
})

$(function () {
    var app = new Vue({
        el: "#app",
        router: router,
        store: store,
        render: function (createElement) {
            return createElement(main)
        }
    });
});