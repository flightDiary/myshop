<template>
    <div class="on">
    <section class="msite">
       
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

        
        <!-- 附近商家组件占位符 -->
        <ShopList></ShopList>

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
        
      //主要映射 state  getters 'userInfo' 
      ...mapState(['address','shops']),

    },

      mounted(){    
        //vuex的异步请求
        this.$store.dispatch('getAddress')
        this.$store.dispatch('getShops')
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
</style>
