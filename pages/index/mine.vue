<template>
	<view>
		<view class="header">
			<h1>欢迎您:{{user.username}}</h1>
			<!-- <h2>电话：{{user.phoneNumber}}</h2> -->
            <view class="avatar">
                <image :src="user.userImg" style="width: 400rpx; height: 400rpx; "></image>
            </view>
		
        </view>
	</view>
</template>
import 
<script>
    import {getDataInfo} from '@/utils/auth.js'
	export default{
		onLoad(){
            this.user.username = getDataInfo('username');
        },
        data(){
			return{
				user:{
					username:'cj',
					password:'23',
					phoneNumber:'111',
                    userImg:'/static/default.png'
				}
			}
		},
		method:{
			
		}
	}
</script>
<style>
.header{
	width: 100vw;
	/* height:40vh; */
}
.header h1{
	text-align: center;
}
.header h2{
	bottom: 0;
	text-align: center;
}
.avatar{
    box-sizing: border-box;
    padding: 170rpx;
}
</style>