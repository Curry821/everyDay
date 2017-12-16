<template>
	
</template>
<script>
	export default{
		data(){
			return{
				props:['item']
			}
		}
	}
</script>
<style>
	.pane,.view{
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: #fff;
		overflow: hidden;
	}
	.pane{
		background-color: #f9f9f9;
	}
	.product-detail-page .product-header .title {
	    font-size: 17px;
	    color: #4b4b4b;
	    left: 46px;
	    right: 46px;
	}
	.product-header .share-img {
	    line-height: 34px;
	    position: fixed;
	    top: 5px;
	    right: 10px;
	}
	.product-header .share-img img {
	    width: 22px;
	}
	/*-------------------------商品轮播图----------------------------*/
	.product-detail .swiper-slide img{
		width: 50%;
		display: block;
		margin:0 auto;
	}
	.product-detail-page .scroll-content{
		top:40px;
		background: #fff;
	}
	.product-detail .promotion-tag {
	    position: absolute;
	    top: 0;
	    left: 10px;
	}
	.product-detail .promotion-tag img {
	    height: 44px;
	}
	.product-detail .textures{
		/*background: url(../img/product-bg.png) no-repeat;*/
		background-size: 100% 106%;
	}
	.product-detail .textures .box {
	    margin-left: 20px;
	    padding-left: 5px;
	    padding-right: 22px;
	}
	.product-detail .textures .title {
	    padding-top: 32px;
	    padding-bottom: 16px;
	    overflow: hidden;
	}
	.product-detail .textures .title .mark-img {
	    width: 13px;
	    height: 13px;
	    vertical-align: super;
	}
	.product-detail .textures .title .title-product {
	    font-size: 21px;
	    color: #969696;
	}
	.product-detail .textures h2 {
	    font-size: 16px;
	    color: #262626;
	    margin: 0;
	    padding-bottom: 6px;
	    font-weight: 500;
	}
	.product-detail .textures p {
	    margin: 0;
	    color: rgb(255, 72, 145);
	}
	.product-detail .textures .price-box {
	    color: #ff4891;
	    font-size: 22px;
	    border-bottom: 1px solid #f5f5f5;
	    padding-bottom: 8px;
	}
	.product-detail .textures .price-box .price-red {
	    color: rgb(248, 188, 0);
	    font-size: 21px;
	    line-height: 20px;
	    padding-right: 5px;
	    padding-bottom: 15px;
	}
	.product-detail .textures .price-box .price-product{
		font-size:22px;
	}
	.product-detail .textures .price-box .price-label,.price-box .rmb{
		font-size: 12px;
	}
	.product-detail .textures .price-box .sale-num {
	    color: #969696;
	    font-size: 12px;
	    float: right;
	}
	.product-detail .textures .product-news {
	    width: 100%;
	    height: 44px;
	    line-height: 44px;
	}
	.product-detail .textures .product-news .product-model {
	    color: #4c4440;
	    line-height: 24px;
	    font-size: 13px;
	    border-top: none;
	}
	.product-detail .textures .product-news .product-mess {
	    line-height: 44px;
	    width: 33%;
	    float: left;
	    color: #969696;
	    display: block;
	    white-space: nowrap;
	    overflow: hidden;
	    -ms-text-overflow: ellipsis;
	    text-overflow: ellipsis;
	    text-align: left;
	}
	.product-detail .textures .product-news .product-mess img {
	    width: 18px;
	    vertical-align: sub;
	}
	.product-detail .textures .product-news .sale-volume {
	    text-align: center;
	    line-height: 44px;
	    width: 33%;
	    float: left;
	    color: #969696;
	    display: block;
	    white-space: nowrap;
	    overflow: hidden;
	    -ms-text-overflow: ellipsis;
	    text-overflow: ellipsis;
	}
	.product-detail .textures .product-news .sale-volume img {
	    width: 18px;
	}
	.product-detail .textures .product-news .product-message {
	    line-height: 44px;
	    width: 33%;
	    float: left;
	    color: #969696;
	    display: block;
	    white-space: nowrap;
	    overflow: hidden;
	    -ms-text-overflow: ellipsis;
	    text-overflow: ellipsis;
	    text-align: right;
	}
	.product-detail .textures .product-news .product-message img {
	    width: 18px;
	    vertical-align: sub;
	}
	.product-detail .textures .product-news .product-model span.tag {
	    color: #969696;
	    font-size: 12px;
	}
	/*--------------------------优惠活动-----------------------------*/
	.product-membercard {
	    border-top: 10px solid #f5f5f5;
	    border-left: 10px solid #f5f5f5;
	    border-right: 10px solid #f5f5f5;
	}
	.product-membercard .product-membercard-on {
	    height: 54px;
	    text-align: left;
	    padding: 0 15px;
	    border-bottom: 1px solid #f5f5f5;
	    display: table;
	    width: 100%;
	}
	.product-membercard .product-membercard-on .membercard-none-img {
	    vertical-align: middle;
	    display: table-cell;
	}
	.product-membercard .product-membercard-on .membercard-none-img img {
	    width: auto;
	    height: 18px;
	}
	.product-membercard-on .title{
	    display: inline-block;
	    display: table-cell;
	    vertical-align: middle;
	    padding: 0 10px;
	    line-height: 1.2;
	    width: 90%;
	    font-family: "Helvetica Neue",Helvetica,Arial,"Lucida Grande",sans-serif;
	}
	/*--------------------------分享活动-----------------------------*/
	.product-detail-page .integral {
	    width: 100%;
	    border-top: 10px solid #f5f5f5;
	    border-left: 10px solid #f5f5f5;
	    border-right: 10px solid #f5f5f5;
	    padding-bottom: 5px;
	}
	.integral .integral-detail {
	    padding: 0 10px;
	    line-height: 44px;
	}
	.integral .integral-detail .double-integral {
	    height: 15px;
	    vertical-align: text-bottom;
	    padding-right: 7px;
	}
	.integral .integral-detail .integral-title {
	    color: #262626;
	    font-size: 14px;
	}
	.integral .integral-detail .integral-click {
	    width: 22px;
	    margin-top: -3px;
	}
	.integral .un-share {
	    padding: 0 10px;
	}
	.integral .un-share .un-share-content {
	    background: #FFF4F8;
	    display: flex;
	    flex-direction: row;
	    align-items: center;
	}
	.integral .un-share .un-share-content .un-share-left {
	    width: 50%;
	    text-align: center;
	    margin: 10px;
	    color: #FF4891;
	    background: #fff;
	    position: relative;
	}
	.integral .un-share .un-share-content .un-share-left-auto {
	    width: auto;
	    height: 46px;
	}
	.integral .un-share .un-share-content .un-share-left-auto img {
	    height: 100%;
	    width: auto;
	}
	.integral .un-share .un-share-content .un-share-left .shadow {
	    width: 100%;
	    height: 100%;
	    position: absolute;
	    top: 0;
	    left: 0;
	    z-index: 99;
	    display: flex;
	    align-items: center;
	    justify-content: center;
	    background-color: rgba(255,255,255,.8);
	    display: none;
	}
	.integral .un-share .un-share-content .un-share-right {
	    width: auto;
	    margin: 10px;
	    color: #FF4891;
	    font-size: 12px;
	}
	/*-------------------------分享按钮-----------------------*/
	.integral .share-btn {
	    line-height: 23px;
	    padding-top: 5px;
	    text-align: center;
	    color: #FF4891;
	    font-size: 14px;
	}
	.integral .share-btn span:after {
	    content: '';
	    display: inline-block;
	    width: 0;
	    height: 0;
	    border-top: 3px solid transparent;
	    border-left: 3px solid red;
	    border-bottom: 3px solid transparent;
	    position: relative;
	    top: -2px;
	    left: 5px;
	}
	/*-------------------亮点---------------------*/
	.product-detail-page .light-pots {
	    background: #fff;
	    padding: 6px;
	    border-top: 10px solid #f5f5f5;
	    border-left: 10px solid #f5f5f5;
	    border-right: 10px solid #f5f5f5;
	}
	.light-pots .list-title {
	    font-size: 16px;
	    color: #262626;
	    clear: both;
	    padding-left: 20px;
	    text-align: center;
	    line-height: 36px;
	}
	.list-title .bright-img {
	    width: 16px;
	    height: 16px;
	}
	.light-pots .commodity-details {
	    clear: both;
	    padding: 0 14px;
	    /*background: url(../img/product-bg2.png) no-repeat;*/
	    background-size: 100% 100%;
	}
	.light-pots .commodity-details li {
	    color: #262626;
	    line-height: 40px;
	    font-size: 14px;
	    border-bottom: 1px solid #f5f5f5;
	    position: relative;
	}
	.light-pots .commodity-details li:first-child {
	    padding-top: 20px;
	}
	.commodity-details li .disc {
	    width: 5px;
	    height: 5px;
	    border-radius: 50%;
	    background: #c6c6c6;
	    display: inline-block;
	    margin-right: 3px;
	    vertical-align: middle;
	    margin-top: -3px;
	}

	/*-----------------------商品详情---------------------*/
	.product-detail-page .graphic-details {
	    border: 10px solid #F5F5F5;
	    width: 100%;
	}
	.graphic-details .top-title {
	    text-align: center;
	    width: 100%;
	    font-size: 16px;
	    color: #262626;
	    clear: both;
	    position: relative;
	    margin: 0 auto;
	    line-height: 44px;
	}
	.graphic-details .content-detail {
	    margin: 0 20px;
	}
	.graphic-details .top-title .line {
	    text-align: center;
	    position: relative;
	    display: inline-block;
	    padding: 0 20px;
	}
	.graphic-details .content-detail .detail-item {
	    color: #262626;
	    line-height: 40px;
	    font-size: 14px;
	    border-top: 1px solid #f5f5f5;
	}
	.graphic-details .content-detail .detail-item .detail-info {
	    color: #262626;
	    padding-left: 5px;
	}
	/*--------------------商品详情的固定底部-------------------*/
	.product-detail-page .bar-footer{
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		position: fixed;
		bottom: 0;
		height: 47px;
		width: 100%;
		z-index: 9;
		background: #212121;
	}
	.product-bar-footer .buttons {
	    width: 100%;
	    background: #fff;
	    border-top: 1px solid #e3e3e5;
	    display: flex;
	    justify-content: center;
	}
	.product-bar-footer .buttons .shopping-product {
	    padding: 0 11px 0 19px;
	    /*background: url(../img/shop-icon.png) center no-repeat;*/
	    background-size: 22px 22px;
	    display: block;
	    color: #fff;
	    width: 54px;
	}
	.product-bar-footer .buttons button {
	    border: none;
	    color: #fff;
	    font-size: 16px;
	    display: block;
	    flex: 1;
	}
	.product-bar-footer .buttons button.orange {
	    background: #ff4891;
	    left: 0;
	}
</style>