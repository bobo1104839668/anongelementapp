<template>
	<div class="circle_nongren">
		<mt-header class="circle_head" title="农人圈">
			<router-link to="/" slot="left">
				<mt-button icon="back"></mt-button>
			</router-link>
		</mt-header>
		<div class="wrapper" ref="circleWrapper">
			<div class="content">
				<div class="circle_name" v-for="(item,index) in two_nong">
					<div class="name_peo">
						<img :src="item.userAvatar"/>
						<span>{{item.userName}}</span>
						<div class="toStores" @click="handleToSellerDetails(item.shopId)">
							<span>进入店铺</span>
						</div>
					</div>
					<div class="name_font">
						<a href="##">{{item.content}}</a>
					</div>
					
					<div class="pic">
						<div v-for="(pict,id) in item.pictures">
							<img :src="pict.picture_thumbnail"/>
						</div>
					</div>
					<div class="sm_show">
						<img :src="item.product.firstPicture"/>
						<span>{{item.product.title}}</span>
						<div class="mai">去购买 <span>></span></div>
					</div>
					<div class="name_time">
						<span>{{item.timeDifference}}前</span>
						<div class="zan">
							<i class="iconfont">&#xe67e;</i>
							<span>{{item.isPraised}}</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import BScroll from 'better-scroll';
	import Vuex from "vuex";
	export default{
	  created () {
	        this.handleCircle_nong();
	    },
	    computed:{
		...Vuex.mapState({
	            two_nong:state=>state.home.two_nong,
	            state:state=>state.home
	        }),
	    },
	    watch:{
	    	state:{
	    		handler(newval){
	    			if(newval){
	    				if(!this.scroll){
	    					this.scroll = new BScroll(this.$refs.circleWrapper)
	    				}
	    			}
	    		},
	    		deep:true
	    	}
	    },
	    methods: {
	        ...Vuex.mapActions({
	            handleCircle_nong:"home/handleCircle_nong"
	        }),
	        handleToSellerDetails(id){
	        	this.$router.push({
	        		name:"stores",
	        		query:{id:id}
	        	})
	        }

	    },
	}
</script>

<style scoped>
.wrapper{
	height:100%;
	margin-top:.89rem;
}
.circle_nongren{
	height:100%
}
.circle_head{
	width:100%;
	height:.89rem;
	background: #eb4339;
	font-size: .32rem;
	position: fixed;
	top:0;
	left:0;
	z-index: 5;
}
.circle_name{
	border-bottom: .2rem solid #e5e5e5;
}
.circle_name>.name_peo{
	height:1.4rem;
	display: flex;
	align-items: center;
}
.circle_name>.name_peo>img{
	width:.88rem;
	height:.88rem;
	margin-left: .2rem;
	display: inline-block;
	border-radius: 1rem;
}
.circle_name>.name_peo>span{
	font-size: .28rem;
	color:#555;
	width:3rem;
	margin-left:.3rem
	
}
.toStores{
	width:1.6rem;
	height:.6rem;
	border:1px solid #999;
	border-radius: .1rem;
	font-size: .28rem;
	color:#999;
	text-align: center;
	line-height: .6rem;
	margin-left:1.3rem;
}
.sm_show{
	height:1rem;
	background: #f5f5f5;
	display: flex;
	align-items: center;
	margin: .15rem;
}
.sm_show>img{
	width:.8rem;
	margin-left:.15rem;
}
.sm_show>span{
	font-size: .28rem;
	margin-left: .1rem;
	width:4.5rem;
	overflow: hidden;
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-line-clamp: 1;
	-webkit-box-orient: vertical;

}
.sm_show>.mai{
	font-size: .3rem;
	margin-left: .25rem;
}
.sm_show>.mai>span{
	font-size: .34rem;
}
.circle_name>.name_font{
	padding:0 .2rem;
}
.circle_name>.name_font>a{
	font-size: .28rem;
	line-height: .36rem;
}
.circle_name>.pic{
overflow: auto;
width:100%;
margin-left:.1rem;
}
.circle_name>.pic>div>img{
	width:100%;
}
.circle_name>.pic>div{
	float: left;
	width:30.5%;
	margin-left:.1rem;
	margin-top:.1rem;
}
.name_time{
	height:1.2rem;
	line-height: 1.2rem;
	font-size: .26rem;
	color:#999;
}
.name_time>span{
	float: left;
	margin-left:.2rem;
}
.name_time>.zan{
	float: right;
	margin-right:.3rem;
}
.iconfont{
	font-size: .34rem;
}
</style>