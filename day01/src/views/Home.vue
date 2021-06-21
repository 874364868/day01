<template background="" ><div>
	<el-container id="banner">
		<!-- 导航栏 -->
		<el-header>
			<el-row style="position: fixed;z-index: 99;background-color: #F8F8F8;width: 100%;" :gutter="10" :type="flex">
				<el-col :xs="1" :sm="6" :md="4" :lg="3" :xl="{span:1,offset:5}"><el-image :src="logo"></el-image></el-col>
				
				<el-col :xs="22" :sm="12" :md="16" :lg="18" :xl="{span:10,offset:0}">
					<el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect"
						v-show="show">
						<el-menu-item index="1" @click="jump('Home')">网站首页</el-menu-item>
						<el-menu-item index="2" @click="jump('CompanyProfile')">公司简介</el-menu-item>
						<el-menu-item index="3" @click="jump('ProductCenter')">产品中心</el-menu-item>
						<el-menu-item index="4" @click="jump('AncientArtCenter')">收藏家</el-menu-item>
						<el-menu-item index="5" @click="jump('ConsultationNews')">咨询动态</el-menu-item>
						<el-menu-item index="6" @click="jump('App')">App</el-menu-item>
						<el-menu-item index="7" @click="jump('ContactUs')">联系我们</el-menu-item>
					</el-menu>
				</el-col>				
				<el-col :xs="1" :sm="6" :md="4" :lg="3" :xl="{span:2,offset:6}">
					<el-button type="primary" icon="el-icon-search"
						style="margin-top: 10px;background-color: red; border-color: red;"></el-button>
				</el-col>
			</el-row>
		</el-header>

		<!-- 走马灯 -->
		<el-main>
			<el-carousel :interval="5000" arrow="always" :height="bannerHeight + 'px'">
				<el-carousel-item v-for="item in imgList" :key="item.id">
					<img :src="item.idView" class="lunboimg">
				</el-carousel-item>
			</el-carousel>
		</el-main>
		<el-main>
			<el-main>
				<div class="text">
					<div class="text_hp">
						<h1 style="color: red; font-family: '微软雅黑';"> 匠人匠心&nbsp;工艺至精</h1>
						<p style="color: #a0a0a0;">CRAFTSAMAN&nbsp;INGENUITY,CRAFTSMANSHIP&nbsp;TO&nbsp;PERFECTION</p>
					</div>
				</div>
				<div>
					<div class="img_chanpin">
						<el-main>
							<el-row>
								<el-col :span="8">
									<a href="#">
										<el-image :src="chanpin1"></el-image>
									</a>
								</el-col>
								<el-col :span="8">
									<a href="#">
										<el-image :src="chanpin2"></el-image>
									</a>
								</el-col>
								<el-col :span="8">
									<a href="#">
										<el-image :src="chanpin3"></el-image>
									</a>
								</el-col>
							</el-row>
						</el-main>

					</div>
				</div>
				<el-row class="text_01">
					<el-col class="text_hp_01">
						<h3 style=" font-family: '微软雅黑';">缅甸A货冰种翡翠</h3>
						<p style="color: #000000; margin-top: 50px;">
							高端品质，精雕细刻。&nbsp;工艺宝藏，满城辉煌。工艺诚品，纯工艺品。工艺无处不在，品质就在这里。鬼斧神工，独具匠心。鬼斧神工由我造，种种精品您满意。</p>
						<el-button plain style="font-size: 30px; margin-top: 50px;">查看更多</el-button>
					</el-col>
				</el-row>
			</el-main>
		</el-main>
		<el-main>
			<img src="../assets/Home/gugong1.png" style="margin-top: 50px;width: 100%;">
		</el-main>
		<el-main>
			<el-row class="text_01">
				<el-col class="text_hp_01">
					<h3 style="color: red; font-family: '微软雅黑';">收藏家藏品</h3>
					<p style="color: #a0a0a0; margin-top: 50px;">
						CRAFTSAMAN&nbsp;INGENUITY,CRAFTSMANSHIP&nbsp;TO&nbsp;PERFECTION</p>
				</el-col>
			</el-row>
		</el-main>
		<el-main>
			<el-main>
				<el-carousel :interval="4000" type="card" :height="bannerHeight + 'px'">
					<el-carousel-item v-for="card in imgCard" :key="card.id">
						<a href="#">
							<el-image :src="card.idCard"></el-image>
						</a>
					</el-carousel-item>
				</el-carousel>
			</el-main>
		</el-main>
		<el-main>
			<img src="../assets/Home/chengshi.png" style="margin-top: 50px;width: 100%;">
		</el-main>
		<el-main>
			<el-row class="text_01">
				<el-col class="text_hp_01">
					<h3 style="color: red; font-family: '微软雅黑';">新闻中心</h3>
					<p style="color: #a0a0a0; margin-top: 50px;">
						News&nbsp;Center</p>
				</el-col>
			</el-row>
		</el-main>
		<div>
			<div class="img_chanpin">
				<el-main>
					<el-row :gutter="20">
						<el-col :span="8">
							<a href="#">
								<el-image :src="xinwen1"></el-image>
							</a>
						</el-col>
						<el-col :span="8">
							<a href="#">
								<el-image :src="xinwen2"></el-image>
							</a>
						</el-col>
						<el-col :span="8">
							<a href="#">
								<el-image :src="xinwen3"></el-image>
							</a>
						</el-col>
					</el-row>
				</el-main>

			</div>
		</div>
		
		<!-- 底部栏目 -->
		<div>
			<el-row style="width: 60%; margin: 0 auto;">
				<el-col :span="6">
					<h4>
						<a href="#" title="公司简介" target="_blank"> <span style="font-size: 1.25rem;">公司简介</span></a>
					</h4>
					<ul class="ulstyle m-b-0 " id="list-7">
						<li><a class="son_a" href="/d-2-16" title="证书专利" target="_self"><span style="">证书专利</span></a>
						</li>
						<li><a class="son_a" href="/d-2-15" title="公司简介" target="_self"><span style="">公司简介</span></a>
						</li>
					</ul>
				</el-col>
				<el-col :span="6">
					<h4>
						<a href="/t-3" title="产品中心" target="_self"> <span style="font-size: 1.25rem;">产品中心</span></a>
					</h4>
					<ul class="ulstyle m-b-0 " id="list-7">
						<li><a class="son_a" href="/t-3-10" title="智能手环" target="_self"><span style="">智能手环</span></a>
						</li>
						<li><a class="son_a" href="/t-3-11" title="智能手表" target="_self"><span style="">智能手表</span></a>
						</li>
						<li><a class="son_a" href="/t-3-12" title="智能人体秤" target="_self"><span style="">智能人体秤</span></a>
						</li>
					</ul>
				</el-col>
				<el-col :span="6">
					<h4>
						<a href="/t2-4" title="方案中心" target="_self"> <span style="font-size: 1.25rem;">方案中心</span></a>
					</h4>
					<ul class="ulstyle m-b-0 " id="list-7">
					</ul>
				</el-col>
				<el-col :span="6">
					<h4>
						<a href="/l-5" title="资讯动态" target="_self"> <span style="font-size: 1.25rem;">资讯动态</span></a>
					</h4>
					<ul class="ulstyle m-b-0 " id="list-7">
						<li><a class="son_a" href="/l-5-8" title="公司新闻" target="_self"><span style="">公司新闻</span></a>
						</li>
						<li><a class="son_a" href="/l-5-9" title="行业新闻" target="_self"><span style="">行业新闻</span></a>
						</li>
					</ul>
				</el-col>
			</el-row>
		</div>
		<el-divider></el-divider>
		<el-footer>
			<p>版权技术支持</p>
		</el-footer>
	</el-container>
	</div>
</template>

<script>
	// @ is an alias to /src
	// import HelloWorld from '@/components/HelloWorld.vue'
	export default {
		name: "banner",
		data() {
			
			return {
				// fits: ['fill', 'contain', 'cover', 'none', 'scale-down'],走马灯图片放入走马灯的方法
				activeIndex: '1',
				activeIndex2: '1',
				flex:'',
				//顶部走马灯图片
				imgList: [{
						id: 0,
						idView: require('@/assets/Home/lunbo1.png')
					},
					{
						id: 1,
						idView: require('@/assets/Home/lunbo2.png')
					},
					{
						id: 2,
						idView: require('@/assets/Home/lunbo1.png')
					},
					{
						id: 3,
						idView: require('@/assets/Home/lunbo2.png')
					}
				],
				//logo图片
				logo:require('@/assets/Home/logo1.png'),
				//中部三张图
				chanpin1: require('@/assets/Home/chanpin1.png'),
				chanpin2: require('@/assets/Home/chanpin2.png'),
				chanpin3: require('@/assets/Home/chanpin3.png'),
				//底部走马灯图片
				imgCard: [{
						id: 0,
						idCard: require('@/assets/Home/cangpin1.png'),
					},
					{
						id: 1,
						idCard: require('@/assets/Home/cangpin2.png'),
					},
					{
						id: 2,
						idCard: require('@/assets/Home/cangpin3.png'),
					}
				],
				//中部三张图
				xinwen1: require('@/assets/Home/xinwen1.png'),
				xinwen2: require('@/assets/Home/xinwen2.png'),
				xinwen3: require('@/assets/Home/xinwen3.png'),
				//头部走马灯图片父容器高度
				bannerHeight: 1000,
				//头部走马灯浏览器高度
				screenWidth: 0,
				//隐藏头部导航栏
				show: true,

			}
		},
		methods: {
			handleSelect(key, keyPath) {
			        console.log(key, keyPath);
					},
			jump(urls){
				console.log(urls)
				switch(urls){
					case 'CompanyProfile':
					this.$router.push('/CompanyProfile');
					break;
					case 'Home':
					this.$router.push('/');
					break;
					case 'AncientArtCenter':
					this.$router.push('/AncientArtCenter');
					break;
					case 'ConsultationNews':
					this.$router.push('/ConsultationNews');
					break;
					case 'App':
					this.$router.push('/App');
					break;
					case 'ProductCenter':
					this.$router.push('/ProductCenter');
					break;
					case 'ContactUs':
					this.$router.push('/ContactUs');
					break;
				}
				
			},
			setSize: function() {
				// 通过浏览器宽度(图片宽度)计算高度
				this.bannerHeight = 700 / 1920 * this.screenWidth;

			},
		},
		mounted() {
			function fontSize(){
				var deviceWidth=document.documentElement.clientWidth>1920?760:document.documentElement.clientWidth;
				document.documentElement.style.fontSize=(deviceWidth/120)+"px";
			}
			fontSize();
    		window.onresize=fontSize;
			// 头部走马灯首次加载时,需要调用一次
			this.screenWidth = window.innerWidth;
			this.setSize();
			// 头部走马灯窗口大小发生改变时,调用一次
			window.onresize = () => {
				this.screenWidth = window.innerWidth;
				this.setSize();
			}
		}
	}
</script>
<style scoped>
	.front{
    z-index:1;
    position: absolute;
}
	.background{
	    width:100%;  
	    height:100%;  /**宽高100%是为了图片铺满屏幕 */
	    z-index:-10;
	    position: absolute;
		}
	.text {
		padding-top: 7.1875rem;
		padding-bottom: 4.375rem;
	}

	.text_01 {
		padding-top: 7.1875rem;
		padding-bottom: 4.375rem;
	}

	.text_hp {
		border-bottom-color: red;
		border-bottom-width: 0.0625rem;
		border-bottom-style: solid;
		width: 50%;
		margin: 0 auto;

	}

	.img_chanpin {
		padding-top: 2.5rem;
		/* padding-left: -.9375rem;
		padding-right: -.9375rem; */
		width: 100%;
		padding-bottom: 4.375rem;
		margin: 0 auto;
	}

	.el-main {
		padding: 0rem;


	}

	.el-header {
		padding: 0rem;
	}

	.el-icon-user-solid {
		font-size: 3.125rem;
	}

	.el-carousel__item:nth-child(2n) {
		background-color: #F8F8F8;
	}

	.el-carousel__item:nth-child(2n+1) {
		background-color: #F8F8F8;
	}

	.lunboimg {
		/*设置图片宽度和浏览器宽度一致*/
		width: 100%;
		height: inherit;
	}

	a {
		text-decoration: none;
		color: #4e4e4e;
	}

	h4 {
		font-weight: 600;

	}

	li {
		list-style: none;
	}

	a:hover {
		color: #a8a8a8;
	}

	a:visited {
		color: #4E4E4E;
	}
	
</style>
