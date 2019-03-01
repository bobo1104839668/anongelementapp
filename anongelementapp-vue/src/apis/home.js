import http from "../utils/http"

export const HomeData = (params)=>http("get","/api/categories/first_level?limit=7",params);
export const ClassificData = (params)=>http("get","/api/categories/hierarchy",params);
export const DetailsData = (params) =>http("get","/api/products?categoryId=169&orderBy=-month_purchase_times&page=1",params)
export const ProductListData = (params)=>http("get","api/products/666",params);
