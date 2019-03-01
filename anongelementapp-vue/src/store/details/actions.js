import {DetailsData} from "../../apis/home.js"
export default{
	async handleDetailsData({commit}){
		let data = await DetailsData();
		commit("handleDetailsData",data);
		console.log(data)
	}
}
