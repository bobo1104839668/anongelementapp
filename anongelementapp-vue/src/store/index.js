import Vue from "vue"
import Vuex from "vuex"

import cart from "./cart"
import home from "./home"
import personal from "./personal"
import classific from "./classific"

Vue.use(Vuex);

let state = {
<<<<<<< HEAD

    flag:true
=======
<<<<<<< HEAD

=======
    flag:true
>>>>>>> master
>>>>>>> 42904599a063ca6eeb1631cc6ca9c36914a6f317
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
