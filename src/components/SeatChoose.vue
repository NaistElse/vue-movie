<template>
  <div>
    <div class="seatchoose">
      <div class="movielist">
        <div class="movie" v-for="itemlist in movielist" :key="itemlist.id" @click="getinfo(itemlist.id)">
          <div class="movie-pic">
            <img :src="itemlist.images.small" alt="">
            <div class="movie-detail">
              <p>导演:
                <span v-for="item in itemlist.directors" :key="item.id">{{ item.name }}</span>
              </p>
              <p>主演:
                <span v-for="item in itemlist.casts" :key="item.id">{{ item.name }}</span>
              </p>
              <p>类型:
                <span v-for="item in itemlist.genres">{{ item }},</span>
              </p>
            </div>
            <div class="movie-title">
              <div class="movie-title-left">
                &nbsp;&nbsp;{{ itemlist.title }}
              </div>
              <div class="movie-title-right">
                {{ itemlist.rating.average }}
              </div>
            </div>
          </div>
          <el-button class="movie-buy" type="danger">选座购票</el-button>

        </div>

      </div>

    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      movielist: []

    }
  },
  created() {
    this.getmovies()

  },
  methods: {
    getmovies() {
      this.axios.get('/movie/in_theaters').then((response) => { // 获取豆瓣api
        this.movielist = response.data.subjects
      })
    },
    getinfo(id) {
      this.$router.push({ name: "movieinfo", params: { id } })
    }
  }
}

</script>

<style>
.seatchoose{
  width: 980px;
  height: 600px;
  left: 0px;
  right: 0px;
  margin: auto;
  position: relative;
}
.movie{
  width: 160px;
  height: 264px;
  position: relative;
  margin: 20px 30px 0px 0px;
  float: left;
}
.movie-pic{
  width: 160px;
  height: 224px;
  position: relative;
  cursor: pointer;
}
.movie-pic img{
  width: 160px;
  height: 224px;
  display: block;
  position: relative;
}
.movie-title{
  width: 160px;
  height: 20px;
  bottom: 0px;
  font-size: 9px;
  z-index: 100;
  position: absolute;
  color: white;
  background: black;
  opacity: 0.7;
}
.movie-title .movie-title-left{
  width: 120px;
  height: 20px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  position: absolute;
  left: 0px;
}
.movie-title .movie-title-right{
  width: 20px;
  height: 20px;
  position: absolute;
  right: 0px;
}
.movie-detail{
  width: 160px;
  height: 224px;
  position: absolute;
  top: 0px;
  color: white;
  font-size: 9px;
  background: black;
  opacity: 0;
  transition: 0.5s linear;
}
.movie-detail:hover{
  opacity: 0.7;
}
.movie-detail p{
  width: 100px;
  height: 30px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin-left: 30px;
}
.movie-buy{
  width: 160px;
}
</style>
