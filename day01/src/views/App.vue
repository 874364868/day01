<template>
	<div class="body">这是app
		<!-- 中间按钮 -->
		<!-- <div class="btns">
			<button class="btn lt">APP下载</button>
		</div> -->
		<div class="details">
			<div class="title">APP下载</div>
			<p>APP下载APP下载123132</p>
		</div>
		<div>底部</div>
	</div>
</template>
<script>
export default {
	data(){
		return{
			
		}
	}
}
</script>

<style scoped>
	.body{
		background-image: url('../assets/图层 0_slices/game1.jpg');
	}
	.btn:hover,.btn:active,.btn:focus{
		color: #18bc9c;
		border-color: #18bc9c;
		box-shadow: -0.4rem 0.25rem 0 #18bc9c;
	}
	.details{
		width: 80%;
		margin: 1rem auto;
		margin-bottom: 0rem;
		text-align: left;
		color: #2a333c;
		font-size: 1rem;
		box-shadow: rgb(0,0,0) 0px 4px 4px;
		margin-top: 3rem;
		padding: 3% 2%;
		box-sizing: border-box;
		border-radius: 0.5rem;
		margin-bottom: 30px;
	}
	.title{
		text-align: center;
		font-size: 1.25rem;
		font-weight: bold;
		width: 100%;
		margin-bottom: 2rem;
	}
	.lt{
		left: 0.4rem;
		box-shadow: -0.4rem 0.25rem 0 #333;
	}
	.btns{
		width: 5.5rem;
		height: 3rem;
		margin: 0 auto;
		position: relative;
		color: #333;
		font-size: 0.5rem;
		letter-spacing:0.2rem;
	}
	.btn{
		width: 5rem;
		height: 2rem;
		background-color: #fff;
		border: 0.05rem solid #333;
		position: absolute;
		text-align: center;
		line-height: 2rem;
	}
</style>