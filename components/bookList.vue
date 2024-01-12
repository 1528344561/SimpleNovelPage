<template>
    <view class="book-list-root">
        <text style="font-size: 40rpx; font-weight: 600;">{{ title }}</text>
        <view class="book-list">
                
                <view class="book-item" @click="gotoPage(item)" v-for="(item,idx) in books" :key="idx">
                    <image :src="item.bookImg" style="width: 200rpx;height: 300rpx;"></image>
                    <view style="text-align: center; color: #858181;" >{{ item.bookName}}</view>
                </view>
            </view>
    </view>
			
</template>
<script>
    export default{
        name:'bookList',
        props:{
            title:{
                type:String,
                default:'这是标题'
            },
            books:{
                type:Array,
                default:[]
            }
        },
        data(){
            return {

            }
        },
        methods:{
            gotoPage(item){
                // console.log(item)
  
                uni.navigateTo({
                    url:'/pages/index/read'+"?bookName="+item.bookName+"&bookId="+item.id
                })
            }
        }
    }
</script>
<style scoped>
.book-list-root{
    margin-top: 10rpx;
}
.book-list{
    width: 90vw;
	display: flex;
	overflow-x: auto;
}
.book-item{
	display: flex;
	flex-direction: column;
	flex-shrink: 0;
	box-sizing: border-box;
	padding: 20rpx 10rpx 0 0;
	/* align-items: center; */
}
</style>