<<<<<<< HEAD
import axios from "axios"
<<<<<<< HEAD
export default{

=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
export default{

=======
>>>>>>> 42904599a063ca6eeb1631cc6ca9c36914a6f317
=======
>>>>>>> shaobo
// import {Provices} from "../../apis/http"
import axios from "axios"
export default {
    async handleProvices(){

    },
    handleInput({commit},params){
        commit("handleInput",params);
    },
    async handleClick({commit,state}){
        let phone = state.phone;
        let password = state.password;
        axios({
            method:"get",
            url:"http://localhost:3000",
            data:{
                phone,
                password
            }
        }).then((data)=>{
            commit("handleClick",data);
        })
    },
    handleClick({commit,state},params){
        axios({
            method:"get",
            url:"http://localhost:3000?phone="+state.phone+"&password="+state.password,
        }).then((data)=>{
            if(data){
                params.push({
                    name:"personal",
                })
                commit("handleClick")
            }
        })
    }
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> master
>>>>>>> 42904599a063ca6eeb1631cc6ca9c36914a6f317
>>>>>>> shaobo
=======
>>>>>>> shaobo
}