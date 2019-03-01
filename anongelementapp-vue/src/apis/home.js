import http from "../utils/http"

export const HomeData = (params)=>http("get","/api/categories/first_level?limit=7",params);