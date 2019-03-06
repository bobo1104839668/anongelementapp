export default{
    handleList(state,params){
    	state.category_nav = params;
    },
    handleCircle(state,params){
    	state.nongren = params;
    },
    handleRecommend(state,params){
    	state.goods = params;
    },
    handleSearch(state,params){
    	state.search = params.hotKeywords;
    },
    handleCircle_nong(state,params){
    	state.two_nong = params.farmerDynamics.farmerDynamics;
    },
    handleBanner(state,params){
    	state.imgs = params;
    },

}