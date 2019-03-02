import {setCookie, getCookie} from "../../utils/auth"
let jwt = require("jsonwebtoken");
export default{
    handleInput(state,params){
        switch(params.id){
            case 1:state.password=params.e.target.value;break;
            case 2:state.phone=params.e.target.value;break;
            case 3:state.username=params.e.target.value;break;
        }
        console.log(params.e.target.value)
    },
    handleClick(state){
        state.token = getCookie();
        var key = "bk1821"
        var token = jwt.sign({ username}, key,{ expiresIn: '1h' });
        setCookie(token);
        setCookie("username",state.username)
    },
}