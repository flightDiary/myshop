<template>
  <div>
    <section class="loginContainer">
      <div class="loginInner">

        <!-- 登陆方式 -->
        <div class="login_header">
          <h2 class="login_logo">硅谷外卖</h2>
          <div class="login_header_title">
            <a href="javascript:;" :class='{on:isway}' @click="isway=true">短信登录</a>
            <a href="javascript:;" :class="{on:!isway}" @click="isway=false">密码登录</a>
          </div>
        </div>

      <!-- 登陆信息 -->
        <div class="login_content">
          <form>

            <!-- 短信登陆 -->
            <div :class='{on:isway}'>
              <section class="login_message">
                <!-- maxlength最大长度 -->
                <input type="tel" maxlength="11" placeholder="手机号" v-model='phone'>
                <!-- 这里要判断手机号输入是否正确 不正确要禁用登陆按钮 正确让按钮黑色显示 -->
                <!-- 当倒计时computedTime控制验证码的状态-->
                <button :disabled="!isRightPhone" class="get_verification" :class="{black:isRightPhone}" @click.prevent="getCode">{{computedTime>0?`还剩${computedTime}s`:`获取验证码`}}</button>
              </section>

              <section class="login_verification">
                <input type="tel" maxlength="8" placeholder="验证码" v-model="code">
              </section>
              <section class="login_hint">
                温馨提示：未注册硅谷外卖帐号的手机号，登录时将自动注册，且代表已同意
                <a href="javascript:;">《用户服务协议》</a>
              </section>
            </div>


            <!-- 密码 -->
            <div :class='{on:!isway}'>
              <section >
                <section class="login_message">
                  <input v-model="name" type="tel" maxlength="11" placeholder="手机/邮箱/用户名">
                </section>

                <section class="login_verification">
                  <input v-model="pwd" type="password" maxlength="8" placeholder="密码" v-if="!isShowPwd">
                  <input v-model="pwd" type="text" maxlength="8" placeholder="密码" v-else>
                  <!-- 密码右边的是否可见按钮 -->
                  <div class="switch_button off" @click="isShowPwd=!isShowPwd" :class="isShowPwd?'on':'off'">
                    <div class="switch_circle" :class="{right:isShowPwd}"></div>
                    <span class="switch_text" >{{isShowPwd?'abc':'...'}}</span>
                  </div>
                </section>

                <section class="login_message">
                  <input  v-model="captcha" type="text" maxlength="11" placeholder="验证码">
                  <img class="get_verification" src="http://localhost:4000/captcha" alt="captcha" @click="getCaptcha">
                </section>
              </section>
            </div>
            <button class="login_submit">登录</button>
          </form>
          <a href="javascript:;" class="about_us">关于我们</a>
        </div>
        <a href="javascript:" class="go_back">
          <i class="iconfont icon-jiantou2"></i>
        </a>
      </div>
    </section>
  </div>
</template>

<script>

import {reqSendCode} from '../../api/index'

export default {
    props: {

    },
    data() {
        return {
          isway:false, //切换手机登陆还是账号密码登陆
          phone:'',//手机号
          code:'',//手机号短信验证码
          computedTime:0,//发送验证码倒计时

          //手机登陆的参数
          name:'',//用户名
          pwd:'',//密码
          captcha:'',//验证码

          isShowPwd:false//密码是否可见
        };
    },
    computed: {
      // 在计算属性里用正则表达式判断是否输入了正确的手机号码
      isRightPhone(){
        // console.log( /^1\d{10}$/.test(this.phone)) 
        return  /^1\d{10}$/.test(this.phone)        
      }
    },
    created() {

    },
    mounted() {

    },
    watch: {

    },
    methods: {
      //获取手机验证码
      async getCode(){
        //先判断一下倒计时computedTime是否在运行 当computedTime==0时表示停止,此时获取验证码
        if(!this.computedTime){
          this.computedTime=30
          //倒计时的定时器
          this.IntervalId=setInterval(() => {
            this.computedTime--
            if(this.computedTime<=0){
              clearInterval(this.IntervalId)
            }
          }, 1000);
          //发送ajax请求 获取到验证码
          let result=await reqSendCode(this.phone)
          // console.log(result)
        }
      },

      //获取图形验证码
      getCaptcha(event){
        // alert(1)
        //解决服务器缓存
        event.target.src='http://localhost:4000/captcha?time='+Date.now()        
      },

    },
    components: {

    },
};
</script>

<style lang='stylus' >
@import '../../common/stylus/mixins.styl';
//  >.off
//     display none
//     >.on
//     position fixed
//     top 0
//     left 0
//     right 0
//     bottom 0
//     z-index 200

    .loginContainer
      width 100%
      height 100%
      background #fff
      .loginInner
        padding-top 60px
        width 80%
        margin 0 auto
        .login_header
          .login_logo
            font-size 40px
            font-weight bold
            color #02a774
            text-align center
          .login_header_title
            padding-top 40px
            text-align center
            >a
              color #333
              font-size 14px
              padding-bottom 4px
              &:first-child
                margin-right 40px
              &.on
                color #02a774
                font-weight 700
                border-bottom 2px solid #02a774
        .login_content
          >form
            >div
              display none
              &.on
                display block
              input
                width 100%
                height 100%
                padding-left 10px
                box-sizing border-box
                border 1px solid #ddd
                border-radius 4px
                outline 0
                font 400 14px Arial
                &:focus
                  border 1px solid #02a774
              .login_message
                position relative
                margin-top 16px
                height 48px
                font-size 14px
                background #fff
                .get_verification
                  position absolute
                  top 50%
                  right 10px
                  transform translateY(-50%)
                  border 0
                  color #ccc
                  font-size 14px
                  background transparent
                  &.black
                    color black
              .login_verification
                position relative
                margin-top 16px
                height 48px
                font-size 14px
                background #fff
                .switch_button
                  font-size 12px
                  border 1px solid #ddd
                  border-radius 8px
                  transition background-color .3s,border-color .3s
                  padding 0 6px
                  width 30px
                  height 16px
                  line-height 16px
                  color #fff
                  position absolute
                  top 50%
                  right 10px
                  transform translateY(-50%)
                  &.off
                    background #fff
                    .switch_text
                      float right
                      color #ddd
                  &.on
                    background #02a774
                  >.switch_circle
                    //transform translateX(27px)
                    position absolute
                    top -1px
                    left -1px
                    width 16px
                    height 16px
                    border 1px solid #ddd
                    border-radius 50%
                    background #fff
                    box-shadow 0 2px 4px 0 rgba(0,0,0,.1)
                    transition transform .3s
                    &.right 
                      transform translateX(27px)
              .login_hint
                margin-top 12px
                color #999
                font-size 14px
                line-height 20px
                >a
                  color #02a774
            .login_submit
              display block
              width 100%
              height 42px
              margin-top 30px
              border-radius 4px
              background #4cd96f
              color #fff
              text-align center
              font-size 16px
              line-height 42px
              border 0
          .about_us
            display block
            font-size 12px
            margin-top 20px
            text-align center
            color #999
        .go_back
          position absolute
          top 5px
          left 5px
          width 30px
          height 30px
          >.iconfont
            font-size 20px
            color #999
</style>
