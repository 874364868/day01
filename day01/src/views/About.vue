<template>
  <div class="body">
    <h2>{{add.title}}</h2>
    <div class="time">{{add.year}}</div>
    <div class="details">
      <div><img class="img" src="http://news.zhuoyixuan.com/uploadfile/2021/0506/20210506095121693.jpg" alt=""></div>
      <el-row>
			<!-- pc端 -->
			  <el-col :xs="0" :sm="24">
          <div class="introduce">
            &nbsp;&nbsp;&nbsp;&nbsp;{{add.detail}}
          </div>
        </el-col>
      <!-- 移动端 -->
        <el-col :xs="24" :sm="0">
          <div class="introduce1">
            &nbsp;&nbsp;&nbsp;&nbsp;这里是描述，可以加文字这里是描述，可以加文字这里是描述，可以加文字这里是描述，可以加文字这里是描述，可以加文字这里是描述，可以加文字这里是描述，可以加文字这里是描述，可以加文字这里是描述，可以加文字这里是描述，可以加文字这里是描述，可以加文字这里是描述，可以加文字这里是描述，可以加文字这里是描述，可以加文字这里是描述，可以加文字这里是描述，可以加文字这里是描述，可以加文字这里是描述，可以加文字这里是描述，可以加文字这里是描述，可以加文字这里是描述，可以加文字这里是描述，可以加文字这里是描述，可以加文字这里是描述，可以加文字这里是描述，可以加文字这里是描述，可以加文字这里是描述，可以加文字这里是描述，可以加文字这里是描述，可以加文字这里是描述，可以加文字这里是描述，可以加文字这里是描述，可以加文字这里是描述，可以加文字这里是描述，可以加文字这里是描述，可以加文字这里是描述，可以加文字这里是描述，可以加文字这里是描述，可以加文字
          </div>
        </el-col>
      </el-row>
      
      <div>123</div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      add:{day:'27',year:'2020-05',src:'http://news.zhuoyixuan.com/uploadfile/2021/0506/20210506095121693.jpg',title:'南阳第十七届玉雕文化节圆满落下帷幕',detail:`5月3日，南阳第十七届玉雕文化节在镇平县圆满落下帷幕。此次玉雕文化节主题是“赏精品美玉、游大美南阳、促产业提升”，由中国珠宝玉石首饰行业协会、南阳市人民政府主办，镇平县人民政府承办。在为期6天的玉雕文化节期间，共设置了六大板块十八项活动，除了“建党百年•玉赞中国”主题玉雕作品展览活动、第九届玉石雕刻作品“玉华奖”评选、展览及颁奖活动、第二届“玉见时尚”珠宝玉雕文创大赛及作品展览外，还有南阳独山玉精品主题展、高等美院与镇平县人民政府校地战略合作签约活动、第十届玉雕设计创作新星评选活动、“玉+健康养生”主题文化体验、中国玉石原料交易大会、中国珠宝玉石首饰品牌企业研讨活动、中国玉雕流派高峰论坛、2021南阳直播电商产业峰会、线上直播带货活动、玉雕节成果提升、商务招商活动、文化旅游推介、文化艺术界名家走进玉乡等一系列活动，在集中展示南阳玉文化产业的宏大规模、强劲态势和卓越成果，进而在更宽领域、更深层次、更高格局上唱响特色、擦亮品牌，合力推动南阳玉文化产业转型升级、高质量跨越发展。

　　签约项目取得了新成效。本次玉雕节期间共达成合作项目35个，合同引资额115亿元，集中签约项目25个，成为玉雕节项目签约的精彩亮点。

　　玉器产品线上线下交易额取得新突破。抖音、快手、微拍堂等电商平台助力，线下交易引流，玉雕节期间交易额达3亿元。

　　论坛活动办出了新特色。“华山论剑”中原玉雕流派特色和艺术风格研讨会奠定了以镇平为主体的中原玉雕流派在全国的重要地位。

　　线上线下展览办出了新形式。线下举办了“建党百年•玉赞中国”主题展、“玉华奖”作品展、“玉见时尚”珠宝玉雕文创作品展和独山玉精品展，线上在玉雕云博物馆同步展出，形成新现象。

　　行业参与度达到了新高度。按照“政府出题目、企业做文章、绩效考评、以奖代补”的运作模式，各项活动由玉雕行业协会、企业承办或领办，共有12项活动分别有镇平县宝玉石协会、镇平县宝玉石协会石佛寺分会、镇平县宝玉石协会独山玉分会、镇平县玉文化研究会、镇平县电商协会、镇平县和一玉料标场、万国玉宝公司承办。`}
    }
  }
}
</script>
<style scoped>
  .introduce1{
    text-align: left;
    color: #666;
    width: 100%;
    margin: 0 auto !important;
    overflow: hidden;
    margin-bottom: 50px;
    box-shadow: 0px 0px 10px #333;
    padding: 20px;
    border-radius: 10px;
    box-sizing: border-box;
  }
  .introduce{
    text-align: left;
    color: #666;
    width: 700px;
    margin: 0 auto !important;
    overflow: hidden;
    margin-bottom: 50px;
    box-shadow: 0px 0px 10px #333;
    padding: 20px;
    border-radius: 10px;
  }
  .details>div{
    margin: 20px 0;
  }
  .time{
    padding:20px 0;
    color: #666;
  }
  .img{
    width: 220px;
    height: 130px;
    border-radius: 10px;
		box-shadow: 0px 4px 10px #333;
  }
  .body{
		background-image: url('../assets/图层 0_slices/game1.jpg');
	}
</style>
