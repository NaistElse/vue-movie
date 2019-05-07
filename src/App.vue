<template>
  <div class="">
    <!-- 顶部通栏 -->
    <el-row>
      <el-col :span="24">
        <div class="grid-content bg-purple-dark">
          <div class="topbar">
            <el-menu
              class="el-menu-demo"
              mode="horizontal"
              background-color="#545c64"
              text-color="#fff"
              active-text-color="#ffd04b">
              <el-menu-item index="1" @click="gotohome">首页</el-menu-item>
              <el-menu-item index="2">新闻</el-menu-item>
              <el-menu-item index="3">评论</el-menu-item>
              <el-submenu index="4">
                <template slot="title">独家栏目</template>
                <el-menu-item index="4-1">m视频</el-menu-item>
                <el-menu-item index="4-2">中国电影报道</el-menu-item>
                <el-menu-item index="4-3">今日影评</el-menu-item>
              </el-submenu>
              <el-menu-item index="5" @click="gotochoose">大片</el-menu-item>
              <el-menu-item index="6">VIP影院</el-menu-item>
              <el-menu-item index="7" @click="gotolibrary">资料馆</el-menu-item>
              <el-input v-model="search" class="resarch" placeholder="请输入内容" clearable></el-input>
              <el-button class="btnresarch" type="primary" icon="el-icon-search" @click="searchmovie">搜索</el-button>
            </el-menu>

          </div>
        </div>
      </el-col>
    </el-row>

    <!-- 主区域 -->
    <transition name="slide-fade">
      <router-view></router-view>
    </transition>

  </div>

</template>

<script>
export default {
  data (){
    return {
      search: ''
    }
  },
  created() {

  },
  methods: {
    gotohome() {
      this.$router.push('/home')
    },
    gotochoose() {
      this.$router.push('/choose')
    },
    gotolibrary() {
      this.$router.push({ name: "movielibrary", params: { 'q': 'null' } })
    },
    searchmovie() {
      this.$router.push({ name: "movielibrary", params: { 'q': this.search } })
    }
  }
}



</script>

<style>
.topbar{

  height: 60px;
  background-color: #545c64;
  padding-left: 150px;
}
.resarch{
  width: 200px;
  height: 40px;
  margin-top: 10px;
  margin-left: 10px;
}
.btnresarch{
  margin-top: 10px;
}
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}

</style>
