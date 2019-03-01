import Vue from "vue"
import Vuex from "vuex"

import cart from "./cart"
import home from "./home"
import personal from "./personal"
import classific from "./classific"
import details from "./details"
import productList from "./productList"

Vue.use(Vuex);

let state = {

}

let mutations = {

}

let actions = {

}

let getters = {

}

const store = new Vuex.Store({
    state,
    actions,
    mutations,
    getters,
    modules:{
        cart,
        home,
        classific,
        personal,
        details,
        productList
    }
})

export default store
