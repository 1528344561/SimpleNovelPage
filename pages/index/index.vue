<template>
	<view class="root">
		<view class="content">
			<view class="home-title">
				书架
			</view>

			<image>
				
			</image>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				books:[{
				id:0,
				bookImg:'../../static/book/book_0.png',

			}
			]
			}
		},
		methods:{

		}
	}
</script>

<style>
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
