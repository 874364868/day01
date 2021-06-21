<template>
	<div class="body">这是联系我们
		<!-- 中间按钮 -->
		<!-- <div class="btns">
			<button class="btn lt">售后咨询</button>
			<button class="btn rt">联系我们</button>
		</div> -->
		<!-- <div class="details">
			<div class="title">售后咨询</div>
			<p>售后咨询售后咨询3123213</p>
		</div> -->
		<div>
			<img class="img" src="../assets/图层 0_slices/lxwm.webp" alt="">
		</div>
		<div>dibu</div>
	</div>
</template>
<script>
export default {
	data(){
		return{
			
		}
	},
	methods:{

	}
}
</script>

<style scoped>
	.body{
		background-image: url('../assets/图层 0_slices/game1.jpg');
	}
	.img{
		max-width: 100%;
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

	.btns>button:hover,.btns>button:active,.btns>button:focus{
		color: #18bc9c;
		border-color: #18bc9c;
		box-shadow: -0.4rem 0.25rem 0 #18bc9c;
	}
	.rt{
		right: 0rem;
		box-shadow: -0.4rem 0.25rem 0 #333;
	}
	.btns{
		width: 12rem;
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