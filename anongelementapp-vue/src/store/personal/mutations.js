import {setCookie, getCookie} from "../../utils/auth"
let jwt = require("jsonwebtoken");
export default{
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
    
=======
>>>>>>> master
>>>>>>> 42904599a063ca6eeb1631cc6ca9c36914a6f317
>>>>>>> shaobo
=======
=======
>>>>>>> shaobo
=======
>>>>>>> d2c5eb4d52fe418169c6be701169da6ed25cd95b
    handleInput(state,params){
        switch(params.id){
            case 1:state.password=params.e.target.value;break;
            case 2:state.phone=params.e.target.value;break;
            case 3:state.username=params.e.target.value;break;
        }
    },
    handleClick(state){
        state.token = getCookie();
        var key = "bk1821"
        var token = jwt.sign({ username}, key,{ expiresIn: '1h' });
        setCookie(token);
        setCookie("username",state.username)
    },
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> shaobo
=======
=======
>>>>>>> d2c5eb4d52fe418169c6be701169da6ed25cd95b
    handleClickLogin(state,params){
        state.token = getCookie();
        var key = "bk1821";
        let username = params[0].username;
        var token = jwt.sign({username}, key,{ expiresIn: '1h' });
        setCookie(token);
        setCookie(username,"username")
    },
    handleRegistor(state){
        setCookie(state.username)
    },
    handleProvices(state,params){
        state.provinces = params;
    },
    handleClickProvinces(state,params){
        state.cities = params;
    },
    handleClickCitie(state,params){
        state.counties = params;
    },
    handleInputs(state,params){
        switch(params.id){
            case 1:state.name=params.e.target.value;break;
            case 2:state.phone=params.e.target.value;break;
            case 3:state.address=params.e.target.value ;break;
        }
    },
    handleToId(state,params){
        state.id = params;
    },
    handleAddress(state,params){
        state.addresss = params;
    },
    handleChecked(state){
        state.status = 1;
    },
    handleUpdates(state,data){
        state.name = data.name;
        state.phone = data.phone;
        state.status = data.status;
        state.address = data.address;
        state.id = data.id,
        state.userId = data.userId
    },
    handleSet(state,data){
        state.name = data.username;
        state.phone = data.phone;
    },
    hanleToout(state){
        state.token = ""
    },
    handleInputss(state,params){
        state.passwords = params.target.value;
    },
    handles(state){
        state.token = getCookie();
    }
<<<<<<< HEAD
>>>>>>> shaobo
=======
>>>>>>> d2c5eb4d52fe418169c6be701169da6ed25cd95b
}