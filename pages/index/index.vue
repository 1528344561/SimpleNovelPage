<template>
	<view class="root">
		<view class="top-circle-img">
			<swiper circular="true" indicator-dots="true" autoplay="true" interval="5000">
				<swiper-item class="sw-item" v-for="(item,index) in topImgArr" :key="index">
					<image class="sw-img" :src="item" mode=""></image>
				</swiper-item>
				
			</swiper>
		</view>
		<view class="content">
			<view class="home-title">
				书架
			</view>

			<bookList title="主编力荐" :books="books"></bookList>
			<bookList title="本周推荐" :books="books"></bookList>

		</view>
	</view>
</template>

<script>
	import bookList from '../../components/bookList.vue'
	import {getBookList} from '@/api/book.js'
	import {get}
	export default{
		components:{
			bookList
		},
		onShow(){

			// service().then(res=>{
            //         console.log(res)
            //     }).catch(err=>{
            //         console.log(err)
            //     })
			
		},
		onLoad(){
			getBookList().then(res=>{
				this.books = res.data
			}).catch(err=>{

			})
		},
		data(){
			return{
				topImgArr:[],
				books:[{
					id:0,
					bookImg:'../../static/books/book_0.png',
					bookName:'特工易冷'
				}
				],
			}
		},
		methods:{
			handleClickBarRightButton(){
				console.log('ok')
			}
		}
	}
</script>

<style >
.root{
	width: 100vw;
	height: 100vh;
	background-color: #faf7f7;
}
.top-circle-img{
	display: block;
	width: 90vw;
	height: 20vh;
	margin: 0 auto;
}
.top-circle-img image{
	width: 90vw;
	height: 20vh;
}
.content{
	width: 90vw;
	margin: 0 auto;
}
.home-title{
	font-size: 70rpx;
	font-weight: 500;
	font-family: "黑体";
}

</style>

