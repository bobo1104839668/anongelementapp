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
}