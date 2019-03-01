<template>
	<div class="product">
		<div class="swiper-container banner-container">
			<div class="swiper-wrapper">
				<div class="swiper-slide">
					<img src="http://img.anong.com/image/ProductPicture/picture/7EE7DE57381F26309B79841CA90B1C37/145856153495219752.jpg@!medium.jpg" />
				</div>
			</div>
			<!-- 如果需要分页器 -->
			<div class="swiper-pagination"></div>
		</div>
		<!--绿芯黑豆-->
		<div class="product-list">
			<p class="product-list-name">绿芯黑豆</p>
			<p class="product-list-address">来自黑龙江</p>
			<div class="priceBox">
				<p class="product-list-price">￥12.8
					<span class="product-list-weight">500g</span>
				</p>
			</div>
			<div class="saleBox">
				<div class="starBox">
					<img class="product-list-img" src="../../../assets/1.png">
					<span class="product-list-score">40</span>
					<span class="product-list-evaluate">56人评价</span>
				</div>
				<div class="product-sale">销量：502</div>
			</div>
		</div>
		<!--店铺电话-->
		<div class="product-message">
			<p>店铺首页10种优质杂粮，一次买个够！！</p>
			<p>满30元全国包邮除新疆 西藏 内蒙古</p>
			<P>个人微信号码18501043535</P>
		</div>
		<!--规格-->
		<div class="product-standard">
			<p class="standardBox">
			<span class="standard">规格</span>
			<span class="count">[阿农特惠价] 500g1件</span>
			</p>
			<p class="sendBox">
			<span class="send">送至</span>
			<span class="city">北京>北京市>海淀区</span>	
			</p>
			<p class="freightBox">
			<span class="freight">运费</span>
			<span class="freightPrice">5元 (满298元包邮)</span>	
			</p>
		</div>
	</div>
</template>

<script>
	import Swiper from "swiper";
	import "swiper/dist/css/swiper.min.css";
	import Vuex from "vuex";
	export default {

	}
</script>

<style scoped>
	
	.banner-container {
		width: 100%;
		height: 100%;
	}
	
	.banner-container img {
		width: 100%;
		height: 100%;
	}
	
	.product-list {
		width: 100%;
		height: 2.5rem;
		/*background: pink;*/
	    padding:0.3rem;
	   /* line-height:0.4rem;*/
	  border-bottom:2px solid #F5F5F5;
	}
	
	.product-list>.product-list-name {
		font-size: 0.4rem;
		margin-bottom:0.2rem;
	}
	
	.product-list>.product-list-address {
		font-size: 0.27rem;
		margin-bottom:0.1rem;
	}
	
	.product-list>.priceBox {
		display: flex;
		margin-bottom:0.1rem;
	}
	
	.product-list>.priceBox>.product-list-price {
		font-size: 0.45rem;
		color: red;
	}
	
	.product-list>.priceBox>.product-list-price>.product-list-weight {
		font-size: 0.28rem;
		color: #3f3f3f;
	}
	.product-list>.saleBox{
		display:flex;
		justify-content: space-between;
	}
	.product-list>.saleBox>.starBox {
		display: flex;
		
	}
	
	.product-list>.saleBox>.starBox>.product-list-img {
		width: 1.4rem;
		margin-right:0.1rem;
	}
	
	.product-list>.saleBox>.starBox>.product-list-score {
		font-size: 0.28rem;
		color: orange;
		margin-right:0.1rem;
	}
	
	.product-list>.saleBox>.starBox>.product-list-eval {
		font-size: 0.28rem;
		color: #3f3f3f;
	}
	.product-message{
		width:100%;
		height:1.8rem;
	/*	background:red;*/
		padding:0.2rem;
		border-bottom:10px solid #F5F5F5;
	}
	.product-message>p{
		font-size:0.28rem;
		line-height:0.42rem;
		
	}
	.product-standard{
		width:100%;
		height:3.5rem;
		border-bottom:10px solid red;
		background:pink;
		padding:0.2rem;
		/*line-height:0.54rem;*/
	}
	.product-standard>.standardBox>.standard{
		font-size:0.3rem;
		font-weight:900;
		color:#595959;
	}
	.product-standard>.standardBox>.count{
		font-size:0.3rem;
		color:#B4B4B4;
	}
</style>