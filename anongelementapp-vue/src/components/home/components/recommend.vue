<template>
	<div>
       	<div class="recommend">
    		<div class="circle-head">
       			<h2>阿农推荐</h2>
       			<a href="#">查看更多</a>
       		</div>
       		<div class="recommend-message" v-for="(item,index) in goods">
       			<div class="big-pic">
       				<img :src="item.picture"/>
       				<span>限时促销</span>
       			</div>
       			<div class="recommend-down">
       				<div class="message1">
       					<img :src="item.seller_avatar"/>
       					<div class="">{{item.seller_name}}</div>
       					<span class="">销量:{{item.sales}}</span>
       				</div>
       				<div class="message2">{{item.title}}</div>
       				<div class="message3">
       					<span class="jiage">￥{{item.price}}</span>
       					
       					<div class="smallpic" v-for="(smpic,id) in item.tagPaths">
       						<img :src="smpic" />
       					</div>

       				</div>
       				<div class="message4">
       					<div>
       						<img src="../../../assets/xingxing.jpg"/>
       						<span>{{item.review.rating}}</span>
       					</div>
       					<div class="dizhi">
       						{{item.origin}}
       					</div>
       				</div>
       			</div>
       		</div>
       </div>
	</div>
</template>

<script>
	import Vuex from "vuex";
	export default{
	  created () {
	        this.handleRecommend();
	    },
	    computed:{
		...Vuex.mapState({
	            goods:state=>state.home.goods.products
	        }),
	    },
	    methods: {
	        ...Vuex.mapActions({
	            handleRecommend:"home/handleRecommend"
	        })
	    },
	}
</script>

<style scoped>
    .recommend{
    	width:100%;
    	border-top:.2rem solid #f5f5f5;
    	margin-bottom:1rem;
    }
    .recommend>.circle-head{
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
	.recommend-message{
		width:46%;
		float: left;
		margin-top:.2rem;
		margin-left:.2rem;
	}
	.big-pic{
		position: relative;
	}
	.big-pic>img{
		width:3.4rem;
	}
	.big-pic>span{
		position: absolute;
		left:.1rem;
		top:.1rem;
		background: #eb4339;
		color:#fff;
		font-size: .27rem;
	}
	.recommend-down>.message1{
		background: #fafafa;
		position: relative;
		height:.8rem;
	}
	.recommend-down>.message1>img{
		width:.7rem;
		position: absolute;
		bottom:0;
		left:0;
	}
	.recommend-down>.message1>div{
		margin-left:.1rem;
		font-size: .26rem;
		position: absolute;
		left:.8rem;
		top:.3rem;
		color:#666
	}
	.recommend-down>.message1>span{
		margin-left:.5rem;
		font-size: .25rem;
		position: absolute;
		right:0;
		top:.3rem;
		color:#999;
	}
	.recommend-down>.message2{
		font-size: .26rem;
		margin-top:.1rem;
		line-height: .4rem;
		height:.4rem;
    	overflow: hidden;
  		text-overflow: ellipsis;
  		display: -webkit-box;
  		-webkit-line-clamp: 1;
  		-webkit-box-orient: vertical;
	}
	.dizhi{
		width:1.68rem;
		height:.3rem;
		line-height:.3rem;
		text-align: end;
    	overflow: hidden;
  		text-overflow: ellipsis;
  		display: -webkit-box;
  		-webkit-line-clamp: 1;
  		-webkit-box-orient: vertical;

	}
	.recommend-down>.message3>.jiage{
		font-size: .35rem;
		color:#EB4339;
	}
	.message3{
		margin-top:.1rem;
		display: flex;
	}
	.message3 .smallpic{
		left:1.4rem;
	}
	.message3 .smallpic img{
		width:.4rem;
		float: left;
		margin-left:.1rem;
	}
	.message4{
		display: flex;
		justify-content: space-between;
		margin-top:.1rem;
	}
	.message4 span{
		color:#fa0;
		float: left;
		font-size: .27rem;
		margin-top:-0.04rem;
		margin-left:0.05rem;
	}
	.message4 section{
		color:#999;
	}
	.message4 img{
		width:1.3rem;
		float: left;
		margin-bottom: .2rem;
	}
</style>