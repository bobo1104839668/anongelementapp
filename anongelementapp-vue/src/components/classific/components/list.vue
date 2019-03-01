<template>
	<div>
		<div id="classificList" v-for="(item,id) in classificList">
			<div class="list-header">
				<img :src="item.icon_url" />
				<p>{{item.title}}</p>
			</div>
			<div class="box">
				<div class="list-section">
				<a>全部</a>
				</div>
				<div class="list-section" v-for="(itemChildren,index) in item.children" v-if="index<6||activeIndex===id">
					
					<router-link to="/details">{{itemChildren.title}}</router-link>
				</div>
				<div class="list-section" @click="handleclick(id)" v-else-if="index==6" v-show="flag||activeIndex!==id">
					<a href="##" >下箭头</a>
				</div>
			</div>

		</div>
	</div>
</template>

<script>
	import Vuex from "vuex";
	export default {
		data(){
			return {
				flag:true,
				activeIndex:-1,
			}
		},
		created() {
			this.handleClassificData();
		},
		computed: {
			...Vuex.mapState({
				classificList: state => state.classific.classificList
			}),
		},
		methods: {
			...Vuex.mapActions({
				handleClassificData: "classific/handleClassificData"
			}),
			handleclick(index){
				this.flag=false;
				this.activeIndex=index
				console.log(index,this.activeIndex)
			},
			handlelist(){
				
			}
		}
	}
</script>

<style scoped>
	#classificList {
		width: 100%;
		background: #F8F8F8
	}
	
	.list-header {
		width: 100%;
		height: .8rem;
		display: flex;
	}
	
	.list-header>img {
		width: 0.45rem;
		height: 0.45rem;
		margin: .2rem;
	}
	
	.list-header>p {
		font-size: 0.35rem;
		line-height: .8rem;
	}
	
	.box {
		width: 100%;
		/*display:flex;*/
		/*justify-content: space-around;*/
		padding: 0 .2rem;
	}
	
	.box>.list-section {
		width: 25%;
		height: 0.7rem;
		background: #fff;
		/*display: flex;*/
		/*justify-content: center;*/
		float: left;
		border-right: 2px solid #F4F4F0;
		margin-top: .2rem;
		text-align: center;
	}
	
	.box>.list-section>a {
		font-size: 0.3rem;
		line-height: 0.7rem;
		color: #666;
	}
</style>