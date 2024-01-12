<template>
	<view class="login-container">
		<!-- <uni-forms ref="form" :modelValue="formData">
			<uni-forms-item label="姓名" name="name">
				<uni-easyinput type="text" v-model="formData.name" placeholder="请输入姓名" />
			</uni-forms-item>
			<uni-forms-item label="密码" name="password">
				 <uni-easyinput type="password" v-model="formData.password" placeholder="请输入密码" />
			</uni-forms-item>
		</uni-forms> -->
		<button @click="save">登录</button>
	</view>
</template>

<script >
	import { reactive, ref } from 'vue'   
		
	const formData = ref({
		name: '',
		password: ''
	}) 
	
	// 触发提交表单 
	save(){
		setTimeout(()=>{
			uni.showToast({
				title:'登录成功',
				duration:2000
			})
		},2000)
	}
</script> 
