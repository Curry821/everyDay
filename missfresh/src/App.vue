<template>
  <div id="app">
    <div class="tab-nav">
        <router-link to="/home" class="tab-item home">
            <i class="icon tab-img" style="background-image: url(src/assets/img_20171101103953708.png);"></i>
            <span class="tab-title">首页</span>
        </router-link>
        <router-link class="tab-item fresh" to="/freshNews">
            <i class="icon tab-img" style="background-image: url(src/assets/img_20171101104300925.png);"></i>
            <span class="tab-title">新鲜事</span>
        </router-link>
        <router-link class="tab-item vip" to="/vip">
            <i class="icon tab-img" style="background-image: url(src/assets/img_20171028204348487.png);"></i>
            <span class="tab-title">会员+</span>
        </router-link>
        <router-link to="/cart" class="tab-item cart">
            <i class="icon tab-img" style="background-image: url(src/assets/img_20171101103742451.png);"></i>
            <span class="tab-title">购物车</span>
            <span class="tab-cartNum" v-if="totalCount > 0">{{ totalCount }}</span>
        </router-link>
        <router-link to="/login" class="tab-item mine">
            <i class="icon tab-img" style="background-image: url(src/assets/img_20171101111740549.png);"></i>
            <span class="tab-title">
                我的
                <span class="tab-red-dot"></span>
            </span>
            
        </router-link>
         <router-link to="/map">
            地图
        </router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {

    name: 'app',
    data(){
        return{
            
        }
    },
    computed:{
        totalCount(){
            return this.$store.getters.totalCount;
        }
    }
}
</script>

<style>
/*样式重置*/
img[lazy=loading]{
    opacity:0;
}
img[lazy=loaded]{
    opacity:1;
}
*{
    margin:0;
    padding:0;
}
html, body {
    font-family: "-apple-system","Helvetica Neue",Roboto,"Segoe UI",sans-serif;
    color: #000;
}
body{
    font-size: 14px;
    word-wrap: break-word;
}
a{
    color:#333;
    outline: none;
    text-decoration: none;
}
a:hover{
    color:#333;
}
ul,ol{
    list-style: none;
}
input,textarea{
    outline: none;
}
a,button,input,optgroup,select,textarea {
    -webkit-tap-highlight-color:rgba(0,0,0,0); 
    /*去掉a、input和button点击时的蓝色外边框和灰色半透明背景*/
}
img{
    border: none;
}
a, img {
    -webkit-touch-callout: none; 
    /*禁止长按链接与图片弹出菜单*/
}
.clear:after{
    content: ".";
    visibility: hidden;
    height: 0;
    clear: both;
    display: block;
}
.scroll::-webkit-scrollbar{
    display: none;
}
/*---------------------网站底部固定导航条-------------------*/
.tab-nav{
    width: 100%;
    padding-top: 2px;
    display: flex;
    justify-content: center;
    transform: translate3d(0,0,0);
    position: fixed;
    bottom: 0;
    z-index: 5;
    height: 49px;
    line-height: 49px;
    background-position: top;
    background-size: 100% 1px;
    background-repeat: no-repeat;
    background-color: #fff;
    color: #444;
    box-shadow: 0 0 10px rgba(0,0,0,.06);
}
.tab-item{
    -webkit-box-flex:1;
    flex: 1;
    display: block;
    overflow: hidden;
    max-width: 150px;
    height: 100%;
    text-align: center;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-weight: 400;
    font:inherit;
}
.tab-nav .tab-item{
    opacity: 1;
    color:#959595;
    position: relative;
    font-size: 10px;
    line-height: 14px; 
}
.tab-item .icon{
    display: block;
    margin:0 auto;
    height: 32px;
    font-size: 32px;
}
.tab-nav .home.router-link-active .tab-img{
    background-image: url(./assets/img_20171101103800481.png)!important;
}
.tab-nav .fresh.router-link-active .tab-img{
    background-image: url(./assets/img_20171101104242664.png)!important;
}
.tab-nav .vip.router-link-active .tab-img{
    background-image: url(./assets/img_20171028204306211.png)!important;
}
.tab-nav .cart.router-link-active .tab-img{
    background-image: url(./assets/img_20171101103712887.png)!important;
}
.tab-nav .mine.router-link-active .tab-img{
    background-image: url(./assets/img_20171101111723211.png)!important;
}
.tab-item .tab-img{
    background: 50% no-repeat;
    width: 23px;
    background-size: auto 23px;
}
.tab-title{
    font-size: 10px;
    color:#262626;
}
.tab-red-dot{
    position: absolute;
    top:2px;
    right:33%;
    background: #ff4891;
    width: 7px;
    height: 7px;
    border-radius: 50%;
}
.tab-cartNum{
    position: absolute;
    top:0;
    right: 20%;
    background-color: #ff4891;
    color: #fff;
    height: 16px;
    width: 16px;
    line-height: 16px;
    border-radius: 8px;
    font-size: 12px;
    border:1px solid #fff;
    box-sizing: content-box;
}
</style>
