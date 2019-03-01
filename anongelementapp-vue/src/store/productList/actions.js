import {ProductListData} from "../../apis/home";
export default{
	async handleProductListData({commit}){
		let data = await ProductListData();
		commit("handleProductListData",data);
		console.log(data)
		
	}
}
