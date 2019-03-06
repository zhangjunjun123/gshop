<template>
  <div class="app">
    <router-view></router-view>
    <FooterGuide v-show="$route.meta.showFooter"/>
  </div>
</template>

<script>
import FooterGuide from "./components/FooterGuide/FooterGuide";
import {mapActions} from 'vuex';
export default {
  //  在这发起后端请求，拿回数据，配合路由钩子做一些事情 
   mounted() {
    //不使用 ...定义方法，直接调用actions中的方法（写法1）
    //  this.$store.dispatch('getAddress')

    //调用定义的action中的方法， 方法中异步请求并将结果存在state定义的变量中
     this.getAddress()
     this.getCategorys()
     this.getShops()
    },
    methods:{
      //定义进入actions中的方法
      ...mapActions(['getAddress','getCategorys','getShops'])
    },
  components: {
    FooterGuide
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
.app
  width 100%
  height 100%
  background #f5f5f5
</style>