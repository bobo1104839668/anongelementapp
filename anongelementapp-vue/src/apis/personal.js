import http from "../utils/http"
// areas/childrenAreas?areaCode=110000 +
export const Provices = ()=>http("get","/api/areas/nestedAreas");
export const Cities = (params)=>http("get","/api/areas/childrenAreas",params);