# html


## 单位
px是绝对的像素单位
rpx是相对像素 是微信小程序独有的单位 在浏览器中会自动转化


vw是视口的大小单位 根据视口大小调整,是相对的
vh也是

# JavaScript
## 变量
```js
    // 五大基本类型
    // 基本类型是存放到栈内,
    // 引用类型存放到堆内
    
    var a = 1
    var b = '你好'
    var c = undefined
    var d = null // objcet 类型
    var e = true //boolean

    //引用类型
    var obj = {
        name:'Jhon',
        age:18
    }

    delete obj.age //删除对象的属性

    // 若要添加属性,直接用 . 就可以
    obj.sex = '男'
```

### 声明变量
#### var
- 允许用户先使用后声明
#### let
- 不允许用户先使用后声明

## 模板字符串
```js
export function(num){
    return service(`/pages?pageNum=${num}`)
}
```
# CSS
## 盒子模型
### 盒模型 标准盒模型与怪异盒模型

#### 标准盒模型 (浏览器默认)
标准盒模型 实际宽度 = 盒模型的width + 盒模型的padding
            
#### 怪异盒模型 
怪异盒模型 实际宽度 = 盒模型的width(包含了内容宽度+padding+border所有的占位的属性值都计算到width)
```css

    /* height: auto; */
    /* 标准盒模型.浏览器默认 */
    box-sizing: content-box
    

    /* 把标准盒模型变成怪异盒模型 */
    box-sizing: border-box;
    /* 会把 border padding 计算到width,height里面,而非直接在外面再加指定的像素*/
    /* 不会计算margin到width 和height */
```

### 块盒标签
块盒标签:

    1-可设置宽高
    2-可设置外边距
    3-如果不设置宽高则继承父级元素宽度
    4-默认独占成行
    5-相邻元素外边距不叠加,有大的就取大的
```html
    <!-- 小盒子margin击穿问题 -->
    <!-- 解决方案有三个
        1.加一个div
        2.父元素加border属性也可以
        3.父元素加padding属性也可以 -->
    <div class="big">
        <div class="sml">
            1
        </div>
    </div>

```

### 行盒标签
行盒标签

    1-不可以设置宽高
    2-只能设置左右外边距,不能设置上下外边距
    3-宽度继承内容的宽度
    4-不独占行
    5-相邻元素外边距叠加

```html
    <!-- span标签上下的padding不参与【占位】计算 
        也就是上下会与其他元素重叠-->
    <span class="sp1">
        床前明月光
    </span>
    <span class="sp2">
        疑是地上霜
```
### 弹性盒子
弹性盒子默认具有主轴和交叉轴,其方向如下所示

            +------------------->主轴
            |
            |
            |
            |
            |
            v
            交叉轴
```css

/* 改变主轴的方向 默认是row 从左到右,row-reverse 是从右到左*/
flex-direction: row-reverse;

/* 改为colum则主轴和交叉轴反过来了 */
flex-direction: column;
/* justify-content 控制 弹性项 在弹性容器内 主轴 的排列方式 */
justify-content: space-between;

/* align-items   控制 弹性项 在弹性容器内 交叉轴 的对齐方式 */
align-items: center; /* flex-start,flex-end */

/*默认  弹性容器主轴起始点对齐 */
justify-content: flex-start;


/* 两端对齐 */
justify-content: space-between;

```
#### 横向滚动机制

/* 弹性容器横向滚动机制 */
display: flex;
overflow-x: auto;
#### 弹性缩放
当父容器变成弹性盒子，内部的子元素会自动进行 弹性缩放

/* 没有缩放 默认是1*/
flex-shrink: 0;/* 关闭缩放*/

#### 弹性容器让组件适应剩下的容器
/* 自适应剩下的区域,但是也可能挤压旁边的内容 */
flex:auto;

## 定位
定位属性 :position

静态定位:是元素的默认定位:static

相对定位
    relative
    相对于自身(左上角)定位
    移动之后,原来的位置是保留(占位的)
    
    作用是给绝对定位提供参照坐标 
绝对定位
    绝对定位的参照是加了 相对定位或者 绝对定位 或者加了 固定定位的
    和其中的任意一种定位
固定定位
    fixed
粘性定位

left / right / top / bottom
这四个方向的属性生效条件是?  -> 加了 非 静态定位的时候
## 选择器
### 继承选择器

### 后代选择器
#### 后代选择器 只选择直系子代

.bg >.aa{
    
}
#### 后代选择器 选择第i个直系子代
```css
/* css类选择器 选了第三个li */
li:nth-child(3){
    background-color:cornflowerblue;
}
```
## 常见问题
### 让组件水平居中的方法

1. margin:0 auto

2. 定位法
```css
.rectangle{
	width: 50px;
	position: relative;
	left: 50%;
	/* 左移一半 上面定义了width,这里左移宽度的一半*/
	/*写法一*/ margin-left: - 25px;	
    /* 写法二 */ transform: translateX(-50%);
}
```

### 让组件垂直居中对齐的方法
1.给出行高,然后让text-align:center
```css

.common-tit{
    display: flex;

    text-align: center;
    line-height: 60rpx;
}
```
2. align-items: center;
```css
.common-tit{
    display: flex;
    align-items: center;
}
```
# Vue

### 根标签
在 Vue 2中,一个页面的根标签外,有且只有一个
```html
 <!-- 模板组件的渲染标签 / 模板标签 - 在一个页面的根标签外,有且只有一个 -->
<template>
	
	
	 <!-- 根标签  在vue2版本具有唯一性,vue3版本不唯一  -->
	 <!-- view标签对标html的div标签 -->
	<view class="content">

    </view>
<template>
```

绑定事件要用@ 不要用:
# Uniapp
## 生命周期

uniapp的生命周期函数
 - onLoad 在页面完全没有缓存的时候执行 刚进入页面渲染的时候加载执行里边的方法或逻辑,后面再访问不会执行,除非刷新
 - onShow 只要跳转进来这个页面,就会执行

## 跨域


