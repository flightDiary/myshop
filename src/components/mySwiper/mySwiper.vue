<template>
      <!-- categorys里存放了轮播图的数据 -->
        <!--首页导航-->
        <nav class="msite_nav">
          <div class="swiper-container" >
            <div class="swiper-wrapper">
              <!-- 遍历的时候不加key会报错 -->
              <div class="swiper-slide" v-for='(items,index) in categoryArr' :key="index">
                <a href="javascript:" class="link_to_food" v-for="(item,index) in items" :key="index">
                  <div class="food_container">
                    <img :src="imgBaseUrl+item.image_url">
                  </div>
                  <span>{{item.title}}</span>
                </a>
              </div>
            </div>
            <!-- 轮播图分页符 -->
            <div class="swiper-pagination"></div>
          </div>
        </nav>
</template>

<script>

  //轮播图插件
  // // 第一步引入swiper插件
  import Swiper from 'swiper'
  // //2 引入swiper的css
  import 'swiper/css/swiper.min.css' 

  import {mapState} from 'vuex'

  export default {
    data() {
        return {
          imgBaseUrl: 'https://fuss10.elemecdn.com',
        };
    },
    computed: {
      ...mapState(['categorys']),
      
      //使页面一次获取8条数据
      categoryArr(){ 
        let bigArr=[]
        let smallArr=[]
        let max=8 //控制一次最高获取几条数据   
        // let {categorys}=this //this指向Vue的实例对象,这里是把categorys绑定在vue实例上
        let categorys=this.categorys
        //遍历categorys
        //小盒子开始为0，大盒子也为0，小盒子内容等于大盒子
        //小盒子开始装数据，每装一条判断盒子长度是否等于8，不等执行bigArr.push(smallArr)，小盒子内容始终等于大盒子
        //当小盒子数据装到8条时，清空小盒子，
        categorys.forEach(v => { 
          if(smallArr.length==0){
            bigArr.push(smallArr)
          }
          smallArr.push(v)
          if(smallArr.length==max){
            smallArr=[]
          }
        });
        return bigArr
      }
    },
    mounted() {
      this.$store.dispatch('getCategorys')
    },
    watch: {
      categorys(newVal,oldVal){
        if(newVal){
          // nextTick()，是将回调函数延迟在下一次dom更新数据后调用，简单的理解是：当数据更新了，在dom中渲染后，自执行该函数
          this.$nextTick(v=>{
            var mySwiper=new Swiper ('.swiper-container', {
              // direction: 'vertical', // 垂直切换选项
              loop: true, // 循环模式选项
              // 如果需要分页器
              pagination: {
              el: '.swiper-pagination',
               }, 
            })
          })
        }
      }
    },
    methods: {
        //轮播图
        //dom才可以拿到dom的数据   应该要等页面的所有的轮播图都渲染完成后才能进行轮播
        // setTimeout(()=>{
        //   var mySwiper=new Swiper ('.swiper-container', {
        //   // direction: 'vertical', // 垂直切换选项
        //   loop: false, // 循环模式选项
        //   // 如果需要分页器
        //   pagination: {
        //   el: '.swiper-pagination',
        //   }, 
        // }),
        // },1000)
    },
  };
</script>

<style scoped lang='stylus'>
  .msite_nav
    bottom-border-1px(#e4e4e4)
    margin-top 45px
    height 200px
    background #fff
    .swiper-container
      width 100%
      height 100%
    .swiper-wrapper
      width 100%
      height 100%
      .swiper-slide
        display flex
        justify-content center
        align-items flex-start
        flex-wrap wrap
        .link_to_food
          width 25%
          .food_container
            display block
            width 100%
            text-align center
            padding-bottom 10px
            font-size 0
            img
              display inline-block
              width 50px
              height 50px
          span
            display block
            width 100%
            text-align center
            font-size 13px
            color #666
    .swiper-pagination
      >span.swiper-pagination-bullet-active
        background #02a774
</style>
