<script >
    export default{
        data(){
            return {
                showLoading:false,
                loadingText:'加载下一章',
                loadingFlag:0
            }
        },
        methods:{
            loadMoreData(){
                this.showLoading=true
                alert('hhhh')
            },
            tolower(){
                alert('hhhh')

                this.loadingFlag++
            }
        }
    }

</script>
<template>
    <view>
            
        <scroll-view :style="{ height: 990 + 'px' }" scroll-y
            class="scrollv"
            @scrolltolower="tolower"
            lower-threshold="10"
            @scroll="watchScroll">  
        
        <view>
        <view v-if="loadingFlag == 1">数据加载中...</view>
        <view v-if="loadingFlag == 2">没有更多的数据...</view>
        </view>
        </scroll-view>
    </view>

</template>