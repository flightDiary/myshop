<template>
    <div class="on">
    <section class="msite">
       
       <!-- 导航 -->
        <HeaderTOP :title="address.name">
          <!--router-link组件支持用户在具有路由功能的应用中点击导航。通过to属性指定目标地址，默认渲染为带有正确连接的 -->
          <router-link slot="left" to='./search' class="header_search">      
            <i class="iconfont icon-sousuo"></i>
          </router-link>
          <router-link slot="right" to='./login' class="header_login">
            <span class="header_login_text">登录|注册</span>
          </router-link>
        </HeaderTOP>

        <!-- 轮播图占位符 -->
        <mySwiper></mySwiper>

         <div class="msite_shop_list">
          <div class="shop_header">
            <i class="iconfont icon-xuanxiang"></i>
            <span class="shop_header_title">附近商家</span>
          </div>
          
          <!-- 附近商家组件占位符 -->
          <ShopList></ShopList>
         </div>
     

    </section>
    </div>
</template>


<script>
  import HeaderTOP from '../../components/HeaderTop/HeaderTop.vue'
  import ShopList from '../../components/ShopList/ShopList'
  import mySwiper from '../../components/mySwiper/mySwiper'
  
  //在安装时安装的npm i vuex，所以引的时候也应该引的vuex
  import {mapState} from 'vuex'
  
    export default {
      data(){
        return {
          // mytitle:"昌平区北七家宏福科技园(337省道北)"
        }
      },
      
      computed: {  
      //主要映射 state  getters  
      ...mapState(['address']),

    },

      mounted(){    
        //vuex的异步请求
        this.$store.dispatch('getAddress')
      },

      watch:{

      },

      components:{
        HeaderTOP,
        ShopList,
        mySwiper
      }
    }
</script>

<style scoped lang='stylus'>
    @import '../../common/stylus/mixins.styl'
    .msite  //首页
      width 100%
      .msite_shop_list
        top-border-1px(#e4e4e4)
        margin-top 10px
        background #fff
        .shop_header
              padding 10px 10px 0
              .shop_icon
                margin-left 5px
                color #999
              .shop_header_title
                color #999
                font-size 14px
                line-height 20px

</style>
