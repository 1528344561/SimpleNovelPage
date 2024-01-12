
<template>
    <view class="root">

        <view>
            <image src="../../static/bg1.jpg" class="bkg-pic">
        </image>
        </view>
        <view class="login-form">
            <!-- <text>123  </text> -->
            <view style="font-size: 60rpx; font-weight: 550;">
                {{ showText }}
            </view>
            <form>
                <view class="ipt-item">
    
                    <input class="" v-model="user.username" focus placeholder="请输入账号" style="border-bottom: 1px solid #ececec;">
                </view>
                <view class="ipt-item">
                    <input class="" v-model="user.password" focus placeholder="请输入密码" :password="flag!=1" style="border-bottom: 1px solid #ececec;">
                    <image style="width: 50rpx; height: 50rpx;" :src="ico[flag]" @click="changePassword"></image>
                </view>                
            </form>
            <button class="login-btn" @click="clickLogin">{{ showText }}</button>
            <view v-if="!isRegister" style="font-size: 25rpx;margin-top: 20rpx;" @click="changeState ">没有账号?</view>
            <view v-else style="font-size: 25rpx;margin-top: 20rpx;" @click="changeState">已有账号,前去登录</view>
        </view>

        <image src="../../static/bg2.jpg" class="bkg-pic">
        </image>
    </view>
</template>
<script>
import { setDataInfo } from '../../utils/auth'

    export default{
		
        data(){
            return {
                isRegister:false,
                showText:"登录",
                flag:0,
                ico:[
                    '../../static/eye-close.png',
                    '../../static/eye-open.png',
                ],
                user:{
                    username:"",
                    password:""
                }
            }
        },
        methods:{
            changePassword(){
                this.flag = 1-this.flag
            },
            changeState(){
                this.isRegister = !this.isRegister
                if(this.isRegister)
                {
                    this.showText = "注册"
                }else{
                    this.showText = "登录"

                }
            },
            clickLogin(){
                console.log(this.user)
                setTimeout(()=>{
                    uni.showToast({
                        title:'登陆成功',
                        duration: 2000
                    });
                    setDataInfo('token','widjaoiwjdioawdawdawdaw')
                    uni.switchTab({
                        url:'/pages/index/classes'
                    })
                },2000)
            }
        }
    }

</script>
<style scoped>
.root{
    display: block;
}
.login-form{
    padding: 0 50rpx;
    box-sizing: border-box;
    height: calc(100vh - calc(31vh * 2));
}
.ipt-item{
    /* display: ; */
    padding: 40rpx 0;
    box-sizing: content-box;
    /* box-sizing: border-box; */
}
.bkg-pic{
    flex-shrink: 0;
    width: 100vw;
    height: 31vh;
}
.login-btn{
    background-color: #53B175;
    color: #fff;
    border: transparent;
}
.login-btn:active{
    background-color: #247943;
}
</style>

