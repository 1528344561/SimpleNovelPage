<template>
	<view class="root">
		<view class="shang">
			<image class="img" :src="book.bookImg"></image>
			<view class="book-info">
				<view class="info-count">
				<h1>{{book.bookName}}</h1>

						<view style="color: rgba(0,0,0,.4); font-size:32rpx">{{book.author}} / 著</view>
						<view class="more-detail">
							<view class="info-num">{{book.wordCnt}} </view><view class="info-text"> 万字</view>
							<view class="info-division" style="color: rgba(0,0,0,.4); font-size:32rpx">|</view>
							<view class="info-num">{{book.ReadingPeopleNum}}</view><view class="info-text"> 万人在读</view>
						</view>
					</view>
				</view>
			</view>
		<view class="mid">
			<h1>作品简介</h1>
			<view class="book-description">
				{{book.bookDescription}}
			</view>
			<view class="label">
				<view v-for="(item,index) in book.bookTag" :key="index">
						<view class="label-item" >{{item}}</view>
				</view>
				
			</view>
		</view>
		<view>目录<span class="directory-dot"></span>{{chapter.totalNum}}章</view>
		<view class="xia">
			<scroll-view scroll-y="true" style="height: 30vh;">
				<view class="h" v-for="(item,index) in chapter.chapterList" :key="index">
					<text>{{item}}</text>
				</view>
			</scroll-view>
		</view>
		<view class="buttom">
			<button @click="checkLogin">开始阅读</button>
		</view>
	</view>
</template>
<script>
	import {getchapterListByBook} from '@/api/chapter.js'
	import {getBookInfo} from '@/api/book.js'
	import {getDataInfo} from '@/utils/auth.js'

	export default {
		onLoad(options){
			this.bookId = options.bookId
			getBookInfo(this.bookId).then(res=>{
				this.book= res.data
			})
			getchapterListByBook(this.bookId).then(res=>{
				console.log(res.data)
				this.chapter.chapterList = res.data
				this.totalNum = this.chapter.chapterList.length
			})
		},
		data() {
			return {
				token:undefined,
				bookId:-1,
				book:{
					id:0,
					bookName:'测试',
					bookImg:'/static/books/book_0.png',
					wordCnt:140,
					ReadingPeopleNum:99,
					author:"陈杰",
					bookDescription:"balabala...................",
					bookTag:['都市','玄幻'],
					totalchapterNum:4,
				},
				chapter:{
					totalNum:4,
					chapterList:[
						{
							chapterNum:0,
							chapterTitle:"第一章"
						},{
							chapterNum:1,
							chapterTitle:"第二章"
						},{
							chapterNum:2,
							chapterTitle:"第三章"
						},{
							chapterNum:3,
							chapterTitle:"第四章"
						},
					]
				}
			}
		},
		methods: {
			gotoPage(){
                // console.log(item)
  
                uni.navigateTo({
                    url:'/pages/index/read?'+"bookId="+this.bookId
                })
            },
			checkLogin(){
				if(!this.token){
					this.getToken();
				}else{
					this.gotoPage()
				}
			},
			goLogin(){
                console.log("触发了")
                uni.navigateTo({
                    url:'/pages/index/login'
                })
            },
			getToken(){
                let _that = this
                this.token = getDataInfo('token') 
                console.log(this.token)
                if(this.token){
                    return console.log('ok')
                }else{
                    uni.showModal({
                        title:'提示',
                        content:'你还没有登录',
                        success:function(res){
                            if(res.confirm){
                                console.log('点击了确定')
                                // this.$options.methods.goLogin()
                                // this.$options.methods.test2.bind(this)();
                                _that.goLogin()
                                // this.goLogin()
                            }else{
                                console.log('点击了取消')

                            }
                        }
                    })
                }
			}
		}
	}
</script>

<style>
.root{
	width: 90vw;
	display: block;
	height: 100vh;
	margin:10rpx auto;
}
.shang{
	height: 450rpx;
	width: 100vw;
	padding: 20rpx auto;
	background-color: #fff;
	display: flex;
}
.directory-dot{
	display: inline-block;
	width: 8rpx;
	height: 8rpx;
	margin: 10rpx 5rpx; 
	border-radius: 50%;
	background-color: #000;
}
.info-count{
	height: 400rpx;
	margin-top: 10rpx;
	overflow:hidden;
	display: block;
}
image{
	height: 300rpx;
	width: 200rpx;
	border-radius: 8rpx;
	border:1px #b2b2b2 solid;
}
.jianjie{
	margin-top: 10rpx;
	padding: 10rpx;
}
.mid{
	/* height: 300rpx; */
	padding: 20rpx auto;
	background-color: #fff;
	display: block;
	width: 90vw;
	/* border--color: #e8e8e8; */
	border-top: 22rpx rgb(248, 248, 248) solid;
}
.label{
	display: flex;
	padding: 20rpx;
	margin: 10rpx;
	justify-content: left;
	align-items: center;
	overflow-x: auto;
}
.label-item{
	background-color: rgba(30,32,35,.06);
	border-radius: 120rpx;
	padding: 20rpx;
	margin-right: 15rpx;
}
.xia{
	height: 260rpx;
}
.h{
	height: 50rpx;
	margin: 30rpx;
}
.more-detail{
	display:flex;
	line-height:60rpx;
	text-align: center;
	    font-family: -apple-system,PingFang SC,Helvetica Neue;
}
.info-num{
	color:#333;
	font-size: 45rpx;
}
.info-text{
	color: #b2b2b2;
	
}
.book-info{
	box-sizing: border-box;
	padding:10rpx 0 10rpx 30rpx
}
.info-division{
	padding: 10rpx;
}
.book-description{
	width: 90vw
}
.buttom{
	position: fixed;
	height: 100rpx;
	width: 80vw;
	bottom: 30rpx;
	left:10vw;
	/* margin: 0 auto; */
	
}
</style>
