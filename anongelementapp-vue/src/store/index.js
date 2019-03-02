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
    // handleToken(state,params){
    //     if(state.personal.token){
    //         params.push("/personal")
    //     }else{
    //         params.push("/login")
    //     }
    // }
}

let actions = {
    handleToken({commit,state},params){
        if(state.personal.token){
            params.push("/personal")
        }else{
            params.push("/login")
        }
        // commit("handleToken",params);
    }
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
