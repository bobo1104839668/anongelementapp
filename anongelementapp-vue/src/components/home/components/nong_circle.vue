<template>
	<div>
       <div class="circle ">
       		<div class="circle-head">
       			<h2>农人圈</h2>
       			<router-link :to="{name:'circle_nongren'}">查看更多</router-link>
       		</div>
       		<div class="swiper-container" ref="swiperWrapper">
	       		<div class="swiper-wrapper">
		       		<div class="circle-content swiper-slide" v-for="(item,index) in nongren"  @click="handleToSellerDetails(item.shopId)">
		       			<div class="circle-peo">
		       				<img :src="item.userMicroAvatar"/>
		       				<div class="right">
			       				<p class="circle-name">{{item.userName}}</p>
		       					<p class="circle-time">{{item.timeDifference}}前</p>
		       				</div>
		       			</div>
		       			<div class="circle-font">
		       				{{item.content}}
		       			</div>
		       			<div class="circle-img">
		       				<div class="pict" v-for="(pic,index) in nongren[index].pictures">
		       					<img :src="pic"/>
		       				</div>
		       			</div>
		       		</div>       			
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
	export default{
	  created () {
	        this.handleCircle();
	    },
	    computed:{
		...Vuex.mapState({
	            nongren:state=>state.home.nongren.farmerDynamicInfo
	        }),
	    },
	    methods: {
	        ...Vuex.mapActions({
	            handleCircle:"home/handleCircle"
	        }),
	        handleToSellerDetails(id){
	        	this.$router.push({
	        		name:"stores",
	        		query:{id:id}
	        	})
	        }
	    },
	    updated(){
	    	if(!this.swiper){
	    		this.swiper = new Swiper(this.$refs.swiperWrapper)
	    	}
	    }
	}
</script>

<style>
	.swiper-container{
		width:100%;
	}
	.swiper-wrapper{
		width:100%
	}
	.swiper-slide{
		width:100%
	}
    .circle{
    	width:100%;
    	border-top:.2rem solid #f5f5f5;
    }
    .circle-head{
		background: #fafafa;
		height:1rem;
		position: relative;
    	border-top: 0.01rem solid #9F9F9F;
		border-bottom:0.01rem solid #9F9F9F;
    }
    .circle-head>h2{
    	font-size: .31rem;
    	font-weight: 500;
    	text-align: center;
    	line-height: 1rem;
    }
    .circle-head>a{
    	width: 1.5rem;
    	text-align: center;
    	line-height: 1rem;
    	font-size: .27rem;
    	position: absolute;
    	top:0;
    	right:0;
    }
   .circle-peo{
    	height:1.2rem;
    }
    .circle-peo>img{
    	float: left;
    	width:.9rem;
    	margin-left: .2rem;
    	margin-top:.25rem;
    }
   .right{
    	margin-top:.28rem;
    	margin-left: .3rem;
    	float: left;
    	line-height: .4rem;
    }
    .circle-name{
    	font-size: .3rem;
    }
    .circle-time{
    	font-size: .25rem;
    	color:#666666;
    }
    .circle-font{
    	height:.8rem;
    	font-size: .3rem;
    	line-height: .8rem;
    	margin-left:.2rem;
    	overflow: hidden;
  		text-overflow: ellipsis;
  		display: -webkit-box;
  		-webkit-line-clamp: 1;
  		-webkit-box-orient: vertical;
    }
    .circle-img{
    	display: flex;
    	margin-left:.1rem;
    	margin-right:.1rem;
    	justify-content:space-around;
    }
    .pict{
    	width:30%;
    }
    .pict>img{
    	width:100%;
    }
    .circle-dian{
    	height:.7rem;
    }
</style>