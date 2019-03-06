<<<<<<< HEAD
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
=======

>>>>>>> shaobo
// import {Provices} from "../../apis/http"
import axios from "axios"
import {Provices,Cities} from "../../apis/personal"
let jwt = require("jsonwebtoken");
import { Toast } from 'mint-ui';
import { getCookie,setCookie } from "../../utils/auth";
export default {
    async handleProvices({commit}){
        let data = await Provices();
        commit("handleProvices",data.provinces)
    },
    async handleClickProvinces({commit},params){
        let data = await Cities({areaCode: params});
        commit("handleClickProvinces",data)
    },
    async handleClickCitie({commit},params){
        let data = await Cities({areaCode: params});
        commit("handleClickCitie",data);
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
    },
    handleClickLogin({commit,state},params){
        axios({
            method:"get",
            url:"http://localhost:3000/users?phone="+state.phone+"&password="+state.password,
        }).then((data)=>{
            state.token = getCookie();
            var key = "bk1821";
            let username = data.data[0].username;
            var token = jwt.sign({username}, key,{ expiresIn: '1h' });
            setCookie(token);
            setCookie(username,"username")
            commit("handles")
            if(data.data.length){
                params.push({
                    name:"personal",
                })
            }
        })
    },
    handleRegistor({commit,state},params){
        let reg = /^\w{6,20}$/;
        if(reg.test(state.password)){
            console.log(state.password)
            let instance = Toast('手机格式正确');
            setTimeout(() => {
                instance.close();
                axios({
                    method:"post",
                    url:"http://localhost:3000/users",
                    data:{
                        username:state.username,
                        password:state.password,
                        phone:state.phone,
                    }
                }).then((data)=>{
                    if(data){
                        params.push("/login")
                    }
                    commit("handleRegistor");
                })
            }, 2000);
        }else{
            let instance = Toast('密码格式不正确');
            setTimeout(() => {
                instance.close();
            }, 2000);
        }
    },
    handleTo({commit,state},params){
        axios({
            method:"post",
            url:"http://localhost:3000/address",
            data:{
                userId:state.id,
                name:state.name,
                phone:state.phone,
                address:state.address,
                status:state.status
            }
        }).then((data)=>{
           if(data){
                params.push("/address")
           }
        })
    },
    handleToId({commit}){
        axios({
            method:"get",
            url:"http://localhost:3000/users?username="+getCookie("username"),
        }).then((data)=>{
            commit("handleToId",data.data[0].id)
        })
    },
    handleAddress({commit}){
        axios({
            method:"get",
            url:"http://localhost:3000/users?username="+getCookie("username"),
        }).then((data)=>{
            axios({
                method:"get",
                url:"http://localhost:3000/address?userId="+data.data[0].id
            }).then((data)=>{
                commit("handleAddress",data.data)
            })
        })
    },
    handleChecked({commit},params){
        axios({
            method:"get",
            url:"http://localhost:3000/address?status=1"
        }).then((data)=>{
            if(data.data.length != 0){
                axios({
                    method:"put",
                    url:"http://localhost:3000/address/"+data.data[0].id,
                    data:{
                        status:0
                    }
                }).then((data)=>{
                    if(data){
                        console.log(params.target.value)
                        commit("handleChecked",params.target.value)
                    }
                })
            }else{
                commit("handleChecked")
            }
        })
    },
    handleCheck({commit},params){
        axios({
            method:"patch",
            url:"http://localhost:3000/address/"+params.id,
            data:{
                status:1
            }
        }).then(()=>{
            location.reload();
        })
    },
    handleClickDel({commit},params){
        axios({
            method:"delete",
            url:"http://localhost:3000/address/"+params,
        }).then(()=>{
            location.reload();
        })
    },
    handleUpdates({commit},params){
        axios({
            method:"get",
            url:"http://localhost:3000/address/"+params.id,
        }).then((data)=>{
            commit("handleUpdates",data.data)
            params.router.push({
                name:"updateAddress",
                query:{
                    id:data.data.id
                }
            })
        })
    },
    handleSet({commit}){
        axios({
            method:"get",
            url:"http://localhost:3000/users?username="+getCookie("username"),
        }).then((data)=>{
            commit("handleSet",data.data[0])
        })
    },
    hanleToout({commit}){
        commit("hanleToout")
    },
    handleToUpdates({commit,state},params){
        axios({
            method:"patch",
            url:"http://localhost:3000/address/"+params.id,
            data:{
                userId:state.id,
                name:state.name,
                phone:state.phone,
                address:state.address,
                status:state.status
            }
        }).then((data)=>{
            if(data){
                params.route.push("/address")
            }
        })
    },
    handleInputs({commit},params){
        commit("handleInputss",params)
    },
    handleUpdatePsds(){
        
    }
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> master
>>>>>>> 42904599a063ca6eeb1631cc6ca9c36914a6f317
>>>>>>> shaobo
=======
<<<<<<< HEAD
>>>>>>> shaobo
=======
>>>>>>> 483a303f496fcfc1916ce929fb9ce03f5ecbf078
>>>>>>> shaobo
}