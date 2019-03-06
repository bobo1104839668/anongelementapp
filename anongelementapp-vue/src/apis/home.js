import http from "../utils/http"

export const HomeData = (params)=>http("get","/api/categories/first_level?limit=7",params);
export const HomeBanner = (params)=>http("get","/api/picture/banners",params);
export const nong_CircleData = (params)=>http("get","/api/farmerCircle/getEntraceForHome",params);
export const Recommend = (params)=>http("get","/api/products?hotRecommend=true&page=1",params);
export const SearchData = (params)=>http("get","/api/search/keywords/all",params);
export const CircleData = (params)=>http("get","/api/farmerCircle/getWholeDynamic?page=1",params);
export const SellerDetailsData = (params)=>http("get","/api/shops/"+params);
export const StoresArticle = (params)=>http("get","/api/products?page=1&shopId="+params);
export const DianPuDongTai = (params)=>http("get","/api/farmerCircle/getShopDynamic?page=1&shopId="+params+"&type=2");
