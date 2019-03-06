import {HomeData,nong_CircleData,Recommend,SearchData,CircleData,HomeBanner} from "../../apis/home"
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
    },
    async handleSearch({commit}){
       let data = await SearchData();
       commit("handleSearch",data)
    },
    async handleCircle_nong({commit}){
       let data = await CircleData();
       commit("handleCircle_nong",data)
    },
    async handleBanner({commit}){
       let data = await HomeBanner();
       commit("handleBanner",data)
       console.log(data)
    },

}