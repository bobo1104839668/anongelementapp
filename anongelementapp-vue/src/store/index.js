import Vue from "vue"
import Vuex from "vuex"

import cart from "./cart"
import home from "./home"
import personal from "./personal"
import classific from "./classific"

Vue.use(Vuex);

let state = {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======
    flag:true
=======
<<<<<<< HEAD

=======
    flag:true
>>>>>>> master
>>>>>>> 42904599a063ca6eeb1631cc6ca9c36914a6f317
>>>>>>> shaobo
=======
    flag:true
>>>>>>> shaobo
=======
    flag:true
>>>>>>> shaobo
=======
    flag: true
>>>>>>> d2c5eb4d52fe418169c6be701169da6ed25cd95b
}


let actions = {
    // handleToken({ commit, state }, params) {
    //     if (state.personal.token) {
    //         params.push("/personal")
    //     } else {
    //         params.push("/login")
    //     }
    //     // commit("handleToken",params);
    // }
}

let mutations = {
    // handleToken(state, params) {
    //     params.push("/personal")
    // }
}

let getters = {

}

const store = new Vuex.Store({
    state,
    actions,
    mutations,
    getters,
    modules: {
        cart,
        home,
        classific,
        personal
    }
})

export default store
