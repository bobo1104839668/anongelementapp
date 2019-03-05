import { getCookie } from "../../utils/auth";

export default{
    phone:"",
    password:"",
    username:"",
    token: "" || getCookie(),
    provinces:[],
    cities:[],
    counties:[],
    name:"",
    address:'',
    id:"",
    addresss:[],
    status:0
}