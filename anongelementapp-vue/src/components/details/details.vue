<template>
	<div id="details">
		<div class="wrapper detailsWrapper" ref="detailsWrapper">
			<Header/>
		</div>
	</div>
</template>

<script>
	import Vuex from "vuex";
	import BScroll from "better-scroll";
	import Header from "./components/header"
	export default {
		components: {
			"Header": Header,
		},
		created(){
			this.handleDetailsData();
		},
		computed:{
			...Vuex.mapState({
				state:state =>state.details
			})
		},
		watch:{
			state:{
				
				handler(){
			
						if(!this.scroll){
							this.scroll = new BScroll(this.$refs.detailsWrapper);
							console.log(this.scroll)
						}
				},
				deer:true
			}
		},
		methods:{
			...Vuex.mapActions({
				handleDetailsData:"details/handleDetailsData"
			})
		}
	}
</script>

<style scoped>
   .details,.detailsWrapper{
   	height:100%
   }
</style>