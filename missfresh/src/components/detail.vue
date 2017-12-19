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
							<div class="title-detail">商品详情</div>
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
								<div class="promotion-tag" v-if="products.promote_tag != ''">
									<img :src="products.promote_tag">
								</div>
								<!-- 商品信息 -->
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
										<img :src="products.vip_card.icon_img">
									</div>
									<div class="title">
										<span v-for="(txt, index) in Money" :class="txt.match(/^[0-9]\d*\.\d*|0\.\d*[1-9]\d*$/)?'title-red':'' ">{{ txt }}</span>
									</div>
								</div>
							</div>
							<!-- 分享返现 -->
							<div class="share-new">
								<div class="share-new-detail">
									<div class="icon">
										<img :src="products.product_share_info_v2.product_integarl_icon">
									</div>
									<span class="share-new-txt">
										{{products.product_share_info_v2.product_integarl_text}}
										<i class="xiangqing"></i>
									</span>
									<div class="share-new-btn">
										去分享
									</div>
								</div>
								<p class="share-new-count">{{products.product_share_info_v2.share_product_text}}</p>
							</div>
							<!-- 安心检测 -->
							<div class="security" v-if="safePrints!= undefined ">
								<p class="security-tit">{{ products.securityTitle}}</p>
								<p class="security-txt">{{products.securityText}}</p>
								<div class="scroll-view">
									<div class="security-item" v-for="(item,index) in products.productFingerprints">
										<img :src="item.securityTagUrl" @click="safeUrl(item.securityDetailUrl)">
										<p>{{ item.securityTagName }}</p>
									</div>
								</div>
							</div>
							<!-- 亮点 -->
							<div class="light-pots">
								<div class="list-title">
									<h4>{{products.product_share_info_v2.product_bright_spot}}</h4>
								</div>
								<ul class="commodity-details">
									<li v-for="(desc,index) in products.description">
										<p>{{desc}}</p>
									</li>
								</ul>
							</div>
							<!-- 商品规格详情 -->
							<div class="graphic-details">
								<h4>商品详情</h4>
								<div class="content-detail">
									<div class="detail-item">
										规格：<span class="detail-info">{{products.unit}}</span>
									</div>
									<div class="detail-item">
										重量：<span class="detail-info">{{products.weight}}</span>
									</div>
									<div class="detail-item">
										包装：<span class="detail-info">{{products.pack}}</span>
									</div>
									<div class="detail-item">
										保质期：
										<span class="detail-info">{{products.storage_time}}</span>
									</div>
									<div class="detail-item">
										贮存方法：
										<span class="detail-info">{{products.storage_method}}</span>
									</div>
								</div>
								<!-- 商品图片 -->
								<div class="picture" v-for="(img, index) in products.instruction">
									<img :src="img.image">
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
							 <button class="orange" @click="add(products)">加入购物车</button>
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
				},
				Money:[],
				//安心检测是否渲染
				safePrints:[]
			}
		},
		components:{
			swiper,
			swiperSlide
		},
		methods:{
			safeUrl(url){
				window.location = url;
			},
			back(){
				window.history.back();
			},
			//添加到购物车功能
			add(item) {
				this.$store.dispatch('add', item);
			}
		},
		created(){
			this.$http.get('./static/json/products/' + this.urlParams + '.json',{}).then((res)=>{
				// 当前商品数据
				this.products = res.data;
				this.Money = this.products.vip_card.back_cash_text.split('#_$');
				this.safePrints = this.products.productFingerprints;
				console.log(this.safePrints)
				// console.log(this.products)
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
		font-family: "-apple-system","Helvetica Neue",Roboto,"Segoe UI",sans-serif;
	}
	body{
		font-size: 14px;
	}
	img{
		vertical-align: middle;
	}
	.title-red{
	    color: #FF4891!important;
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
	.product-header .title-list .title-detail{
		margin-right: 15px;
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
		overflow: auto;
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
	/*--------------------------优惠活动-----------------------------*/
	.product-membercard {
		width: 100%;
		padding: 0 15px;
	    background: url(../assets/product-detail-member-bg.png) no-repeat;
	    background-size: 100% 100%;
	}
	.product-membercard .product-membercard-on {
	    height: 60px;
	    display: table;
	}
	.product-membercard .product-membercard-on .membercard-none-img {
	    vertical-align: middle;
	    display: table-cell;
	    padding-left: 15px;
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
	/*-------------------分享活动---------------------*/
	.product-detail-page .share-new{
		width: 100%;
		height: 100px;
		margin-top: 10px;
	}
	.product-detail-page .share-new .share-new-detail{
		width: 100%;
		height: 60px;
		padding: 0 15px;
		background: url(https://static-as.missfresh.cn/frontend/img/product-detail-share-new.png) no-repeat;
		background-size: 100% 100%;	
		display: table;
	}
	.share-new .share-new-detail .icon{
		width: 47px;
		display: table-cell;
		vertical-align: middle;
		padding-left: 10px;
	}
	 .share-new .share-new-detail .icon img{
		width: 37px;
		height: 18px;
		vertical-align: middle;
	}
	.share-new .share-new-detail .share-new-txt {
	    display: table-cell;
	    vertical-align: middle;
	    width: 68%;
	    padding-top: 2px;
	    padding-left: 8px;
	    padding-right: 5px;
	    color: #474245;
	    line-height: 1.2;
	    font-size: .28rem;
	}
	.share-new .share-new-detail .share-new-txt i {
	    display: inline-block;
	    width: 22px;
	    height: 22px;
	    background: url(https://static-as.missfresh.cn/frontend/img/integral-help-ins.png) no-repeat;
	    background-size: 100% 100%;
	    vertical-align: middle;
	    position: relative;
	    top: -1px;
	}
	/*-------------------------分享按钮-----------------------*/
	.share-new .share-new-detail .share-new-btn {
	    width: 60px;
	    height: 60px;
	    line-height: 60px;
	    font-size: 12px;
	    color: #FF4891;
	    float: right;
	}
	.share-new .share-new-detail .share-new-btn:after {
	    content: '';
	    display: inline-block;
	    width: 8px;
	    height: 13px;
	    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAaBAMAAABMRsE0AAAAG1BMVEUAAAD/SJH/SJP/S5L/SZL/Tpf/SZH/UJv/SJFuA4dEAAAACHRSTlMA90Q9TQ3xEd33gQYAAAA0SURBVAjXY2AIZYAA9jQDKENCGCrk2AgVYqGqUCqEwQRjKDYqQAWEKBZghwmwpkEE4B4EADkXDSbDBl1uAAAAAElFTkSuQmCC) no-repeat;
	    background-size: 100% 100%;
	    position: relative;
	    top: 2px;
	    margin-left: 4px;
	}
	.share-new .share-new-count {
	    font-size: 12px;
	    color: #969696;
	    padding-left: 25px;
	}
	/*-------安心检测-------*/
	.security {
	    width: 100%;
	    height: 130px;
	    padding: 0 15px;
	}
	.security .security-tit, .product-detail-page .security .security-txt {
	    width: 100%;
	    white-space: nowrap;
	    overflow: hidden;
	    text-overflow: ellipsis;
	}
	.security .security-tit {
	    font-size: 16px;
	    color: #474245;
	    font-weight: 700;
	    line-height: 22px;
	}
	.security .security-txt {
	    font-size: 12px;
	    color: #969696;
	    line-height: 16px;
	    margin-top: 2px;
	    margin-bottom: 15px;
	}
	.scroll-view{
		display: flex;
	}
	.security .security-item {
	    display: inline-block;
	    min-width: 23%;
	    text-align: center;
	}
	.security .security-item img {
	    width: 30px;
	    height: 30px;
	    margin-bottom: 8px;
	}
	.security .security-item p {
	    width: 100%;
	    font-size: 12px;
	    color: #474245;
	}
	/*-------------------亮点---------------------*/
	.product-detail-page .light-pots {
	    background: #fff;
	    padding: 15px; 
	}
	.light-pots h4 {
	    font-size: 16px;
	    margin-bottom: 10px;
	    font-weight: 500;
	}
	.light-pots .commodity-details {
	    clear: both;
	    padding: 14px 20px 14px 15px;
	}
	.light-pots .commodity-details li{
	    color: #262626;
	    line-height: 40px;
	    font-size: 14px;
	    position: relative;
	}
	.light-pots .commodity-details li:before{
		content: '';
		position: absolute;
		left: -10px;
		top: 8px;
		width: 3px;
		height: 3px;
		background: #474245;
		border-radius: 50%;
	}
	.commodity-details li p {
	    line-height: 20px;
	}
	.commodity-details li+li {
	    margin-top: 10px;
	}
	/*-----------------------商品详情---------------------*/
	.product-detail-page .graphic-details {
	    width: 100%;
	    padding: 20px 20px 10px;
	}
	.graphic-details h4 {
	    font-size: 16px;
	    margin-bottom: 16px;
	    font-weight: 500;
	}
	.graphic-details .content-detail {
	    margin-bottom: 5px;
	}
	.graphic-details .content-detail .detail-item {
	    color: #969696;
	    line-height: 40px;
	    font-size: 14px;
	}
	.graphic-details .content-detail .detail-item .detail-info {
	    color: #969696;
	    padding-left: 5px;
	}
	/*------商品部分广告图-----*/
	.graphic-details .picture{
		position: relative;
	}
	.graphic-details .picture img{
		width: 100%;
		display: block;
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