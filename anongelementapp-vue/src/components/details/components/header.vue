<template>
	<div>
		<div id="header">
			<div class="back">
				<i class="iconfont">&#xe64d;</i>
			</div>
			<span>豆类</span>
			<div class="cart">
				<i class="iconfont">&#xe66e;</i>
			</div>
		</div>
		<div class="tabBar">
			<router-link to="/salesVolume">销量</router-link>
			<router-link to="/score">评分</router-link>
			<router-link to="/salesPrice">价格</router-link>
		</div>
		<router-link to="/productList">
			<div class="details-list" v-for="(item,index) in detailsList">
				<div class="details-img">
					<img class="details-product" :src="item.picture" />
				</div>
				<div class="details-message">
					<p class="details-names">{{item.title}}</p>
					<p class="details-address">{{item.origin}}</p>
					<div class="details-evaluate">
						<img class="star" src="../../../assets/1.png" />
						<span class="detailsEvaluate-score">4.0</span>
					</div>
					<p class="details-pay">({{item.month_purchase_times}}人付款)</p>
					<div class="details-introduce">
						<p class="details-price">￥{{item.unifyPrice}}<span class="details-weight">/{{item.unit}}</span></p>
						<div class="details-right">
							<p class="product-names">{{item.seller_name}}</p>
							<img class="product-img" :src="item.seller_avatar" />
						</div>
					</div>
				</div>
			</div>
		</router-link>
	</div>
</template>

<script>
	import Vuex from "vuex";
	export default {
		created() {
			this.handleDetailsData();
		},
		computed: {
			...Vuex.mapState({
				detailsList: state => state.details.detailsList.products
			}),

		},
		methods: {
			...Vuex.mapActions({
				handleDetailsData: "details/handleDetailsData"
			}),
		}
	}
</script>

<style scoped>
	#header {
		width: 100%;
		height: 0.98rem;
		background: #EB4339;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0.2rem;
		position: fixed;
		top: 0;
		left: 0;
	}
	
	#header>.back {
		width: 0.4rem;
	}
	
	#header>span {
		font-size: 0.38rem;
		color: #fff;
		font-weight: 900
	}
	
	#header>.cart {
		width: 0.4rem;
	}
	
	#header>.cart>.iconfont,
	#header>.back>.iconfont {
		font-size: 0.4rem;
		color: #fff;
	}
	
	.tabBar {
		width: 100%;
		height: 0.98rem;
		display: flex;
		border-bottom: 2px solid #ECECEC;
		align-items: center;
		justify-content: space-around;
		margin-top: 0.98rem;
	}
	
	.tabBar>a {
		font-size: 0.3rem;
		color: #A1A1A1;
	}
	
	.details-list {
		width: 100%;
		height: 100%;
		display: flex;
		/*margin-top:0.03rem;*/
		padding: 0.2rem;
		border-bottom: 2px solid #F8F8F8;
	}
	
	.details-list>.details-img {
		width: 30%;
		height: 100%;
	}
	
	.details-list>.details-img>.details-product {
		width: 2rem;
		height: 2rem;
	}
	
	.details-list>.details-message {
		width: 70%;
		height: 100%;
	}
	
	.details-list>.details-message>.details-names {
		font-size: 0.28rem;
		color: #585858;
		line-height: 0.6rem;
		/*margin-top:-0.1rem;
		/*margin-bottom:0.1rem;*/
		/*font-family: "arial black";*/
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 1;
		-webkit-box-orient: vertical;
		/*height:0.3rem;*/
	}
	
	.details-list>.details-message>.details-address {
		font-size: 0.26rem;
	}
	
	.details-list>.details-message>.details-evaluate {
		display: flex;
	}
	
	.details-list>.details-message>.details-evaluate>.star {
		width: 25%;
		height: 100%;
	}
	
	.details-list>.details-message>.details-evaluate>.detailsEvaluate-score {
		font-size: 0.28rem;
		color: #FFBE3C;
	}
	
	.details-list>.details-message>.details-pay {
		font-size: 0.28rem;
		color: #A4A4A4;
	}
	
	.details-list>.details-message>.details-introduce {
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: space-between;
	}
	
	.details-list>.details-message>.details-introduce>.details-price {
		font-size: 0.35rem;
		color: red;
		font-family: "微软雅黑";
	}
	
	.details-list>.details-message>.details-introduce>.details-price>.details-weight {
		color: #A4A4A4;
		font-size: 0.28rem;
	}
	
	.details-list>.details-message>.details-introduce>.details-right {
		display: flex;
		justify-content: center;
		margin-right: -0.3rem;
		margin-top: -0.1rem;
	}
	
	.details-list>.details-message>.details-introduce>.details-right>.product-names {
		font-size: 0.26rem;
		color: #A4A4A4;
		margin-top: 0.3rem;
		padding-right: 0.2rem;
	}
	
	.details-list>.details-message>.details-introduce>.details-right>.product-img {
		width: 30%;
		height: 100%;
	}
</style>