<template>
	<div class="body">
		<el-row>
			<el-col :xs="0" :sm="24">
				<!-- <div class="btn">
					<button>全部</button>
					<button class="selects">
						<el-dropdown @command="handleCommand">
							<span class="el-dropdown-link">
								下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
							</span>
							<el-dropdown-menu slot="dropdown">
								<el-dropdown-item v-for="(item,index) in selects" :key="index" :command=item.selects :style="{color:item.color}">{{item.selects}}</el-dropdown-item>
							</el-dropdown-menu>
						</el-dropdown>
					</button>
					<button>智能手表</button>
					<button>智能人体秤</button>
				</div> -->
				<div class="product">
					<div v-for="(item,index) in add" :key="index">
						<div class="img">
							<img :src=item.img alt="">
						</div>
						<div class="title">
							{{item.title}}
						</div>
						<div class="details">
							{{item.detail}}
						</div>
						<div class="details-btn" @click="push">产品详情</div>
					</div>
				</div>
			</el-col>
		</el-row>
		<!--  -->
		<el-row>
			<el-col :xs="24" :sm="0">
				<!-- <div class="btn btn1">
					<button>全部</button>
					<button>智能手表</button>
					<button>智能人体秤</button>
				</div> -->
				<div class="product1">
					<div v-for="(item,index) in add" :key="index">
						<div class="img1">
							<img :src=item.img alt="">
						</div>
						<div class="title1">
							{{item.title}}
						</div>
						<div class="details1">
							{{item.detail}}
						</div>
						<div class="details-btn" @click="push">产品详情</div>
					</div>
				</div>
			</el-col>
		</el-row>
		<el-backtop :bottom="100">
					<div
					class="top"
					style="{
						height: 100%;
						width: 100%;
						background-color: #f2f5f6;
						box-shadow: 0 0 6px rgba(0,0,0, .12);
						text-align: center;
						line-height: 40px;
						color: #1989fa;
					}"
					>
					<div class="el-icon-top"></div>
					</div>
				</el-backtop>
		<!-- 产品 -->
		<!-- <div  class="product">
			<el-row :gutter="30">
				<el-col :xs="24" :sm="12" :md="8">
					<div class="img"><img src="../assets/mages/产品中心一.png" alt=""></div>
					<div class="title"><h3>这里是标题，可以加文字567603910</h3></div>
					<div class="details">这里是描述，可以加文字719155892</div>
					<el-button type="success" plain>产品详情<i class="el-icon-arrow-right el-icon--right"></i></el-button>
				</el-col>
				<el-col :xs="24" :sm="12" :md="8">
					<div class="img"><img src="../assets/mages/产品中心二.png" alt=""></div>
					<div class="title"><h3>这里是标题，可以加文字567603910</h3></div>
					<div class="details">这里是描述，可以加文字719155892</div>
					<el-button type="success" plain>产品详情<i class="el-icon-arrow-right el-icon--right"></i></el-button>
				</el-col>
				<el-col :xs="24" :sm="12" :md="8">
					<div class="img"><img src="../assets/mages/产品中心三.png" alt=""></div>
					<div class="title"><h3>这里是标题，可以加文字567603910</h3></div>
					<div class="details">这里是描述，可以加文字719155892</div>
					<el-button type="success" plain>产品详情<i class="el-icon-arrow-right el-icon--right"></i></el-button>
				</el-col>
				<el-col :xs="24" :sm="12" :md="8">
					<div class="img"><img src="../assets/mages/产品中心二 拷贝.png" alt=""></div>
					<div class="title"><h3>这里是标题，可以加文字567603910</h3></div>
					<div class="details">这里是描述，可以加文字719155892</div>
					<el-button type="success" plain>产品详情<i class="el-icon-arrow-right el-icon--right"></i></el-button>
				</el-col>
				<el-col :xs="24" :sm="12" :md="8">
					<div class="img"><img src="../assets/mages/产品中心二 拷贝 2.png" alt=""></div>
					<div class="title"><h3>这里是标题，可以加文字567603910</h3></div>
					<div class="details">这里是描述，可以加文字719155892</div>
					<el-button type="success" plain>产品详情<i class="el-icon-arrow-right el-icon--right"></i></el-button>
				</el-col>
				<el-col :xs="24" :sm="12" :md="8">
					<div class="img"><img src="../assets/mages/产品中心二 拷贝 3.png" alt=""></div>
					<div class="title"><h3>这里是标题，可以加文字567603910</h3></div>
					<div class="details">这里是描述，可以加文字719155892</div>
					<el-button type="success" plain>产品详情<i class="el-icon-arrow-right el-icon--right"></i></el-button>
				</el-col>				
			</el-row>
		</div>
		 -->
	</div>
</template>

<script>
import 'element-ui/lib/theme-chalk/display.css';
export default {
	data(){
		return{
			selects:[{color:'#333',selects:'全部'},{color:'#333',selects:'分类1'},{color:'#333',selects:'分类2'}],
			add:[{img:require('@/assets/mages/产品中心一.png'),title:'和田玉牌',detail:'一级白，质地缜密，细腻光洁，强光之下几乎不见结构。牌头雕刻大肚弥勒，笑口常开，化解天下难事，故起名为守护。'},{img:require('@/assets/mages/产品中心二.png'),title:'和田玉牌',detail:'一级白，质地缜密，细腻光洁，强光之下几乎不见结构。牌头雕刻大肚弥勒，笑口常开，化解天下难事，故起名为守护。'},{img:require('@/assets/mages/产品中心三.png'),title:'和田玉牌',detail:'一级白，质地缜密，细腻光洁，强光之下几乎不见结构。牌头雕刻大肚弥勒，笑口常开，化解天下难事，故起名为守护。'},{img:require('@/assets/mages/产品中心一.png'),title:'和田玉牌',detail:'一级白，质地缜密，细腻光洁，强光之下几乎不见结构。牌头雕刻大肚弥勒，笑口常开，化解天下难事，故起名为守护。'},{img:require('@/assets/mages/产品中心一.png'),title:'和田玉牌',detail:'一级白，质地缜密，细腻光洁，强光之下几乎不见结构。牌头雕刻大肚弥勒，笑口常开，化解天下难事，故起名为守护。'},{img:require('@/assets/mages/产品中心一.png'),title:'和田玉牌',detail:'一级白，质地缜密，细腻光洁，强光之下几乎不见结构。牌头雕刻大肚弥勒，笑口常开，化解天下难事，故起名为守护。'}]
		}
	},
	mounted(){
		// this.axios.get('/exhibitionList/?type=0').then(item=>{
		// 	console.log(item)
		// })
		this.axios.get('/news_list/1/').then(item=>{
			this.adds=item.data.results[0].content
		})
	},
	methods:{
		// handleCommand(command){
		// 	this.selects.forEach(item=>{
		// 		item.color="#333"
		// 		if(item.selects==command){
		// 			item.color='#18bc9c'
		// 		}
		// 	})
		// },
		push(){
			this.$router.push('/Product')
		}
	}
}
</script>
<style scoped>
	.el-icon-top{
		font-weight: bold;
	}
	.el-backtop{
		width: 50px;
		height: 50px;
	}
	.top:hover{
		background-color: #18bc9c !important;
		color: #fff !important;
		box-shadow: 0 0 10px #333 !important;
	}
	.top{
		border-radius: 50%;
		height: 100%;
		width: 100%;
		box-shadow: 0 0 10px #18bc9c !important;
		text-align: center;
		line-height: 50px !important;
		color: #18bc9c !important;
		border: 1px solid #18bc9c;
	}
	.body{
		background-image: url('../assets/图层 0_slices/game1.jpg');
	}
	img{
		width: 100%;
		height: 100%;
	}
	/* div{
		box-sizing: border-box;
		border: 1px solid red;
	} */
	.details-btn1{
		width: 7rem;
		border: 0.05rem solid #18bc9c;
		padding: 0.5rem 0;
		letter-spacing: 0.05rem;
		color: #18bc9c;
		font-weight: bold;
		margin: 0 auto;
		margin-top: 2rem;
	}
	.details1{
		padding-top: 1rem;
		color: #999;
		font-size: 1rem;
		display: -webkit-box;
		-webkit-box-orient: vertical;
    	-webkit-line-clamp: 3;
		padding: 0.5rem 1rem;
		text-align: left;
		height: 3.5rem;
		overflow: hidden;
	}
	.title1{
		width: 90%;
		margin: 0 auto;
		font-size: 1.5rem;
		padding: 5% 0;
		border-bottom: 0.05rem solid #18bc9c;
		box-sizing: border-box;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		height: 4rem;
	}
	.product1{
		width: 100%;
		overflow: hidden;
		margin-top: 3rem;
	}
	.product1>div{
		margin-bottom: 3rem;
		background-color: rgb(248,248,248);
		box-shadow: 0px 4px 10px #333;
		border-radius: 1rem;
		padding-bottom: 2rem;
	}
	.img1{
		width: 100%;
		height: 20rem;
		max-width: 375px;
		margin: 0 auto;
		border-top-left-radius: 1rem;
		border-top-right-radius: 1rem;
		overflow: hidden;
	}
	.details-btn:hover{
		background-color: #18bc9c;
		color: #fff;
	}
	.details-btn{
		width: 120px;
		padding: 10px 0;
		font-weight: bold;
		letter-spacing: 2px;
		border: 1px solid #18bc9c;
		color: #18bc9c;
		margin: 0 auto;
		margin-top: 20px;
		box-shadow: 3px 3px 6px #333;
		border-radius: 5px;
	}
	.details{
		width: 100%;
		padding: 10px 10px 0px 10px;
		color: #999;
		text-align: left;
		height: 77px;
		overflow: hidden;
		box-sizing: border-box;
		display: -webkit-box;
		-webkit-box-orient: vertical;
    	-webkit-line-clamp: 3;

	}
	.title{
		font-size: 20px;
		font-weight: bold;
		padding: 10px 20px 10px 20px;
		border-bottom: 1px solid #18bc9c;
		height: 30px;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	.img{
		width: 100%;
		height: 350px;
		overflow: hidden;
	}
	.img>img{
		width: 100%;
		height: 100%;
		transition:all 0.6s;
	}
	.img>img:hover{
		transform: scale(1.1);
	}
	.product>div{
		float: left;
		overflow: hidden;
		width: 31%;
		padding-bottom: 20px;
		border-radius: 10px;
		margin:30px 1.16%;
		background-color: rgb(248,248,248);
		box-shadow: 0px 4px 10px #333;
	}
	.product{
		width: 1200px;
		overflow: hidden;
		margin: 0 auto;
		margin-top: 100px;
	}
	/* .product{
		width: 80%;
		margin: 0 auto;
		overflow: hidden;
	}
	.el-button--success{
		color: #18bc9c;
		background: #fff;
		border-color: #18bc9c;
		margin-top: 2rem;
	}
	.el-button--success:hover{
		background-color: #18bc9c;
	}
	.details{
		padding:3% 3%;
		font-size: 0.5rem;
	}
	.title{
		padding: 4% 2%;
		border-bottom: 0.05rem solid #18bc9c;
	}
	.img{
		width: 100%;
	}
	.img>img{
		width: 100%;
		transition:all 0.6s;
	}
	.img>img:hover{
		transform:scale(1.025) ;
	}
	.el-col {
		padding-left: 0px !important;
		padding-right: 0px !important;
		padding: 5% 1% !important;
		padding-bottom: 0;
	}
	.selects:hover>.el-dropdown,.selects:focus>.el-dropdown,.selects:active>.el-dropdown{
		color: #18bc9c;
	}
	.el-dropdown{
		width: 100%;
		height: 100%;
		font-size: 0.5rem;
		letter-spacing:0.2rem;
		color: #333;
	} */
	.btn>button:hover,.btn>button:focus,.btn>button:active{
		color: #18bc9c;
		border-color: #18bc9c;
		box-shadow: -0.4rem 0.25rem 0 #18bc9c;
	}
	.btn>button{
		height: 2rem;
		line-height: 2rem;
		border: 0.05rem solid #333;
		box-sizing: border-box;
		float: left;
		box-shadow: -0.4rem 0.25rem 0 #333;
		background-color: #fff;
	}
	.btn>:not(:first-child){
		margin-left: 1rem;
	}
	.btn>:first-child{
		width: 3rem;
	}
	.btn>:nth-child(2){
		width: 7rem;
	}
	.btn>:nth-child(3){
		width: 5rem;
	}
	.btn>:nth-child(4){
		width: 6rem;
	}
	.btn{
		width: 24rem;
		height: 2rem;
		margin: 0 auto;
		font-size: 0.5rem;
		letter-spacing:0.2rem;
	}
	.btn1{
		width: 17rem;
		height: 2rem;
		margin: 0 auto;
		font-size: 0.5rem;
		letter-spacing:0.2rem;
	}
</style>
