import {HomeData} from "../../apis/home"
export default {
    async handleList(){
       let data = await HomeData();
       console.log(data);
    }
}