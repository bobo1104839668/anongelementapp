<template>
    <div>
       <div class="swiper-container" ref="swiperWrapper">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(item,index) in imgs">
              <img :src="item.picture"/>
            </div>
          </div>
          
          <div class="swiper-pagination"></div>
        </div>
    </div>
</template>

<script>
import Vuex from "vuex";
import Swiper from "swiper";
import "swiper/dist/css/swiper.min.css";
export default {
  	created () {
    	this.handleBanner();
    },
    computed:{
	...Vuex.mapState({
            imgs:state=>state.home.imgs

        }),
    },
    methods: {
        ...Vuex.mapActions({
            handleBanner:"home/handleBanner"
        }),
   },
    updated(){
    	if(!this.swiper){
    		this.swiper = new Swiper(this.$refs.swiperWrapper,{
    			autoplay:{
    				disableOnInteraction:false,
    				loop: true,
    				observer:true,
    				paginationClickable: true,
    				pagination: '.swiper-pagination',
    			}
    		})
    	}
    }
}
</script>


<style scoped>
	.swiper-container img{
        width: 100%;
    }

</style>