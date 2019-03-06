<template>
		<div class="search" >
			<mt-header class="search_nav">
				<router-link to="/" slot="left">
					<mt-button icon="back"></mt-button>
				</router-link>
				<mt-button slot="right" class="search_font">搜索</mt-button>
			</mt-header>
			<input type="text" placeholder="小米" class="search_ipt"/>
			<div class="hot_sou" >
				<h2>热门搜索</h2>
				<div class="hot_key" v-for="(item,index) in search">
					<div>{{item}}</div>
				</div>
			</div>
		</div>
</template>

<script>
	import Vuex from "vuex";
	export default{
	  created () {
	        this.handleSearch();
	    },
	    computed:{
		...Vuex.mapState({
	            search:state=>state.home.search
	        }),
	    },
	    methods: {
	        ...Vuex.mapActions({
	            handleSearch:"home/handleSearch"
	        })
	    },
	}
</script>

<style scoped>
.search{
	height:100%;
	background: #F4F4F0;
	overflow: auto;
}
.search_nav{
	height:.89rem;
	background: #eb4339;
}
.search_font{
	font-size: .3rem;
	width:.6rem;
}
.search_ipt{
	background: #F4F4F0;
	border-radius: .1rem;
	font-size: .28rem;
	text-indent: .6rem;
	width:6rem;
	height:.7rem;
	position: absolute;
	top:0.08rem;
	left:.7rem;
}
.hot_sou>h2{
	font-size: .28rem;
	font-weight: 500;
	color:#999999;
	line-height: .8rem;
	padding-left: .2rem;
}
.hot_sou>.hot_key{
	width:1.1rem;
	height:.7rem;
	line-height: .7rem;
	text-align: center;
	margin-left: .2rem;
	background: #fff;
	border-radius: .1rem;
	float: left;
	font-size: .3rem;
	
}
</style>