<template>
	<view class="root">
		<scroll-view class="list"
		scroll-y >
		<!-- 动态绑定class要满足为真的条件才生效  item.id-->
			<view class="li-item" 
			:class="{active : indent===index}"
			v-for="(item,index) in navList":key="item.id"
			@click="change(index,item.id)"
			>
				{{item.tagName}}
			</view>
		</scroll-view>
		<view class="booklist">
			<view class="gd-item" v-for="item in goodlist":key="item.id">
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
</template>

<script>
	
	export default {
		data() {
			return {
				
				indent:0,
				navList:[
					{
					tagName:'玄幻',
					id:0,
					},
					{
						tagName:'历史',
						id:1,
					},
					{
						tagName:'情感',
						id:2,
					},
					{
						tagName:'励志',
						id:3,
					},
					{
						tagName:'惊悚',
						id:4,
					}
				],
				copylist:[],
				cartList:[],
				goodlist:[
					{
						id:1,
						bookImg:'../../static/goods8.png',
						bookName:'书籍1',
						author:'q',
						bookTag:['励志'],
					},
					{
						id:2,
						bookImg:'../../static/goods7.png',
						bookName:'书籍2',
						author:'w',
						bookTag:['情感'],
					},
					{
						id:3,
						bookImg:'../../static/goods6.png',
						bookName:'书籍3',
						author:'e',
						bookTag:['玄幻'],
					},
					{
						id:4,
						bookImg:'../../static/goods5.png',
						bookName:'书籍4',
						author:'r',
						bookTag:['惊悚'],
					}
				]
			}
		},
		//uniapp中的生命周期函数 页面渲染的时候加载执行里边的逻辑或方法
		//onLoad在页面完全美哟有缓存的时候执行
		
		onLoad(){
			this.copylist=[
				...this.goodlist
			]
		},
		//只要进入界面就会执行 onShow()
		methods: {
			change(index,id){
				this.indent=index
				this.goodlist=[...this.copylist]
				//箭头函数一个参数 可以省略括号 数组.filter(回调函数) 过滤方法但会的是一个新数组
				
				this.goodlist=this.goodlist.filter(item=>{
					if(item.id===id)
					{
						return item
					}
					else if(id===0){
						return item
					}
						
				})
			}
		}
	}
</script>

<style>
.root{
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
</style>
