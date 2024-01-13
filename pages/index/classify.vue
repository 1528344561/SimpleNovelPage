<template>
	
	<view class="root">
		<u-search 
			placeholder="搜索书籍" 
			v-model="keyword" 
			clearabled
			@custom="search"
			@clear="search"
		></u-search>
		<view class="main-body">
			<scroll-view class="list"
		scroll-y >
		<!-- 动态绑定class要满足为真的条件才生效  item.id-->
			<view class="li-item" 
			:class="{active : indent===index}"
			v-for="(item,index) in navList" :key="item.id"
			@click="change(index,item.id)"
			>
				{{item.tagName}}
			</view>
		</scroll-view>
		<view v-if="!goodlist.length" style="width: 50%; margin: 30vh auto;">
			<u-empty text="空空如也~" mode="search"></u-empty>
		</view>	
		<view class="booklist">
			<view class="gd-item" v-for="item in goodlist" :key="item.id">
				<view @click="gotoPage(item)" class="book-list-item">
					<image :src="item.bookImg" mode=""></image>
					<view class="sub-item">
						<text>{{item.bookName}}</text>
						<view class="sml-item">
							<text>作者：{{item.author}}</text>
						</view>
					</view>
				</view>
			</view>
		</view>
		</view>
	</view>
</template>

<script>
	import {getTagList,getBookByTagList} from '@/api/tag.js'
	import {getBookList,getBookListByBookName} from '@/api/book.js'
	export default {
		onLoad(){
			this.copylist=[
				...this.goodlist
			]
			getTagList().then(res=>{
				console.log(res)
				this.navList=this.navList.concat(res.data)
				console.log(this.navList)
			})
			// getBookList().then(res=>{
			// 	this.goodlist =  res.data
			// })
			this.search()
		},
		data() {
			return {
				
				indent:0,
				navList:[
					{
						id:-1,
						tagName:'全部'
					}
				],
				copylist:[],
				cartList:[],
				goodlist:[],
				keyword:'',
			}
		},
		//uniapp中的生命周期函数 页面渲染的时候加载执行里边的逻辑或方法
		//onLoad在页面完全美哟有缓存的时候执行
		
		//只要进入界面就会执行 onShow()
		methods: {
			change(index,id){
				if(id!=-1)
				{
					getBookByTagList(id).then(res=>{
						this.goodlist = res.data
					})
				}else{
					getBookList().then(res=>{
						this.goodlist = res.data
					})
				}
				this.indent=index
				// this.goodlist=[...this.copylist]
				// //箭头函数一个参数 可以省略括号 数组.filter(回调函数) 过滤方法但会的是一个新数组
				
				// this.goodlist=this.goodlist.filter(item=>{
				// 	if(item.id===id)
				// 	{
				// 		return item
				// 	}
				// 	else if(id===-1){
				// 		return item
				// 	}
						
				// })
			},
			gotoPage(item){
                // console.log(item)
  
                uni.navigateTo({
                    url:'/pages/index/bookDetail?'+"bookId="+item.id
                })
			},
			search(){
				// debugger
				// console.log(bookName)
				if(this.search){
						getBookListByBookName(this.keyword).then(res=>{
							this.goodlist = res.data
							// console.log(res.data)
						})
				}
			}
		}
	}
</script>

<style scoped>
.root{
	/* display: flex; */
}
.main-body{
	display: flex;
}
.list{
	width: 200rpx;
	height: calc(100vh - 90px);
	border-right: 1px solid #ececec;
}
.li-item{
	height: 80rpx;
	text-align:center;
	line-height: 80rpx;
	border-bottom: 1px solid #ececec;
}
.li-item.active{
	background-color: #53b175;
	color: #fff;
	border-color: rgba(83, 177, 117, .2);
}
.booklist{
		flex: auto;
		padding: 0 40rpx;
	}
	.gd-item{
		display: flex;
		padding: 40rpx 0;
	}
	.gd-item image{
		width: 180rpx;
		height: 180rpx;
	}
	.sub-item{
		flex: auto;
		padding-left: 15rpx;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
	.sml-item{
		display: flex;
		justify-content: space-between;
	}
	.book-list-item{
		display: flex;
	}
</style>
