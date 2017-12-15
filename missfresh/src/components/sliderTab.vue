<template>
	<div class="slider-tab hot-sell">
		<div class="padding scroll-content">
			<div class="scroll">
				<div class="content-wrap">
					<!-- 轮播图 -->
					<swiper :options="swiperOption" ref="hotSwiper">
						<swiper-slide>
							<img src="https://j-image.missfresh.cn/img_20171115210504508.jpg">
						</swiper-slide>
						<swiper-slide>
							<img src="https://j-image.missfresh.cn/img_20171114001522110.jpg">
						</swiper-slide>
						<swiper-slide>
							<img src="https://j-image.missfresh.cn/img_20171116020025770.jpg">
						</swiper-slide>
						<swiper-slide>
							<img src="https://j-image.missfresh.cn/img_20171114111240789.jpg">
						</swiper-slide>
						<swiper-slide>
							<img src="https://j-image.missfresh.cn/img_20171115210504508.jpg"">
						</swiper-slide>

					</swiper>
					<!-- 商品列表 -->
					<div class="product-group">
						<div class="shop-item" v-for="(item,index) in productList">
							<div class="item-cont-product" v-if="item.type=='product'">
								<div class="list-item">
									<!-- 商品标签 -->
									<img class="item-disc-img" src="" v-lazy="item.promote_tag">
									<!-- 商品图片 -->
									<div class="item-img">
										<img src="" v-lazy="item.image" alt="水果" title="40ad0b1c7f92410fa593eb51b01e06ef.jpg">
									</div>
									<!-- 商品信息 -->
									<div class="item-info">
										<div class="mess-title">
											{{ item.name }}
										</div>
										<div class="product-subtitle">
											{{ item.subtitle }}
										</div>
										<div class="has-tag">
											<span class="place-name-tag" v-for="tag in item.product_tags">{{ tag.name }}</span>
										</div>
										<div class="price-sub-row" >
											<div class="price-wrap" v-for="price in item.vip_price_pro">
												<span class="rmb ng-binding">{{ price.name}}</span>
												<span>￥</span>
												<span class="ng-binding">{{price.price/100}}</span>
											</div>
										</div>
										<div class="price-num">
											<img v-if="item.nuo == 0" src="../assets/img_20170425134548759.png" title="img_20170425134548759.png" alt="小购物车"@click="item.nuo++">
											<div v-else >
												<span class="jian" @click="minus(item)"></span>
												<span class="number-item">{{item.nuo}}</span>
												<span class="jia" @click="add(item)"></span>
											</div>
										</div>
									</div>
								</div>				
							</div>
							<div class="item-banner" v-if="item.type=='group'" v-for="img in item.banner">
								<img class="title-img" src="" v-lazy="img.path"> 
							</div>
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
		name:"sliderTab",
		props:["productList","productListTag","banners","orderList"],
		data(){
			return{
				swiperOption:{
					autoplay:2500,
					autoplayDisableOnInteraction:false
				}
			}
		},
		mounted(){
			console.log("swiper ok")
		},
		methods:{
			add(item){
				item.nuo++;
				this.$store.dispatch("addOrder",item);
			},
			minus(item){
				if(item.num>0){
					item.nuo--;
					this.$store.dispatch("addOrder",item);
				}
			}
		},
		components:{
			swiper,
			swiperSlide
		},
		computed:{
			swiper(){
				return this.$refs.hotSwiper.swiper
			}
		}
	}
</script>
<style>
	/*-----------广告轮播图----------*/
	.swiper-container{
		overflow-x: hidden;
	}
	.swiper-wrapper{
		width: 500%;
		height: 100%;
	}
	.swiper-slide{
		float: left;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.swiper-slide img{
		width: 100%;
	}
	.slider-tab{
		position: relative;
		display: block;
		float: left;
		height: 100%;
		width: 100%;
		vertical-align: top;
		overflow: auto;
	}
	.scroll-content{
		position: absolute;
		top:0;
		right: 0;
		bottom: 0;
		left: 0;
		overflow: hidden;
		margin-top: -1px;
		padding-top: 1px;
		margin-bottom: -1px;
		width: auto;
		height: auto;
	}
	.padding{
		padding: 0;
		bottom:49px;
		overflow: auto;
		background: #f0f0f0;
	}
	/*-----------------商品列表--------------------*/
	.shop-item{
		width: 100%;
		overflow: hidden;
		z-index: 1;
	}
	.shop-item .item-cont-product{
		display: flex;
		position: relative;
		border: none;
		background-color: #fff;
		border-color:#f5f5f5;
		padding-top: 20px;
		padding-bottom: 23px;
		border-bottom: 1px solid #f5f5f5;
	}
	.shop-item .list-item{
		position: relative;
		flex-direction: row;
		-webkit-box-pack:justify;
		justify-content: space-between;
		-webkit-box-flex:1;
		flex: 1 1 0;
		width: 100%;
		display: -webkit-box;
	}
	.shop-item .item-disc-img{
		position: absolute;
		height: 32px;
		top:0;
		left: 16px;
		z-index: 2;
	}
	.shop-item .item-img{
		margin:0 15px 0 20px;
		width: auto;
		height: auto;
		position: relative;
		-webkit-box-flex:0;
		flex:0 0 auto;
	}
	.shop-item .item-img img{
		display: block;
		border-radius: 0;
		width: 120px;
		height: 120px;
	}
	.shop-item .item-info{
		-webkit-box-flex:1;
		flex:1 1 0;
		text-align:left;
		color: #262626;
		margin: 0;
	}
	@media screen and (min-device-width:375px){
		.shop-item .item-info .mess-title{
			width: 210px!important;
		}
	}
	@media screen and (min-device-width:375px){
		.shop-item .item-info .product-subtitle{
			width: 210px!important;
		}
	}
	.shop-item .item-info .mess-title{
		font-size: 16px;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		letter-spacing: -1px;
		color: #474245;
		padding-top: 11px;
	}
	.shop-item .product-subtitle{
		font-size: 14px;
		line-height: 20px;
		color: #969696;
		white-space: nowrap;
		text-overflow: ellipsis;
		overflow:hidden;
	}
	.item-info .has-tag{
		height: 25px;
		line-height: 17px;
		font-size: 0;
	}
	.item-info .has-tag span{
		display: inline-block;
		border-radius: 2px;
		font-size: 9px;
		height: 13px;
		line-height: 11px;
	}
	.item-info .has-tag .place-name-tag{
		border:1px solid #d165e1;
		padding: 1px;
		background: #fff;
		margin-right: 5px;
		color: rgb(198,198,198);
		border-color: rgb(198,198,198);
		background-color: #fff;
	}
	.item-info .price-wrap:first-of-type{
		line-height: 0.8;
		color: rgb(255,72,145);
	}
	.item-info .price-sub-row>div{
		font-size: 0;
	}
	.item-info .price-sub-row .rmb{
		font-size: 12px;
	}
	.item-info .price-sub-row .ng-binding:nth-of-type(2){
		font-size: 14px;
	}
	.item-info .price-wrap{
		color: rgb(248,188,0);
	}
	.item-info .price-wrap span{
		font-size: 14px;
	}
	.item-info .price-vip .rmb:nth-of-type(2){
		font-size: 12px;
		letter-spacing: -3px;
	}
	.item-info .price-details{
		font-size: 16px;
		letter-spacing: -1px;
		display: inline-block;
		height: 22px;
		vertical-align: bottom;
	}
	.item-info .price-num{
		position: absolute;
		right: 4%;
		height: 30px;
		bottom: 5px;
		text-align:right;
		background: #fff;
	}
	/*-----------------小购物车----------------*/
	.item-info .price-num img{
		width: 49px;
		position: absolute;
		bottom: -8px;
		right: -6px;
	}
	/*-----------------商品数量------------------*/
	.price-num .jian{
		width: 22px;
		height: 22px;
		display: inline-block;
		text-align:center;
		position: relative;
		background-image: url(../assets/reduce-img.png);
		background-repeat: no-repeat;
		background-size: 100% 100%;
	}
	.price-num .number-item{
		width: 25px;
		height: 22px;
		background-color: transparent;
		color: #4b4b4b;
		line-height: 20px;
		display: inline-block;
		border: none;
		border-radius: 0;
		text-align:center;
		vertical-align: top;
		margin: 0;
		font-size: 14px;
	}
	.price-num .jia{
		width: 22px;
		height: 22px;
		display: inline-block;
		text-align: center;
		position: relative;
		background-image: url(../assets/add-img.png);
		background-repeat: no-repeat;
		background-size: 100% 100%;
	}
	/*---------------广告标题-----------------*/
	.shop-item .item-banner{
		height: 100%;
		background: #fff;
	}
	.shop-item .item-banner img{
		display: block;
		width: 100%;
		margin: 0 auto;
	}
</style>