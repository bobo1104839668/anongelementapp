<template>
	<div>
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
</script>

<style>

</style>