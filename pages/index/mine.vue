<template>
	<view>
		<view class="header">
			<h1>欢迎您:{{user.username}}</h1>
			<h2>电话：{{user.phoneNumber}}</h2>
		</view>
	</view>
</template>
import 
<script>
	export default{
		data(){
			return{
				user:{
					username:'cj',
					password:'23',
					phoneNumber:'111'
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
	height:40vh;
}
.header h1{
	text-align: center;
}
.header h2{
	bottom: 0;
	text-align: center;
}
</style>