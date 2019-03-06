<template>
	<div>
        <div class="list">
        	<div class="list-classify" v-for="(item,index) in list" @click="handleListTo(item.id)">
        		<img :src="item.icon_url?item.icon_url:item.picture"/>
        		<p>{{item.title}}</p>
        	</div>
       </div>
	</div>
</template>

<script>
import Vuex from "vuex";
	
	export default {
	  	created () {
        	this.handleList();
	    },
	    computed:{
		...Vuex.mapState({
	            list:state=>state.home.category_nav
	        }),
	    },
	    methods: {
	        ...Vuex.mapActions({
	            handleList:"home/handleList"
	        }),
	        handleListTo(id){
	        	this.$router.push({
	        		name:"stores",
	        		query:{id:id}
	        	})
	        }

	    }
	}
</script>

<style>
    .list{
    	height:3.4rem;
    	border-bottom: 0.01rem solid #9F9F9F;
    }
    .list>.list-classify{
    	height:1.7rem;
    	width:25%;
    	text-align: center;
    	float: left;
    }
    .list>.list-classify>img{
    	margin: .3rem auto 0 auto;
    	width:.7rem;
    }
    .list>.list-classify>p{
    	margin-top:.2rem;
    	font-size: .2rem;
    }

</style>