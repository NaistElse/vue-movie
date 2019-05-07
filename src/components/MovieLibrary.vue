<template>
  <div>
    <div class="seatchoose">
      <div class="movielist">
        <div class="movie" v-for="itemlist in searchlist" :key="itemlist.id" @click="getinfo(itemlist.id)">
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
          <el-button class="movie-buy" type="danger" disabled>选座购票</el-button>

        </div>

      </div>

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      q: this.$route.params.q,
      searchlist: []
    }
  },
  created() {
    this.ss()
  },
  methods: {
    ss() {
      if(this.q === 'null') {
        this.axios.get('/movie/top250').then((response) => {
          this.searchlist = response.data.subjects
        })
      }else {
        this.axios.get('/movie/search?q='+ this.q).then((response) => {
          this.searchlist = response.data.subjects
        })
      }
    },
    getinfo(id) {
      this.$router.push({ name: "movieinfo", params: { id } })
    }
  },
  watch: {
    '$route.path': function(newVal,oldVal) {
      if(newVal !== oldVal) {
        this.axios.get('/movie/search?q='+ newVal.substring(9)).then((response) => {
          this.searchlist = response.data.subjects
        })
      }

    }

  }
}
</script>

<style>

</style>
