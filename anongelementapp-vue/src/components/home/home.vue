<template>
    <div class="home">
    	<Header_com></Header_com>
    	<div class="wrapper homeWrapper" ref="homeWrapper">
    		<div class="content">
		    	<Carousel_com></Carousel_com>
		      	<Category_nav></Category_nav>
      			<Nong_circle></Nong_circle>
		      	<Recommend_com></Recommend_com>
    		</div>
    	</div>
	</div>
</template>

<script>
import Vuex from "vuex";
import Swiper from "swiper";
import Carousel from "./components/carousel"
import Header from "./components/header"
import Category_nav from "./components/category_nav"
import Nong_circle from "./components/nong_circle"
import Recommend from "./components/recommend"
import BScroll from "better-scroll"

export default {
<<<<<<< HEAD
	components:{
		"Carousel_com":Carousel,
		"Header_com":Header,
		"Category_nav":Category_nav,
		"Nong_circle":Nong_circle,
		"Recommend_com":Recommend,
	},
	computed:{
		...Vuex.mapState({
			state:state=>state.home
		})
	},
	watch:{
		state:{
			handler(){
				if(!this.scroll){
					this.scroll = new BScroll(this.$refs.homeWrapper,{
						tap:true,
						click:true
					});
					
				}
			},
			deep:true
		}
	},
}
</script>

<style>
.home,.homeWrapper{
	height:100%;
}
.content{
	overflow: auto;
}
=======
    created () {
        this.handleList();
    },
    methods: {
        ...Vuex.mapActions({
            handleList:"home/handleList"
        })
    }
}
</script>


<style lang="scss">
    
>>>>>>> shaobo
</style>