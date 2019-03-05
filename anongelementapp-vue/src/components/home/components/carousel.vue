<template>
    <div>
       <div class="swiper-container" ref="swiperWrapper">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(item,index) in imgs">
              <img :src="item">
            </div>
          </div>
          
          <div class="swiper-pagination"></div>
        </div>
    </div>
</template>

<script>
import Swiper from "swiper";
import "swiper/dist/css/swiper.min.css";
export default {
    data(){
    	return{
			imgs:
			[
	            require("../../../assets/banner.png"),
	            require("../../../assets/banner.png"),
	            require("../../../assets/banner.png"),
            ],
		}
    },
    mounted() {
    var a = new Swiper(this.$refs.swiperWrapper,{
      autoplay:true,
      loop:true
    })
  },
}
</script>


<style scoped>
	.swiper-container img{
        width: 100%;
    }

</style>