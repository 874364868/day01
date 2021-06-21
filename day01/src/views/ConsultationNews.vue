<template>
	<div class="body">
		这是咨询动态
		<el-row>
			<!-- pc端 -->
			<el-col :xs="0" :sm="24">
				<div class="consult" v-for="(item,index) in add" :key="index">
					<div class="time">
						<div>{{item.day}}</div>
						<div>{{item.year}}</div>
					</div>
					<div class="img">
						<img :src=item.src alt="">
					</div>
					<div class="details">
						<div>{{item.title}}</div>
						<div>{{item.detail}}</div>
						<div @click="pushs()">查看全文</div>
					</div>
				</div>
			</el-col>
			<!-- 移动端 -->
			<el-col :xs="24" :sm="0">
				<div class="consult1" v-for="(item,index) in add" :key="index">
					<div class="img1"><img :src=item.src></div>
					<div class="time1">
						<div>{{item.day}}</div>
						<div>{{item.year}}</div>
					</div>
					<div class="details1">
						<div>{{item.title}}</div>
						<div>{{item.detail}}</div>
						<div @click="pushs()">查看全文</div>
					</div>
				</div>
			</el-col>
		</el-row>
		
	</div>
</template>
<script>
export default {
	data(){
		return{
			add:[{day:'27',year:'2020-05',src:'http://news.zhuoyixuan.com/uploadfile/2021/0506/20210506095121693.jpg',title:'南阳第十七届玉雕文化节圆满落下帷幕',detail:'5月3日，南阳第十七届玉雕文化节在镇平县圆满落下帷幕。此次玉雕文化节主题是“赏精品美玉、游大美南阳、促产业提升”，由中国珠宝玉石首饰行业协会、南阳市人民政府主办，镇平县人民政府承办。'},{day:'28',year:'2020-06',src:'http://news.zhuoyixuan.com/uploadfile/2021/0506/20210506095121693.jpg',title:'南阳第十八届玉雕文化节圆满落下帷幕',detail:'5月3日，南阳第十八届玉雕文化节在镇平县圆满落下帷幕。此次玉雕文化节主题是“赏精品美玉、游大美南阳、促产业提升”，由中国珠宝玉石首饰行业协会、南阳市人民政府主办，镇平县人民政府承办。'},{day:'29',year:'2020-07',src:'http://news.zhuoyixuan.com/uploadfile/2021/0506/20210506095121693.jpg',title:'南阳第十9届玉雕文化节圆满落下帷幕',detail:'5月3日，南阳第十9届玉雕文化节在镇平县圆满落下帷幕。此次玉雕文化节主题是“赏精品美玉、游大美南阳、促产业提升”，由中国珠宝玉石首饰行业协会、南阳市人民政府主办，镇平县人民政府承办。'},{day:'27',year:'2020-05',src:'http://news.zhuoyixuan.com/uploadfile/2021/0506/20210506095121693.jpg',title:'南阳第十七届玉雕文化节圆满落下帷幕',detail:'5月3日，南阳第十七届玉雕文化节在镇平县圆满落下帷幕。此次玉雕文化节主题是“赏精品美玉、游大美南阳、促产业提升”，由中国珠宝玉石首饰行业协会、南阳市人民政府主办，镇平县人民政府承办。'},{day:'27',year:'2020-05',src:'http://news.zhuoyixuan.com/uploadfile/2021/0506/20210506095121693.jpg',title:'南阳第十七届玉雕文化节圆满落下帷幕',detail:'5月3日，南阳第十七届玉雕文化节在镇平县圆满落下帷幕。此次玉雕文化节主题是“赏精品美玉、游大美南阳、促产业提升”，由中国珠宝玉石首饰行业协会、南阳市人民政府主办，镇平县人民政府承办。'},{day:'27',year:'2020-05',src:'http://news.zhuoyixuan.com/uploadfile/2021/0506/20210506095121693.jpg',title:'南阳第十七届玉雕文化节圆满落下帷幕',detail:'5月3日，南阳第十七届玉雕文化节在镇平县圆满落下帷幕。此次玉雕文化节主题是“赏精品美玉、游大美南阳、促产业提升”，由中国珠宝玉石首饰行业协会、南阳市人民政府主办，镇平县人民政府承办。'}]
		}
	},
	methods:{
		pushs(){
			this.$router.push('/about')
		}
	}
}
</script>
<style scoped>
	.body{
		background-image: url('../assets/图层 0_slices/game1.jpg');
	}
	/* 移动端 */
	.details1>:first-child{
		font-size: 1rem;
		font-weight: bold;
	}
	.details1>:nth-child(2){
		height: 3.5rem;
		font-size: 0.5rem;
		padding: 0.5rem 0;
		overflow: hidden;
		display: -webkit-box;
		-webkit-box-orient: vertical;
    	-webkit-line-clamp: 4;
	}
	.details1>:last-child{
		width: 6rem;
		height: 1.5rem;
		margin-top: 1rem;
		text-align: center;
		line-height: 1.5rem;
		font-size: 0.5rem;
		letter-spacing: 0.25rem;
		font-weight: bold;
		border: 0.05rem solid #18bc9c;
		color: #18bc9c;
		margin-left: 1rem;
	}
	.details1>:last-child:active{
		background-color: #18bc9c;
		color: #fff;
	}
	.details1{
		width: 60%;
		height: 9rem;
		margin-top: 1rem;
		text-align: left;
		padding-left: 2%;
		padding-top: 1%;
		box-sizing: border-box;
	}
	.time1>:first-child{
		height: 2rem;
		line-height: 2rem;
		font-size: 1.5rem;
		font-weight: bold;
	}
	.time1>:last-child{
		height: 1.5rem;
		line-height: 1.5rem;
	}
	.time1{
		width: 40%;
		height: 9rem;
		box-sizing: border-box;
		border-right: 0.05rem solid #999;
		padding: 2.75rem 0;
		margin-top: 1rem;
		overflow: hidden;
	}
	.img1{
		width: 100%;
		height: 10rem;
	}
	.img1>img{
		width: 100%;
		height: 100%;
		max-width: 220px;
		border-radius: 10px;
		box-shadow: 0px 4px 10px #333;
	}
	.consult1>div{
		float: left;
	}
	.consult1{
		width: 80%;
		overflow: hidden;
		color: #666;
		font-size: 1rem;
		margin: 0 auto;
		border-bottom: 0.05rem solid #333;
		padding-bottom: 2rem;
		margin-bottom: 3rem;
		box-sizing: border-box;
	}
	/* pc端样式 */
	.details>:last-child:hover{
		background-color: #18bc9c;
		color: #fff;
	}
	.details>:last-child{
		border: 1px solid #18bc9c;
		width: 80px;
		height: 30px;
		text-align: center;
		color: #18bc9c;
		line-height: 30px;
		margin-top: 10px;
	}
	.details>:first-child{
		font-weight: bold;
		color: #000;
	}
	.details>:nth-child(2){
		font-size: 14px;
		padding: 10px 0;
	}
	.details{
		width: 820px;
		height: 150px;
		text-align: left;
		padding:20px 0px 0px 20px ;
		box-sizing: border-box;
		color:#666;
	}
	.img>img{
		width: 100%;
		height: 100%;
		transition:all 0.6s;
	}
	.img>img:hover{
		transform: scale(1.1);
	}
	.img{
		width: 220px;
		height: 130px;
		margin: 10px 0;
		overflow: hidden;
		border-radius: 10px;
		box-shadow: 0px 4px 10px #333;
	}
	.time{
		width: 150px;
		height: 150px;
		color: #666;
	}
	.time>:first-child{
		height: 30px;
		margin-top: 50px;
		line-height: 30px;
		font-size: 20px;
		font-weight: bold;
	}
	.time>:last-child{
		height: 20px;
		line-height: 20px;
		font-size: 12px;
	}
	.consult>div{
		float: left;
	}
	.consult{
		margin: 0 auto;
		width: 1200px;
		overflow: hidden;
		border-bottom: 1px solid #666666;
		padding: 20px 0;
	}
	
</style>