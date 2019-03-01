import {ClassificData} from "../../apis/home.js";
//import axios from "axios"
export default{
   async  handleClassificData({commit}){
    	let data = await ClassificData();
    	commit("handleClassificData",data);
    	console.log(data)
    }
}