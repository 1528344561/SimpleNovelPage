<template>
    <view class="">
    	
    </view>
</template>
<script>
	export default {
		data() {
			return {
				falg:false,
				ico:[
					'../../static/by.png',
					'../../static/zy.png'
				],
				userInfo:{
					name:'',
					pwd:'',
				}
			}
		},
		methods: {
			changeFlag(){
				this.flag=!this.flag
			},
			
	}
}
</script>
