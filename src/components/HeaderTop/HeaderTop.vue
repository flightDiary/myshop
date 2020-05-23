<template>
    <div>
         <!-- 首页头部 -->
        <header class="msite_header">

          <!-- <span class="header_search">
            <i class="iconfont icon-sousuo"></i>
          </span> -->
          <!-- 加插槽 msite组件里可以盛放左右两侧的图标 -->
          <slot name="left"></slot>

          <span class="header_title">
            <span class="header_title_text ellipsis">{{title}}</span>
          </span>


          <!-- <span class="header_login">
            <span class="header_login_text">登录|注册</span>
          </span> -->
          <slot name="right"></slot>



        </header>
    </div>
</template>

<script>


export default {

    props:['title'],
    data() {
        return {

        };
    },
    computed: {

    },
    created() {

    },
    mounted() {

    },
    watch: {

    },
    methods: {

    },
    components: {

    },
};
</script>


//scoped样式只能在当前组件里面使用 特别是在框架里的时候要更改样式的时候 scoped需要灵活运用 框架里面更改样式采用 /deep/深度选择器
<style lang='stylus' >
        .msite_header
            background-color #02a774
            position fixed
            z-index 100
            left 0
            top 0
            width 100%
            height 45px
            .header_search
              position absolute
              left 15px
              top 50%
              transform translateY(-50%)
              width 10%
              height 50%
              .icon-sousuo
                font-size 25px
                color #fff
            .header_title
              position absolute
              top 50%
              left 50%
              transform translate(-50%, -50%)
              width 50%
              color #fff
              text-align center
              .header_title_text
                font-size 20px
                color #fff
                display block
            .header_login
              font-size 14px
              color #fff
              position absolute
              right 15px
              top 50%
              transform translateY(-50%)
              .header_login_text
                color #fff
</style>
