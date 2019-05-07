<template>
  <div class="">

    <div class="homeindex">

      <!-- 轮播图 -->
      <div class="lunbotu">
        <div class="block">
          <el-carousel class="carousel">
            <el-carousel-item v-for="item in images" :key="item.id">
              <img :src="item.src" alt="">
            </el-carousel-item>
          </el-carousel>
        </div>
      </div>

      <!-- 新闻通栏 -->
      <div class="news">
        <el-row>
          <el-col :span="9">
            <div class="grid-content bg-purple">
              <div class="yaowen">
                <div class="biaoti-big">
                  <p class="biaoti">要闻</p>
                </div>
                <div class="context" v-for="item in news" :key="item.id">
                  <div class="context-top" v-if="item.type == 'header'">
                    <p class="context-zi hover">{{ item.title }}</p>
                    <div class="context-main">
                      <div class="context-left">
                        <img :src="item.picturesrc" alt="">
                      </div>
                      <div class="context-right">
                        {{ item.context }}
                      </div>
                    </div>
                  </div>
                  <div class="context-news hover" v-else>
                    <span class="shu">{{ item.type }}</span>
                    <span>{{ item.title }}</span>
                  </div>
                  <hr>
                </div>
              </div>

            </div>
         </el-col>
          <el-col :span="9">
            <div class="grid-content bg-purple-light">
              <div class="kuaixun yaowen">
                <div class="biaoti-big">
                  <p class="biaoti">快讯</p>
                </div>
                <div class="context-kuaixun" v-for="item in kuaixun" :key="id">
                  <p class="context-kuaixun-big chaochuzi  hover" v-if="item.id % 4 == 1 ">{{ item.title }}</p>
                  <p class="context-zi chaochuzi hover" v-else>{{ item.title }}</p>
                </div>

              </div>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content bg-purple">
              <div class="shendu">
                <div class="biaoti-big">
                  <p class="biaoti">深度</p>
                </div>
                <div class="shendu-pic" v-for="item in shendu" :key="item.id">
                  <img :src="item.picturesrc" alt="">
                  <p class="context-zi shendu-pic-zi hover">{{ item.title }}</p>
                </div>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>

      <!-- 更多按钮 -->
      <div class="news">
        <el-row>
          <el-col :span="24">
            <div class="grid-content bg-purple-dark">
              <el-button class="buttonmore" type="primary" :loading="loading" @click="getmore" round>更多新闻</el-button>
            </div>
          </el-col>
        </el-row>
      </div>

    </div>


  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [
      {
        'id': 1,
        'src': 'http://image14.m1905.cn/uploadfile/2019/0328/thumb_1_1380_460_20190328014639305344.jpg'
      },
      {
        'id': 2,
        'src': 'http://image13.m1905.cn/uploadfile/2019/0328/thumb_1_1380_460_20190328013849478679.jpg'
      },
      {
        'id': 3,
        'src': 'http://image14.m1905.cn/uploadfile/2019/0327/thumb_1_1380_460_20190327101708231321.jpg'
      },
      {
        'id': 4,
        'src': 'http://image13.m1905.cn/uploadfile/2019/0321/thumb_1_1380_460_20190321041443557614.jpg'
      },
      {
        'id': 5,
        'src': 'http://image14.m1905.cn/uploadfile/2019/0321/thumb_1_1380_460_20190321043954713507.jpg'
      },
      {
        'id': 6,
        'src': 'http://image13.m1905.cn/uploadfile/2019/0308/thumb_1_1380_460_20190308111156345002.jpg'
      },
      {
        'id': 7,
        'src': 'http://image13.m1905.cn/uploadfile/2019/0124/thumb_1_1380_460_20190124085545785708.jpg'
      }
    ],
    news: [
      {
        'id': 1,
        'type': 'header',
        'title': '牢固树立文化自信 必须坚持以人民为中心守正创新',
        'context': '在当代中国，文化自信既不是源自文化哲学的理性思辨，更不是文化民粹主义' +
                   '的非理性狂躁。它与道路自信、理论自信、制度自信共同构成中国特色社会主义的“四个自信”。其中…',
        'picturesrc': 'http://image14.m1905.cn/uploadfile/2019/0415/thumb_1_210_185_20190415030832767364.jpg'
      },
      {
        'id': 2,
        'type': '观点',
        'title': '2018年《影》等多部中国电影出现“寓言体”现象'
      },
      {
        'id': 3,
        'type': '行业',
        'title': '把握电影产业发展新机遇 从电影大国向强国迈进'
      },
      {
        'id': 4,
        'type': '焦点',
        'title': '媒体融合是一场不容回避的自我革命（人民论坛）'
      },
      {
        'id': 5,
        'type': '焦点',
        'title': '提升网络意识形态领域风险防范化解能力'
      },
      {
        'id': 6,
        'type': '焦点',
        'title': '以纪录片为媒 向世界呈现一个真实立体全面的中国'
      }
    ],
    kuaixun: [
      {
        'id': 1,
        'title': '邓超执导《银河补习班》定档7月26日 主打温情牌'
      },
      {
        'id': 2,
        'title': '“天坛奖”评委谈北京国际电影节：这是一个国际化的社区'
      },
      {
        'id': 3,
        'title': '北影节《绝杀慕尼黑》引起轰动 女性观众太激动喊哑嗓子'
      },
      {
        'id': 4,
        'title': '影视记者的日常：多方位全角度记录第九届北京国际电影节'
      },
      {
        'id': 5,
        'title': '《第十一回》首支预告发布 陈建斌大鹏狂奔出镜'
      },
      {
        'id': 6,
        'title': '《雪暴》发布“苦中作乐”特辑 廖凡撂狠话：动手必伤人'
      },
      {
        'id': 7,
        'title': '《如影随心》发布虐心主题曲MV 情歌天后许茹芸深情献唱'
      },
      {
        'id': 8,
        'title': '票房播报：大盘票房持续回落 《复仇者联盟4》预售破3亿'
      },
      {
        'id': 9,
        'title': '《哥斯拉2怪兽之王》曝预告 章子怡呼唤三大巨兽'
      },
      {
        'id': 10,
        'title': '大表姐阔别银幕两年后将回归出演文艺片 A24负责影片发行'
      },
      {
        'id': 11,
        'title': '“妮妮”主演《怪医杜立德》将撰写新素材重拍'
      },
      {
        'id': 12,
        'title': '翻拍版《鬼娃回魂》爆照 鬼娃手持巨大刀子现身表情可怖'
      }
    ],
    shendu: [
      {
        'id': 1,
        'picturesrc': 'http://image11.m1905.cn/uploadfile/2019/0417/thumb_1_176_110_20190417021113769053.jpg',
        'title': '“恋爱观察”综艺扎堆霸屏'
      },
      {
        'id': 2,
        'picturesrc': 'http://image14.m1905.cn/uploadfile/2019/0416/thumb_1_176_110_20190416104453211112.jpg',
        'title': '郭涛导演处女作究竟差在'
      },
      {
        'id': 3,
        'picturesrc': 'http://image13.m1905.cn/uploadfile/2019/0414/thumb_1_176_110_20190414023400672185.jpg',
        'title': '郑恺，你清醒一点！'
      }
    ],
    loading: false
    }
  },
  methods: {
    getmore() {
      this.loading = true
      setInterval( () =>{
        this.loading = false
      },3000)
      clearInterval()
    }
  }
}

</script>

<style>
.homeindex{
  width: 980px;
  left: 0px;
  right: 0px;
  margin: auto;
  position: relative;
}
.lunbotu{
  padding-top: 50px;
  position: relative;
}
.lunbotu .carousel{
  width: 980px;
  height: 327px;
  right: 0px;
  left: 0px;
  margin: auto;
}
.lunbotu .carousel img{
  width: 980px;
  height: 327px;
}
.yaowen{
  margin-right: 5px;
}
.news{
  position: relative;
  margin-top: 50px;
  width: 980px;
  right: 0px;
  left: 0px;
  margin: auto;
}
.biaoti-big{
  border-bottom: 2px solid #e8e8e8;
  height: 46px;
  width: 100%;
}
.biaoti{
  width: 48px;
  height: 46px;
  line-height: 46px;
  font-family: Microsoft YaHei, SimSun, Arial;
  font-size: 24px;
  border-bottom: 2px solid #000000;
}
.context-main{
  font-family: Microsoft YaHei, SimSun, Arial;
  display: flex;
  justify-content: space-between;
}
.context-zi{
  font-size: 14px;
}
.context-left{
  width: 185px;
  height: 160px;
}
.context-left img{
  width: 185px;
  height: 160px;
}
.context-right{
  padding-left: 10px;
  font-size: 14px;
}
.context-news{
  height: 20px;
  font-size: 13px;
  position: relative;
  margin-top: 10px;
}
.shu{
  color: #888888;
}
.shu::after{
  content: '';
  width: 2px;
  height: 12px;
  background: black;
  position: absolute;
  left: 28px;
  top: 4px;
  background-color: #888888;
}
.hover:hover{
  cursor: pointer;
  color: #2267ad;
}
.context-kuaixun-big{
  margin-bottom: 10px;
  font-size: 16px;
  color: #8c4c30;
}
.chaochuzi{
  overflow: hidden;
  word-break:keep-all;
  white-space:nowrap;
}
.shendu-pic{
  width: 176px;
  padding-top: 15px;
  left: 0px;
  right: 0px;
  margin: auto;
}
.shendu-pic-zi{
  margin: 0px;
}
.buttonmore{
  width: 200px;
  left: 390px;
  position: relative;
}

</style>
