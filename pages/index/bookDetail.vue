<template>
	<view class="root">
		<view class="shang">
			<image class="img" src="../../static/books/book_0.png"></image>
			<view class="book-info">
				<view class="info-count">
				<h1>{{book.bookName}}</h1>

						<view style="color: rgba(0,0,0,.4); font-size:32rpx">{{book.authorName}}编写</view>
						<view class="more-detail">
							<view class="info-num">{{book.wordCnt}}</view><view class="info-text">万字</view>
							<view class="info-division" style="color: rgba(0,0,0,.4); font-size:32rpx">|</view>
							<view class="info-num">{{book.ReadingNum}}</view><view class="info-text">万人在读</view>
						</view>
					</view>
				</view>
			</view>
		<view class="mid">
			<h1>简介</h1>
			<view class="jianjie">
				{{book.bookDescription}}
			</view>
			<view class="label">
				<view v-for="(item,index) in book.bookTag" :key="index">
						<view class="label-item" >{{item}}</view>
				</view>
				
			</view>
		</view>
		<view>目录<span class="directory-dot"></span>{{capter.totalNum}}</view>
		<view class="xia">
			<scroll-view scroll-y="true" >
				<view class="h" v-for="(item,index) in capter.capterList" :key="index">
					<text>{{item.capterTitle}}</text>
				</view>
			</scroll-view>
		</view>
		<view class="buttom">
			<button>开始阅读</button>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				book:{
					id:0,
					bookName:'测试',
					bookImg:'/static/books/book_0.png',
					wordCnt:140,
					ReadingNum:99,
					authorName:"陈杰",
					bookDescription:"balabala...................",
					bookTag:['都市','玄幻']
				},
				capter:{
					totalNum:4,
					capterList:[
						{
							capterNum:0,
							capterTitle:"第一章"
						},{
							capterNum:1,
							capterTitle:"第二章"
						},{
							capterNum:2,
							capterTitle:"第三章"
						},{
							capterNum:3,
							capterTitle:"第四章"
						},
					]
				}
			}
		},
		methods: {
			
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
.img{
	height: 300rpx;
	width: 250rpx;
	border-radius: 16rpx;
}
.jianjie{
	margin-top: 10rpx;
	padding: 10rpx;
}
.mid{
	height: 300rpx;
	width: 100vw;
	padding: 20rpx auto;
	background-color: #fff;
	display: block;
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
.buttom{
	position: fixed;
	height: 100rpx;
	width: 80vw;
	bottom: 30rpx;
	left:10vw;
	/* margin: 0 auto; */
	
}
</style>
