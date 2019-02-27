<template>
    <div class="home">
    	<div class="fixed">
	        <div class="top">
	        	<h3>阿农·农人直供平台</h3>
	        	<a href="#"><i class="iconfont" >&#xe64d;</i></a>
	        </div>
	        <div class="red-bao">
	        	<img src="../../assets/hongbao.png"/>
	        </div>
        </div>
</template>

<script>
//import Vuex from "vuex";
export default {
//  created () {
//      this.handleList();
//  },
//  methods: {
//      ...Vuex.mapActions({
//          handleList:"home/handleList"
//      })
//  }
}
</script>

<style lang="">
    .top{
    	width:100%;
    	height:.85rem;
    	background: #eb4339;
    	position:fixed;
    	top:0;
    	z-index: 1111;
    }
    .fixed{
    	height:1.56rem;
    }
    .top>h3{
    	font-size: .35rem;
    	color:#fff;
    	font-weight: 300;
    	width: 3.5rem;
    	margin:0 auto;
    	text-align: center;
    	line-height: .85rem;
    }
    .top>a{
    	display: inline-block;
    	height:.85rem;
    	width:1rem;
    	position: absolute;
    	right:0;
    	top:0;
    	text-align: center;
    	line-height: .85rem;
    }
    .top>a>.iconfont{
    	font-size:.5rem;
    	color:#fff;
    }
    .red-bao>img{
    	width:100%;
    	position: fixed;
    	top:.85rem;
    	z-index: 1111;
    }
    .banner>img{
    	width:100%;
    }

</style>