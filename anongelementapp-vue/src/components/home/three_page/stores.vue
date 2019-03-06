<template>
	<div class="all">
		<mt-header :title="SellerDetails.shopName" class="stres_header">
			<router-link to="" slot="left">
				<mt-button icon="back" @click="handleBack()"></mt-button>
			</router-link>
			<mt-button slot="right">cart</mt-button>
		</mt-header>
		<div class="stores_center">
			<img src="../../../assets/backpic.jpg" class="background"/>
			
			<div class="stores_touxiang">
				<img :src="SellerDetails.sellerAvatar"/>
			</div>
			<div class="stores_font">
				<div class="stores_font_top">
					<span class="one">{{SellerDetails.sellerName}}</span>
					<span class="two">联系农人 |</span>
					<span class="three"><i class="iconfont">&#xe613;</i>收藏</span>
				</div>
				<div class="stores_font_bottom">
					<img src="../../../assets/xingxing.jpg"/>
					<span>{{score}}</span>
				</div>
			</div>
		</div>
		<div class="stores_jieshao">
			<div class="">{{SellerDetails.shopDesc}}</div>
			<div class="btn">展开</div>
		</div>
		<mt-navbar v-model="selected" class="xuanxiang">
			<mt-tab-item id="1">商品</mt-tab-item>
			<mt-tab-item id="2">店铺动态</mt-tab-item>
			<mt-tab-item id="3">店铺评分</mt-tab-item>
		</mt-navbar>
		<!-- tab-container -->
		<mt-tab-container v-model="selected">
			<mt-tab-container-item id="1">
				<div class="article" v-for="(item,index) in article1">
					<div class="article_pic">
						<img :src="item.picture"/>
					</div>
					<div class="article_introduce">
						<p class="title">{{item.title}}</p>
						<p class="place">{{item.origin}}</p>
						<div class="article_bottom">
							<div class="article_price">
								<span class="price"><span>￥</span>{{item.price}}</span>
								<span class="weight">/{{item.unit}}</span>
							</div>
							<div class="article_pingjia">
								<img src="../../../assets/xingxing.jpg"/>
								<span class="pingfen">{{item.review.rating}}</span>
								<span class="print">已售：{{item.sales}}</span>
							</div>
						</div>
					</div>
				</div>
			</mt-tab-container-item>
			<mt-tab-container-item id="2">
				<div v-for="(text,prce) in dongtai1">
					<div class="name_font">
						<a href="##">{{text.content}}</a>
					</div>
					<div class="pic">
						<div   v-for="(pic) in text.pictures">
							<img :src="pic.picture"/>
						</div>
					</div>
					<div class="name_time">
						<span>{{text.timeDifference}}前</span>
						<div class="zan">
							<i class="iconfont">&#xe67e;</i>
							<span>{{text.isPraised}}</span>
						</div>
					</div>

				</div>
			</mt-tab-container-item>
			<mt-tab-container-item id="3">
				<div>改商家没有评分</div>
			</mt-tab-container-item>
		</mt-tab-container>
	</div>
</template>

<script>
	import Vuex from "vuex";
	import {SellerDetailsData} from "@/apis/home";
	import {StoresArticle} from "@/apis/home";
	import {DianPuDongTai} from "@/apis/home";
	import { Navbar, TabItem } from 'mint-ui';
	export default {
		data() {
			return {
				selected: "",
				SellerDetails:{},
				score:"",
				selected:"2",
				article1:[],
				dongtai1:[],
			}
		},
		async created(){
			let {
				id
			}=this.$route.query;
			let data = await SellerDetailsData(id);
			let article = await StoresArticle(id);
			let dongtai = await DianPuDongTai(id);
			this.dongtai1 = dongtai.farmerDynamics.farmerDynamics
			this.article1 = article.products
//			console.log(this.dongtai1)
			this.SellerDetails = data
			this.score = data.review.rating
		},
		methods:{
			handleBack(){
				this.$router.go(-1)
			}
		},
	}
</script>

<style scoped>
	.stres_header {
		width:100%;
		height: .9rem;
		background: #eb4339;
		font-size: .32rem;
		position: fixed;
		left:0;
		top:0;
		z-index: 111;
	}
	.stores_center{
		position: relative;
		height:3rem;
		padding-top:.9rem;
		width:100%;
	}
	.background{
		position:absolute;
		z-index: -2;
	}
	.stores_touxiang{
		float: left;
		width:1.6rem;
		margin-top:.75rem;
		margin-left:.3rem
	}
	.stores_touxiang>img{
		width:1.3rem;
	}
	.stores_font{
		float: left;
		margin-top: .9rem;
	}
	.stores_font>.stores_font_top>span{
		color:#fff;
		font-size: .31rem;
		display: inline-block;
	}
	.stores_font>.stores_font_top>.one{
		width:2.5rem;
	}
	.stores_font>.stores_font_top>.three{
		background: #EB4339;
		width:1.2rem;
		text-align: center;
		border-radius: 0.06rem;
		height:.4rem;
		line-height: .4rem;
	}
	.iconfont{
		font-size: .31rem;
	}
	.stores_font_bottom{
		margin-top:.2rem;
	}
	.stores_font_bottom>img{
		display: inline-block;
		width:1.3rem;
		margin-top:.1rem;
	}
	.stores_jieshao{
		padding:0 .3rem;
		background: #f5f5f5;
	}
	.btn{
		color:#0033CC;
		margin-top:.2rem;
		padding-bottom:.3rem
	}
	.xuanxiang{
		line-height:.9rem;
		height:.9rem;
		border-bottom:0.01rem solid #999;
		border-top:0.01rem solid #999;
	}
	.article{
		height:3rem;
		border-bottom: 1px solid #999;
		display: flex;
		align-items: center;
	}
	.article_introduce{
		width:4.3rem;
		height:2.6rem;
		position: relative;
	}
	.article>.article_pic{
		width:2.6rem;
		margin-left: .2rem;
		margin-right:.2rem
	}
	.article>.article_pic>img{
		width:2.6rem;
	}
	.article_introduce>.title{
		font-size: .3rem;
		color:#333
	}
	.article_bottom{
		position: absolute;
		bottom: 0;
		left: 0;
	}
	.article_introduce>.place{
		font-size: .24rem;
		color:#999;
		margin-top: .15rem;
	}
	.article_price>.price{
		font-size: .4rem;
		color:#eb4339;
		font-weight: 600;
	}
	.article_price>.price>span{
		font-size: .3rem;
	}
	.article_price>.weight{
		font-size: .26rem;
		color:#999
	}
	.article_pingjia{
		width: 4.3rem;
	}
	.article_pingjia>img{
		float: left;
		width:1.3rem;
	}
	.article_pingjia>.pingfen{
		float: left;
		color:#EE9900;
	}
	.article_pingjia>.print{
		float: right;
	}
	.name_font{
		padding:0 .2rem;
		margin-top:.2rem;
	}
	.name_font>a{
		font-size: .28rem;
		line-height: .36rem;
	}
	.pic{
	overflow: auto;
	width:100%;
	margin-left:.1rem;
	}
	.pic>div>img{
		width:100%;
		height:2.3rem;
		
	}
	.pic>div{
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
