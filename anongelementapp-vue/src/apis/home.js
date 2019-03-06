import http from "../utils/http"

export const HomeData = (params)=>http("get","/api/categories/first_level?limit=7",params);
export const nong_CircleData = (params)=>http("get","/api/farmerCircle/getEntraceForHome",params);
export const Recommend = (params)=>http("get","/api/products?hotRecommend=true&page=1",params);
export const Search = (params)=>http("get","/api/search/keywords/all",params);
