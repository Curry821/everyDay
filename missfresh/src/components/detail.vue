<template>
	<div id="detail">
		<div class="modal-backdrop">
			<!-- <div class="modal-backdrop-bg"></div> -->
			<div class="modal-wrapper">
				<div class="product-detail-page pane">
					<!-- 头部 -->
					<header class="product-header bar bar-header">
						<div class="buttons buttons-left">
							<button class="button back" @click="back()"></button>
						</div>
						<div class="title-list">
							<div class="title-detail detail-title-active">商品详情</div>
							<div class="title-safe">安心保障</div>
						</div>
						<div class="share-img">
							<img :src="products.product_share_icon">
						</div>
					</header>
					<!-- 主体 -->
					<div class="scroll-content has-header">
						<div class="scroll">
							<div class="product-detail">
								<!-- 轮播图 -->
								<swiper :options="swiperOption" ref="ProductSwiper">
									<swiper-slide v-for="(img,index) in products.images">
										<img :src="img">
									</swiper-slide>
								</swiper>
								<div class="promotion-tag">
									<img :src="products.promote_tag">
								</div>
								<div class="textures">
									<div class="box">
										<div class="title">
											<span class="title-product">{{products.subtitle}}</span>
										</div>
										<h2>{{products.name}}</h2>
										<!-- 非会员价 -->
										<p class="price-sub">
											￥<span class="price-product">{{ products.vip_price_pro.price_up.price/100}}</span>
										</p>
										<!-- 会员价 -->
										<p class="price-box">
											<span class="price-red">
												<span class="price-label">{{ products.vip_price_pro.price_down.name }}</span>
												<span class="rmb">￥</span>
												<span class="price-product">{{ products.vip_price_pro.price_down.price/100 }}</span>
											</span>
											<span class="sale-num">已售{{ products.sales_volume }}份</span>
										</p>
										<!-- 商品标签 -->
										<div class="product-news">
											<p class="product-model product-mess">
												产地<span>{{ products.country }}</span>
											</p>
											<p class="product-model sale-volume">
												<span>{{ products.delivery_style}}</span>
											</p>
											<p class="product-model product-message">
												<span class="tag">{{products.promotion[0]}}</span>
											</p>
										</div>
									</div>
								</div>
							</div>
							<!-- 优惠 -->
							<div class="product-membercard">
								<div class="product-membercard-on">
									<div class="membercard-none-img">
										<img src="">
									</div>
									<div class="title">
										购买该商品可省
										<span style="color: #ff4891;">80.1</span>
										元+返
										<span style="color:#FF4891;">3.98</span>元
									</div>
								</div>
							</div>
							<!-- 分享返现 -->
							<div class="integral">
								<div class="integral-detail">
									<img class="double-integral" src="">
									<span class="integral-title">分享得红包，又得返现</span>
									<img class="integral-click" src="">
								</div>
								<div class="un-share">
									<div class="un-share-content">
										 <div class="un-share-left un-share-left-auto">
										 	 <img class="integral-img" src="">
										 	 <div class="shadow">
										 	 	<div>已获得</div>
										 	 </div>
										 </div>
										 <div class="un-share-right">
										 	<p>已经有11785人分享了该商品</p>
										 </div>
									</div>
								</div>
								<div class="share-btn">
									<span>点击分享</span>
								</div>
							</div>
							<!-- 亮点 -->
							<div class="light-pots">
								<div class="list-title">
									<img class="bright-img" src="">亮点
									<img class="bright-img" src="">
								</div>
								<ul class="commodity-details">
									<li>
										<span class="disc"></span>
										<span>精选乌克兰黑土地所产的葵花籽，品质佳适合只有</span>
									</li>
									<li>
										<span class="disc"></span>
										<span>精选乌克兰黑土地所产的葵花籽，品质佳适合只有</span>
									</li>
									<li>
										<span class="disc"></span>
										<span>精选乌克兰黑土地所产的葵花籽，品质佳适合只有</span>
									</li>
								</ul>
							</div>
							<!-- 商品规格详情 -->
							<div class="graphic-details">
								<div class="top-title">
									<div class="line">
										商品详情
									</div>
								</div>
								<div class="content-detail">
									<div class="detail-item">
										规格：<span class="detail-info">1桶</span>
									</div>
									<div class="detail-item">
										重量：<span class="detail-info">4.008L</span>
									</div>
									<div class="detail-item">
										包装：<span class="detail-info">桶装</span>
									</div>
									<div class="detail-item">
										保质期：<span class="detail-info">540天</span>
									</div>
									<div class="detail-item">
										贮存方法：<span class="detail-info">避光、阴凉、干燥处存放</span>
									</div>
								</div>
							</div>
						</div>
						<!-- 滚动条 -->
						<div class="scroll-bar scroll-bar-v">
							
						</div>
					</div>
					<!-- 固定底部 -->
					<div class="bar-footer bar-light product-bar-footer">
						<div class="buttons">
							 <span class="shopping-product"></span>
							 <button class="orange">加入购物车</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	import {swiper,swiperSlide} from 'vue-awesome-swiper'
	export default{
		data(){
			return{
				urlParams : this.$route.query.sku,
				products:{},
				swiperOption:{
					notNextTick:true,
					autoplay:2500,
					autoplayDisableOnInteraction:false,
					grabCursor:true,
					autoHeight:true,
					setWrapperSize:true
				}
			}
		},
		components:{
			swiper,
			swiperSlide
		},
		methods:{
			
		},
		created(){
			this.$http.get('./static/json/products/' + this.urlParams + '.json',{}).then((res)=>{
				// 当前商品数据
				this.products = res.data
				console.log(this.products)
			})
		},
		computed:{
			swiper(){
				return this.$refs.ProductSwiper.swiper
			}
		}
	}
</script>
<style scoped>
	*{
		box-sizing: border-box;
	}
	img{
		vertical-align: middle;
	}
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
	/*头部标题*/
	.product-header{
		background-color: #fff;
		color: #4b4b4b;
		box-shadow: 0 0 10px rgba(0,0,0,0.06);
		position: relative;
		z-index: 1;
	}
	.bar{
		display: flex;
		width: 100%;
		height: 44px;
		padding:5px;
	}
	/*左侧返回按钮*/
	.product-header .buttons-left{
		position: absolute;
		line-height: 34px;
	}
	.buttons>.button{
		min-height: 31px;
		line-height: 32px;
		z-index: 1;
		padding: 0 8px;
		min-width: initial;
	}
	.product-header .buttons-left .back{
		background: url(../assets/login-back.png) center left no-repeat;
		background-size: 20px;
		border-color: transparent;
		margin:0 0 0 10px;
		font-size: 16px;
		padding-left: 16px;
	}
	.button:after {
		position: absolute;
		top: -6px;
		right: -6px;
		bottom: -6px;
		left: -6px;
		content: '';
	}
	/*中间的标题*/
	.product-detail-page .product-header .title-list {
	    font-size: 16px;
	    line-height: 36px;
	    margin:0 auto;
	}
	.product-header .title-list .title-detail, .product-header .title-list .title-safe{
		display: inline-block;
		border-bottom: 3px solid transparent;
		color: #262626;
	}
	.product-header .title-list .title-detail{
		margin-right: 15px;
	}
	/*被选中的状态*/
	.product-header .title-list .detail-title-active{
		border-bottom-color: #ff4891;
		color: #ff4891;
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
	/*-----内容----*/
	.scroll-content{
		position: absolute;
		right: 0;
		left: 0;
		overflow: hidden;
		margin-top: -1px;
		padding-top: 1px;
		margin-bottom: -1px;
		width: auto;
		height: auto;
	}
	.has-header{
		top: 40px;
		bottom: 44px;
	}
	/*商品详情*/
	.product-detail{
		padding-top: 20px;
		background-color: #fff;
	}
	/*-------------------------商品轮播图----------------------------*/
	.swiper-container{
		overflow-x: hidden;
	}
	.swiper-wrapper{
		height: 100%;
	}
	.swiper-slide{
		float: left;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.swiper-slide img{
		width: 65%;
		margin:0 auto;
		display: block;
		max-height: 400px;
	}


	.product-detail-page .scroll-content{
		top:40px;
		background: #fff;
	}
	.product-detail .promotion-tag {
	    position: absolute;
	    top: 30px;
	    left: 10px;
	}
	.product-detail .promotion-tag img {
	    height: 44px;
	}
	.product-detail .textures .box {
	    padding:0 15px;
	}
	.product-detail .textures .title {
	    padding-top: 20px;
	    padding-bottom: 2px;
	   line-height: 28px;
	}
	.product-detail .textures .title .title-product {
	    font-size: 20px;
	    color: #474245;
	    font-weight: 700;
	}
	.product-detail .textures h2 {
	    font-size: 16px;
	    color: #474245;
	    margin-bottom: 14px;
	    font-weight: 400;
	}
	.product-detail .textures p {
	    margin: 0;
	    font-size: 100%;
	}
	.product-detail .price-sub{
		text-decoration: line-through;
		color: rgb(150,150,150);
	}
	.price-sub .price-product{
		font-size: 16px;
	}
	.product-detail .textures .price-box {
	    color: #ff4891;
	    font-size: 22px;
	}
	.product-detail .textures .price-box .price-red {
	    color: rgb(255, 72, 145);
	    font-size: 21px;
	    line-height: 20px;
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
	    vertical-align: middle;
	    display: inline-block;
	}
	/*商品标签*/
	.product-detail .textures .product-news {
	    width: 100%;
	    height: 40px;
	    margin-bottom: 15px;
	    overflow:hidden;
	}
	.product-detail .textures .product-news .product-model {
	    display: inline-block;
	    line-height: 40px;
	    font-size: 12px;
	    color: #262626;
	    border-top: none;
	}
	.product-detail .textures .product-news .product-model:before{
		content: ' ';
		display: inline-block;
		width: 3px;
		height: 3px;
		background-color: #262626;
		border-radius: 50%;
		vertical-align: middle;
		margin-right: 2px;
	}
	.product-detail .textures .product-news .product-model +.product-model{
		margin-left: 20px;
	}
	.product-detail .textures .product-news .product-mess img {
	    width: 18px;
	    vertical-align: sub;
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