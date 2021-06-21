<template>
	<div class="body">这是古艺术品中心
		<el-row>
			<!-- pc端 -->
			<el-col :xs="0" :sm="24">
				<div class="details">
					<div  v-for="(item,index) in add" :key="index">
						<div class="img"><img :src=item.img alt=""></div>
						<div class="title">{{item.detail}}</div>
					</div>
					
				</div>
				<div class="block">
					<!-- page-size每页数量，total总页数 -->
					<!-- <el-pagination
					@current-change="handleCurrentChange"
					:current-page.sync="currentPage3"
					:page-size="9"
					layout="prev, pager, next, jumper"
					:total="900">
					</el-pagination> -->
				</div>
			</el-col>
			<!-- 移动端 -->
			<el-col :xs="24" :sm="0">
				<div class="details1">
					<div>
						<div class="img1"><img src="../assets/mages/产品中心一.png" alt=""></div>
						<div class="title1">这里是方案中心分类的标题，可以加文字340112478</div>
					</div>
					<div>
						<div class="img1"><img src="../assets/mages/产品中心一.png" alt=""></div>
						<div class="title1">这里是方案中心分类的标题，可以加文字340112478</div>
					</div>
				</div>
			</el-col>
		</el-row>
		
			<!-- <el-row :gutter="20">
				<el-col :lg="8" :md="12" :xs="24">
					<div class="images">
						<div>
							<img class="img" src="../assets/mages/产品中心一.png" alt="">
						</div>
						<div ref="details">这里是方案中心分类的标题，可以加文字340112478</div>
					</div>
				</el-col>
				<el-col :lg="8" :md="12" :xs="24">
					<div class="images">
						<div>
							<img class="img" src="../assets/mages/产品中心二.png" alt="">
						</div>
						<div>这里是方案中心分类的标题，可以加文字340112478</div>
					</div>
				</el-col>
				<el-col :lg="8" :md="12" :xs="24">
					<div class="images">
						<div>
							<img class="img" src="../assets/mages/产品中心三.png" alt="">
						</div>
						<div>这里是方案中心分类的标题，可以加文字340112478</div>
					</div>
				</el-col>
				<el-col :lg="8" :md="12" :xs="24">
					<div class="images">
						<div>
							<img class="img" src="../assets/mages/产品中心一.png" alt="">
						</div>
						<div ref="details">这里是方案中心分类的标题，可以加文字340112478</div>
					</div>
				</el-col>
				<el-col :lg="8" :md="12" :xs="24">
					<div class="images">
						<div>
							<img class="img" src="../assets/mages/产品中心一.png" alt="">
						</div>
						<div>这里是方案中心分类的标题，可以加文字340112478</div>
					</div>
				</el-col>
				<el-col :lg="8" :md="12" :xs="24">
					<div class="images">
						<div>
							<img class="img" src="../assets/mages/产品中心一.png" alt="">
						</div>
						<div>这里是方案中心分类的标题，可以加文字340112478</div>
					</div>
				</el-col>
			</el-row> -->
	</div>
</template>
<script>
export default {
	data(){
		return{
			currentPage3:3,
			add:[{img:require('@/assets/mages/产品中心一.png'),title:'和田玉牌',detail:'一级白，质地缜密，细腻光洁，强光之下几乎不见结构。牌头雕刻大肚弥勒，笑口常开，化解天下难事，故起名为守护。'},{img:require('@/assets/mages/产品中心二.png'),title:'和田玉牌',detail:'一级白，质地缜密，细腻光洁，强光之下几乎不见结构。牌头雕刻大肚弥勒，笑口常开，化解天下难事，故起名为守护。'},{img:require('@/assets/mages/产品中心三.png'),title:'和田玉牌',detail:'一级白，质地缜密，细腻光洁，强光之下几乎不见结构。牌头雕刻大肚弥勒，笑口常开，化解天下难事，故起名为守护。'},{img:require('@/assets/mages/产品中心一.png'),title:'和田玉牌',detail:'一级白，质地缜密，细腻光洁，强光之下几乎不见结构。牌头雕刻大肚弥勒，笑口常开，化解天下难事，故起名为守护。'},{img:require('@/assets/mages/产品中心一.png'),title:'和田玉牌',detail:'一级白，质地缜密，细腻光洁，强光之下几乎不见结构。牌头雕刻大肚弥勒，笑口常开，化解天下难事，故起名为守护。'},{img:require('@/assets/mages/产品中心一.png'),title:'和田玉牌',detail:'一级白，质地缜密，细腻光洁，强光之下几乎不见结构。牌头雕刻大肚弥勒，笑口常开，化解天下难事，故起名为守护。'}],
		}
	},
	methods:{
		handleCurrentChange(){
			console.log('handleCurrentChange')
		}
	}
}
</script>
<style scoped>
	.body{
		background-image: url('../assets/图层 0_slices/game1.jpg');
	}
	.details1{
		width: 100%;
		overflow: hidden;
	}
	.details1>div{
		background-color: rgb(248,248,248);
		margin-bottom: 3rem;
		color: rgb(41,41,41);
		letter-spacing: 0.05rem;
		border-radius: 1rem;
		box-shadow: 0px 4px 10px #333;
	}
	.title1{
		padding: 1rem 2rem;
		box-sizing: border-box;
		font-weight: bold;
		font-size: 0.75rem;
	}
	.details1>div:active{
		background-color: #18bc9c;
		color: #fff;
	}
	.img1>img{
		width: 100%;
		height: 100%;
	}
	.img1{
		width: 100%;
		height: 22rem;
		max-width: 375px;
		margin: 0 auto;
		overflow: hidden;
		border-top-left-radius: 1rem;
		border-top-right-radius: 1rem;
	}
	.title{
		padding: 15px 15px 0 15px;
		box-sizing: border-box;
		height: 56px;
		overflow: hidden;
		display: -webkit-box;
		-webkit-box-orient: vertical;
    	-webkit-line-clamp: 2;
	}
	.img{
		width: 100%;
		height: 380px;
		overflow: hidden;
	}
	.details>div:hover img{
		transform: scale(1.1);
	}
	.details>div:hover{
		background-color: #18bc9c;
		color: #fff;
	}
	.img>img{
		transition: all 0.6s;
	}
	img{
		width: 100%;
		height: 100%;
	}
	.details>div{
		float: left;
		width: 31%;
		margin: 0 1.16%;
		overflow: hidden;
		background-color: rgb(248,248,248);
		color: rgb(51,51,51);
		font-size: 14px;
		font-weight: bold;
		margin-bottom: 50px;
		letter-spacing: 1px;
		border-radius: 10px;
		box-shadow: 0px 4px 10px #333;
		padding-bottom: 15px;
	}
	.details{
		width: 1200px;
		overflow: hidden;
		margin: 0 auto;
	}
	/* .el-col{
		margin-top: 3rem;
	}
	.block{
		width: 100%;
		overflow: auto;
		margin: 3rem 0;
		box-sizing: border-box;
	}
	.details{
		width: 70%;
		overflow: hidden;
		margin: 0 auto;
	}
	.images{
		position: relative;
		width: 100%;
		overflow: hidden;
		float: left;
		background-color: #f0f0f0;
		max-width: 31.25rem;
	}
	.images>:first-child{
		width: 100%;
		height: 20rem;
		overflow: hidden;
	}
	.images>:first-child>img{
		transition:all 0.6s;
		width: 100%;
		height: 100%;
	}
	.img:hover{
		transform: scale(1.1);
	}
	.images:hover{
		color: #fff;
		background-color: #18bc9c;
	}
	.images>:last-child{
		font-size: 0.75rem;
		overflow:hidden;
        text-overflow:ellipsis;
		height: 1rem;
		white-space:nowrap;
		padding: 1rem 0;
	} */
</style>
