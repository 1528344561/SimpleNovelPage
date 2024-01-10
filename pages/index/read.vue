<template>
    <view class="root">
        <view class="content">
            <view class="capter-title-sml">
            {{ capter.capterTitle }}
            </view>
            <view class="capter-title-big">
                {{ capter.capterTitle }}
            </view>
            <view class="page-content">
                <div :v-html="capter.capterContent"></div>
                {{ capter.capterContent }}
            </view>
        </view>


        <!-- <u-button>按钮</u-button> -->
    </view>
</template>

<script>
    export default{
        onShow(){
            // this.capter.capterContent=this.capter.capterContent.replace('\n','<br>');
        },
        data(){
            return {
                userArticle:{
                    capterTotalNum:10,
                    capterUserNum:1,
                },
                capter:{
                    capterNum:1,
                    capterTitle:'第一章 民团神枪手',
                    capterContent:`
                    1937年八月，淞沪会战爆发，短短几个月的时间，整个淞沪血流成河，尸骸遍野。
                    十一月，80多万大军最终敌不过25万余日军，国军最终被迫下达撤退的命令。  南京城外远处，牛头山阵地上，一群衣衫破烂的民团正在阵地上阻击日军的追击，掩护所谓的正规军撤退。  可怜他们手中的兵器太过落后，除了几十把破旧的老套筒之外，好多人拿着弓箭，背着大刀拿着红缨枪。  几发掷弹筒飞过来，十几个民团直接被炸翻在地。  一发榴弹落在一个少年身边，直接把这少年掀翻在地。  “铁军！铁军！”  父亲冲过来，拼命的摇晃王铁军的脑袋，一边不停的大声呼叫，一双怒眼带着一丝悲哀的泪光，生怕儿子死在这里。  “咳咳！”  王铁军咳喘了几声，缓缓睁开眼睛。  眼睛刚刚睁开，旁边不远一个民团的被子弹击中，鲜血溅射在他的脸上，嘴上。  温热的血腥味，枪炮的声音，接连不断的尸体倒下，让他猛然一怔。                     
                    `,
                }
            }
        }
    }
</script>

<style scoped>
.root{
    width: 100vw;
    height: 100vh;
    background:url(/static/read-bkg.png);
    background-size: 100% 100%;
}
.content{
    width: 95vw;
    margin: 0 auto;
}
.capter-title-sml{
    font-size: 24rpx;
}
.capter-title-big{
    font-size: 40rpx;
    font-weight: 600;

    text-align: center;
    /* margin:0 auto; */
}
.text-wrapper {
    white-space: pre-wrap;
}
</style>