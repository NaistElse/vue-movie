<template>
  <div class="">
    <div class="movieinfo">
      <div class="info-detail">
        <h3 class="info-title">
          {{ movieinfo.alt_title }}
          <i>({{ movieinfo.title }})</i>
          <span class="info-sorce">{{ movieinfo.rating.average }}</span>
        </h3>
        <div class="info-pic">
          <img width="230" height="300" :src="movieinfo.image" alt="">
        </div>
        <ul class="info-list">
          <li>导演:<span v-for="item in movieinfo.attrs.director">&nbsp;{{ item }},</span></li>
          <li class="chaochu">主演:<span v-for="item in movieinfo.attrs.cast">&nbsp;{{ item }},</span></li>
          <li>类型:<span v-for="item in movieinfo.attrs.movie_type">&nbsp;{{ item }},</span></li>
          <li>制片国家/地区:<span v-for="item in movieinfo.attrs.country">&nbsp;{{ item }}</span></li>
          <li>片长:<span v-for="item in movieinfo.attrs.movie_duration">&nbsp;{{ item }}</span></li>
          <li>剧情介绍:&nbsp;&nbsp;{{ movieinfo.summary }}</li>
        </ul>
        <div class="info-time">
          上映时间:<span v-for="item in movieinfo.attrs.pubdate"></br>&nbsp;{{ item }}</span>
        </div>
      </div>

    </div>
    <div class="chooseseat">
      <h3>选座购票</h3>
      <seat-Info></seat-Info>
    </div>
  </div>


</template>

<script>
import seatInfo from './SeatInfo.vue'

export default {
  data() {
    return {
      movieid: this.$route.params.id,
      movieinfo: {}
    }
  },
  components: {
    seatInfo
  },
  created() {
    this.getmovieinfo()
  },
  methods: {
    getmovieinfo() {
      this.axios.get('/movie/'+ this.movieid).then((response) => {
        this.movieinfo = response.data
      })
    }
  }
}

</script>

<style>
.chaochu{
  width: 590px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.movieinfo{
  width: 100%;
  height: 400px;
  position: relative;
  background: #42383d;
  margin-top: 10px;
  color: white;
  font: 12px/1.5 tahoma,arial,'Hiragino Sans GB','\5b8b\4f53',sans-serif;
}
.movieinfo .info-detail{
  width: 980px;
  height: 400px;
  position: relative;
  right: 0px;
  left: 0px;
  margin: auto;
}
.movieinfo .info-detail .info-title{
  width: 100%;
  height: 50px;
  line-height: 50px;
  font-size: 20px;
  border-bottom: 1px solid #7a7a7a;
  border-bottom: 1px solid rgba(255,255,255,.3);
  margin-bottom: 16px;
}
.movieinfo .info-detail .info-title i{
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
}
.movieinfo .info-detail .info-title .info-sorce{
  line-height: 50px;
  font-size: 20px;
  color: #be1932;
}
.movieinfo .info-detail .info-pic{
  float: left;
  width: 225px;
}
.movieinfo .info-detail .info-pic img{
  display: inline-block;
  width: 210px;
  height: 280px;
  overflow: hidden;
}
.movieinfo .info-detail .info-list{
  float: left;
  width: 590px;
  list-style: none;
  padding: 0px;
  margin: 0px;
}
.movieinfo .info-detail ul li{
  padding-bottom: 12px;
}
.movieinfo .info-detail .info-time{
  float: right;
  width: 156px;
  height: 22px;
  text-align: right;
  line-height: 22px;
  font-size: 14px;
}
.chooseseat{
  width: 980px;
  position: relative;
  right: 0px;
  left: 0px;
  margin: auto;
}
.chooseseat h3{
  display: inline-block;
  height: 40px;
  width: 100%;
  line-height: 40px;
  font-size: 20px;
  border-bottom: 1px solid #e5e5e5;
}
</style>
