import Vue from "vue"
import Vuex from "vuex"

import cart from "./cart"
import home from "./home"
import personal from "./personal"
import classific from "./classific"

Vue.use(Vuex);

let state = {
    flag:true
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
        personal
    }
})

export default store
