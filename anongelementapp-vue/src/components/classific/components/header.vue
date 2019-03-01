<template>
	<div id="header">
		<div>
			<i class="iconfont">&#xe60b;</i>
			<span>小米</span>
		</div>
	</div>
</template>

<script>
	export default{
		
	}
</script>

<style>
	#header{
		width:100%;
		height:1rem;
		background:#EB4339;
		display:flex;
		justify-content:center;
		align-items:center;
		/*position:fixed;
		left:0;
		top:0;*/
	}
	#header>div{
		background:#f2f2f2;
		width:7.1rem;
		height:.7rem;
		display:flex;
		align-items:center;
		color:#999;
		border-radius:.08rem;
		justify-content: center;
		font-size:.35rem;
	}
	#header>div>i{
          padding: 0 .16rem 0 .24rem;
          font-size: .4rem;
         
        
      }
</style>