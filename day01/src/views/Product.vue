<template>
    <div class="body">
        产品详情
        <!-- pc端 -->
        <el-row>
            <el-col :xs="0" :sm="24">
                  <div class="images">
                        <el-carousel indicator-position="outside">
                            <el-carousel-item v-for="item in srcList" :key="item">
                                <div>
                                    <el-image 
                                        style="width: 100px; height: 100px"
                                        :src=item 
                                        :preview-src-list="srcList">
                                    </el-image>
                                </div>
                            </el-carousel-item>
                        </el-carousel>
                    </div>
                    <h3>{{add[0].title}}</h3>
                    <div class="details" v-html="adds">
                        <!-- {{add[0].detail}} -->
                    </div>
            </el-col>
        </el-row>
        <!-- 移动端 -->
        <el-row>
            <el-col :xs="24" :sm="0">
                <div class="images1">
                    <el-carousel indicator-position="outside">
                        <el-carousel-item v-for="item in srcList" :key="item">
                            <div>
                                <el-image 
                                    style="width: 100px; height: 100px"
                                    :src=item 
                                    :preview-src-list="srcList">
                                </el-image>
                            </div>
                        </el-carousel-item>
                    </el-carousel>
                </div>
                <h3>{{add[0].title}}</h3>
                <div class="details1" v-html="adds">
                    <!-- {{add[0].detail}} -->
                </div>
            </el-col>
        </el-row>       
      <div>底部</div>
    </div>
</template>
<script>
export default {
    data(){
        return{
			add:[{img:require('@/assets/mages/产品中心一.png'),title:'和田玉牌',detail:'一级白，质地缜密，细腻光洁，强光之下几乎不见结构。牌头雕刻大肚弥勒，笑口常开，化解天下难事，故起名为守护。'},{img:require('@/assets/mages/产品中心二.png'),title:'和田玉牌',detail:'一级白，质地缜密，细腻光洁，强光之下几乎不见结构。牌头雕刻大肚弥勒，笑口常开，化解天下难事，故起名为守护。'},{img:require('@/assets/mages/产品中心三.png'),title:'和田玉牌',detail:'一级白，质地缜密，细腻光洁，强光之下几乎不见结构。牌头雕刻大肚弥勒，笑口常开，化解天下难事，故起名为守护。'},{img:require('@/assets/mages/产品中心一.png'),title:'和田玉牌',detail:'一级白，质地缜密，细腻光洁，强光之下几乎不见结构。牌头雕刻大肚弥勒，笑口常开，化解天下难事，故起名为守护。'},{img:require('@/assets/mages/产品中心一.png'),title:'和田玉牌',detail:'一级白，质地缜密，细腻光洁，强光之下几乎不见结构。牌头雕刻大肚弥勒，笑口常开，化解天下难事，故起名为守护。'},{img:require('@/assets/mages/产品中心一.png'),title:'和田玉牌',detail:'一级白，质地缜密，细腻光洁，强光之下几乎不见结构。牌头雕刻大肚弥勒，笑口常开，化解天下难事，故起名为守护。'}],
            url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
            srcList: [
            require('@/assets/mages/产品中心一.png'),
            require('@/assets/mages/产品中心二.png')
            ],
            adds:``
        }
    },
    mounted(){
        this.axios.get('/news_list/1/').then(item=>{
			this.adds=item.data.results[0].content
            console.log(this.adds)
		})
    }
}
</script>
<style scoped >
    .body{
		background-image: url('../assets/图层 0_slices/game1.jpg');
	}
    .details1{
        text-align: left;
        padding:1rem;
        box-shadow: 0.05rem 0.25rem 1rem #666;
        width: 80%;
        overflow: hidden;
        margin: 0 auto;
        margin-top: 3rem;
        color: #999;
        font-size: 0.5rem;
        box-shadow: 0px 4px 10px #333;
        box-sizing: border-box;
        padding: 10px;
        margin-bottom: 50px;
    }
    .details1 >>> img{
        width: 100%;
    }
    .details >>> img{
        width: 100%;
    }
    .images1>.el-carousel>.el-carousel__container>.el-carousel__item>div>.el-image{
        width: 100% !important;
        height: 20rem !important;
    }
    .images1{
        width: 100%;
        margin: 0 auto;
        max-width: 414px;
        overflow: hidden;
        margin-bottom: 2rem;
    }
    .images>.el-carousel>.el-carousel__container>.el-carousel__item>div>.el-image{
        width: 400px !important;
        height: 300px !important;
        border-radius: 10px;
        box-shadow: 0px 0px 50px #000;
    }
    .images{
        width: 600px;
        margin: 0 auto;
        height: 300px;
        margin-bottom: 50px;
    }
    .details{
        width: 600px;
        margin: 0 auto;
        box-sizing: border-box;
        overflow: hidden;
        text-align: left;
        margin-top: 10px;
        color: #999;
        box-shadow: 0px 4px 10px #333;
        box-sizing: border-box;
        margin-bottom: 50px;
        padding: 10px;
        border-radius: 10px;
    }
</style>