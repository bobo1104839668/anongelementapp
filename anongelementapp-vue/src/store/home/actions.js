import {HomeData} from "../../apis/home"
import {nong_CircleData} from "../../apis/home"
import {Recommend} from "../../apis/home"
export default {
    async handleList({commit}){
       let data = await HomeData();
       commit("handleList",data)
    },
    async handleCircle({commit}){
       let data = await nong_CircleData();
       commit("handleCircle",data)
    },
    async handleRecommend({commit}){
    	let data = await Recommend();
    	commit("handleRecommend",data)
    	    console.log(data)

    }
}