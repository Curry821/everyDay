<template>
	<div id="home">
	<Load2 v-if = 'isShow' />
		<!-- 首页主体 -->
		<div class="tab-home">
			<!-- 顶部 广告+地址+导航 -->
			<div class="tab-home-header">
				<!-- 下载app -->
				<div class="home-guide">
					<img src="src/assets/img_20171103183728220.jpg" alt="下载app" title="src/assets/img_20171103183728220.jpg" v-if="homeGuide">
					<p class="app-user-close" @click="closeApp"></p>
				</div>
				<!-- 地址选择 -->
				<div class="home-addr-city">
					<!-- 浮动提示信息 -->
					<div class="addr-warning">
						<span class="addr-binding">本城市支持2小时达，选择详细地址完成匹配</span>
						<span class="span-close"></span>
					</div>
					<span class="home-addr-city-icon" style="background-image: url(src/assets/img_20161026155951214.png);"></span>
					<!-- 地址信息 -->
					<span class="home-addr-city-text">北京市</span>
					<span class="city-select"></span>
					<!-- 搜索 -->
					<div class="home-search" @click="search()">
						<img src="src/assets/home-search-3x-black.png" title="home-search-3x-black.png" alt="搜索放大镜">
					</div>
				</div>
				<!-- 横向滚动导航 -->
				<div class="nav-class">
					<div class="nav-tab scroll-view scroll">
						<!-- 横向滚动条组件 -->
						<nav-item :category-list="categoryList"></nav-item>
					</div>
					<!-- 点击按钮 -->
					<div class="nav-all-list-btn"></div>
					<!-- 全部品类 -->
					<div class="nav-all-list" style="display: none;">
						<h3 class="nav-all-list-title">
							全部品类
							<i class="nav-all-list-clo">
								<!-- 关闭按钮 -->
							</i>
						</h3>
						<type-item :category-list="categoryList"></type-item>
					</div>
				</div>
				<!-- 主体 -->
				<div class="main-wrap" :class="{up:homeGuide}">
					<!-- 提示信息 -->
					<div class="jisuda-tip tip" v-show = 'autoDisa' >
						<span class="tip-content">下单次日送达</span>
					</div>
					<!-- 主体内容 -->
					<div class="main">
						<div class="slider-slides">
							<!-- 热卖 -->
							<div class="slider-tab hot-sell">
								<div class="padding scroll-content">
									<scroller class="scroll" :on-refresh="refresh" :on-infinite="infinite" ref="myscroller">
										<div class="content-wrap">
											<!-- 轮播图 -->
											<swiper :options="swiperOption" ref="hotSwiper">
												<swiper-slide v-for="(img,index) in banners">
													<img :src="img.path">
												</swiper-slide>
											</swiper>
											<!-- 商品列表 -->
											<div class="product-group">
												<div class="shop-item" v-for="(item,index) in productList">
													<div class="item-cont-product" v-if="item.type=='product'">
														<div class="list-item">
															<!-- 商品标签 -->
															<img class="item-disc-img" src="" v-lazy="item.promote_tag" v-if="item.promote_tag != undefined">
															<!-- 商品图片 -->
															<div class="item-img">
																<img src="" v-lazy="item.image" @click="push(item.sku)">
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
																	<img src="../assets/img_20170425134548759.png" title="img_20170425134548759.png" alt="小购物车" @click="add(item)">
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
									</scroller>    
								</div>
							</div>
						</div>
					</div>	
				</div>
			</div>
		</div>
		<!-- 搜索弹窗 -->
		<div class="modal-backdrop" v-if="modal">
			<div class="modal-wrapper">
				<div class="modal">
					<header class="bar-header">
						<!-- 返回按钮 -->
						<div class="back-search buttons" @click="back()">
							<img src="https://static-as.missfresh.cn/frontend/img/back-search.png">
						</div>
						<!-- 搜索框 -->
						<div class="search-top">
							<img class="search-button" src="https://static-as.missfresh.cn/frontend/img/icon-search.png">
							<input type="text" class="search-keyword" placeholder="请输入商品名称" ref="theLog"  v-model="show.theLog">
							<img class="clear-button" src="https://static-as.missfresh.cn/frontend/img/clean-key-word.png" @click="clear()" v-if="this.searchTxt.length > 0">
						</div>
						<!-- 搜索 -->
						<div class="search-txt">
							<span class="disable-user" @click="fn()">搜索</span>
						</div>
					</header>
					<div class="scroll-content has-header">
						<div class="search-keyword-box">
							<div class="search-keyword-title">
								<span>热门搜索</span>
							</div>
							<div class="search-keyword-txt">
								<span v-for='items in zhong'>{{ items }}</span>

							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="ev-foodList" v-show = 'slogo'>
            	<ul>
            		<li v-for = "(itemFood,index) in foodlist">
            			<a href="#">{{itemFood.displayName}}</a>
            		</li>
            	</ul>
            </div>
	</div>
</template>

<script>
	import navItem from './navItem'
	import listItem from './listItem'
	import typeItem from './typeItem'
	import Load2 from './load2'
	// import detail from './detail'
	import {swiper,swiperSlide} from 'vue-awesome-swiper'
	export default{
		name:'Home',
		components:{
			navItem,
			listItem,
			typeItem,
			swiper,
			swiperSlide,
			Load2
		},
		mounted(){
			//动态获取适配窗口宽度
			(function (doc, win) {
			  var docEl = win.document.documentElement;
			  var resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';
			  /**
			    * ================================================
			    *   设置根元素font-size
			    * 当设备宽度为375(iPhone6)时，根元素font-size=50px; 
			    × ================================================
			    */
			  var refreshRem = function () {
			    var clientWidth = win.innerWidth
			                      || doc.documentElement.clientWidth
			                      || doc.body.clientWidth;

			    console.log(clientWidth)
			    if (!clientWidth) return;
			    var fz;
			    var width = clientWidth;
			    fz = 50 * width / 375;
			    docEl.style.fontSize = fz + 'px';
			  };

			  if (!doc.addEventListener) return;
			  win.addEventListener(resizeEvt, refreshRem, false);
			  doc.addEventListener('DOMContentLoaded', refreshRem, false);
			  refreshRem();

			})(document, window);
		},
		data(){
			return{
				url:'./static/json/home.json',
				searchTxt:'',
				categoryList:[],
				zhong:[],
				foodlist:[],
				autoDisa:true,
				slogo:false,
				productList:[],
				banners:[],
				isShow:true,
				inputInfo:'',
				show: {
					theLog: ""
				},
				// 轮播图属性
				swiperOption:{
					notNextTick:true,
					autoplay:2500,
					autoplayDisableOnInteraction:false,
					grabCursor:true,
					autoHeight:true,
					setWrapperSize:true
				},
				homeGuide:true,
				modal:false,
				searchTxt:'',
				noData:''
			}
		},
		watch: {
		//实现模糊查询
            show: {        
            	handler(newVal, oldVal) {
            		var t = this.$refs.theLog.value;

        	 		if (t != '') {

        	 		this.slogo = true
        	 				this.$http.get('https://as-vip.missfresh.cn/search/hint/',{
			 		params: {	
			 		access_token:'enlLNmYyb3hVNWZSSXhrZ0Z2TjV6eERScnp3Qjh5R0tWQTZmYkNtZU56Yz0=',
					device_id:'ef26073a8d6a909f984e738fec0ad979',
					env:'web',
					fromSource:'zhuye',
					kw: t,
					platform:'web',
					tdk:151365190572886797563,
					uuid:'ef26073a8d6a909f984e738fec0ad979',
					version:'4.0.0.1'		
			 		
					}
		 			}).then((res) => {					
						this.foodlist = res.data.data[0].active_item
		
							})
					} else {
						this.slogo = false
					}


                //   console.log(this.$refs.theLog.value);
            	},
            	deep: true      //深度查询
        	 	

            }
            
		},
		created(){
			 setTimeout(() => {
					this.autoDisa = false
				},5000);
			this.$http.get(this.url,{}).then((res)=>{
				// 导航数据
				this.categoryList = res.data.category_list;
				// 商品列表
				this.productList = res.data.product_list.products;
				// 轮播图数据
				this.banners = res.data.product_list.banner;
				console.log(this.banners)
				//如果购物车有产品 则显示对应产品数量
				if(this.$store.state.orderList.length>0){
					for(var n in this.$store.getters.getOrderList){
						for(var m in this.productList){
							//判断清单中是商品列表中的商品 有的初始化数量为购物车当前数量
							if(this.productList[m].name === this.$store.getters.getOrderList[n].name){
								this.productList[m].nuo = this.$store.getters.getOrderList[n].nuo
							}
						}
					}
				}
				this.isShow = false
			});
						this.$http.get("https://as-vip.missfresh.cn/v3/product/searchhotwords/?access_token=enlLNmYyb3hVNWZSSXhrZ0Z2TjV6eERScnp3Qjh5R0tWQTZmYkNtZU56Yz0%3D&device_id=ef26073a8d6a909f984e738fec0ad979&env=web&fromSource=zhuye&platform=web&tdk=151360448341038846978&uuid=ef26073a8d6a909f984e738fec0ad979&version=4.0.0.1")
			.then((res) => {
				this.zhong = res.data.data;
				// console.log(this.zhong)
			})

		},
		methods:{

			//添加到购物车的方法
			add(item) {
				this.$store.dispatch('add', item);
			},
			search(){
				this.modal = true;
			},
			// 关闭广告条
			closeApp(){
				this.show.theLog = '';
				this.slogo = false;
				this.homeGuide = false;
				
			},
			//返回首页
			back(){
				// this.show.theLog = '';
				this.slogo = false;
				this.modal = false;
			},
			// 清空搜索框
			clear(){
				this.searchTxt = '';
			},
			fn(){
				console.log(this.searchTxt.length)
			},
			// 点击图片跳转商品详情
			push(sku){
				this.$router.push({
					path:'/detail',
					query:{
						sku: sku
					}
				})
			},
			//下拉刷新
			infinite(done){
				console.log(this.noData)
				if(this.noData) {
					setTimeout( ()=>{
						this.$refs.myscroller.finishInfinite(2);
					})
					return;
				}
				let self = this;
				let start = this.productList.length;

				setTimeout( ()=>{
					for(let i = start + 1;i<start + 10;i++) {
						self.productList.push(i)
					}
					if(start > 10) {
						self.noData = '没有更多数据'
					}
					self.$refs.myscroller.resize();
					done()
				},1500)
			},
			refresh() {
				console.log('refresh')
			}
		},
		computed:{
			swiper(){
				return this.$refs.hotSwiper.swiper
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
	.wrap{
		display: flex;
		position: absolute;
		top:0;
		right: 0;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 100%;
		overflow:hidden;
	}
	/*-----------------------首页--------------------------*/
	/*======================顶部===================*/
	.tab-home{
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		right: 0;
		left: 0;
		bottom: 0;
		overflow: hidden;
		display: flex;
		flex-direction: column;
		background-color: #f9f9f9;
	}
	.tab-home .tab-home-header{
		-webkit-box-flex:99;
		flex: 99 0 auto;
	}
	/*--------------下载app---------------*/
	.tab-home .home-guide{
		width: 100%;
		height: auto;
		overflow: hidden;
		position: relative;
	}
	.tab-home .home-guide img{
		width: 100%;
		height: auto;
		display: block;
	}
	.tab-home .home-guide .app-user-close{
		z-index: 999;
		width: 30px;
		height: 30px;
		display: block;
		position: absolute;
		top:50%;
		left: 10px;
		margin-top: -15px;
	}
	.tab-home .home-addr-city{
		width: 100%;
		height: 40px;
		line-height: 40px;
		background-color: #fff;
		text-align:center;
		position: relative;
	}
	/*------------浮动提示信息---------*/
	.tab-home .addr-warning{
		display:none;
		position: absolute;
		top:34px;
		left: 50%;
		background: url(../assets/address-warning-bg.png) no-repeat;
		background-size: 100% 100%;
		z-index: 2;
		font-size: 10px;
		color: #262626;
		transform: translate(-50%,-16%);
		padding: 0 10px;
		line-height: 35px;
		white-space: nowrap;
	}
	.tab-home .span-close{
		height: 35px;
		width: 10px;
		display: inline-block;
		background: url(../assets/icon-close.png) center no-repeat;
		background-size: 10px;
		vertical-align: middle;
		position: relative;
	}
	.tab-home .span-close::before{
		content: '';
		position: absolute;
		top:-10px;
		bottom: -10px;
		left: -10px;
		right: -10px;
	}
	.tab-home .home-addr-city-icon{
		display: inline-block;
		width: 74px;
		height: 16px;
		vertical-align: middle;
		margin-right: 4px;
		background-size: auto 16px;
		background-position: center right;
		background-repeat: no-repeat;
	}
	/*-----------地址信息-----------*/
	.tab-home .home-addr-city-text{
		color:#262626;
		direction: initial;
		vertical-align: middle;
		font-size: 14px;
		overflow: hidden;
		position: relative;
	}
	.tab-home .city-select{
		content: '';
		width: 8px;
		height: 5px;
		background: url(../assets/down.png) no-repeat;
		background-size: 100% 100%;
		margin-left: 5px;
		position: absolute;
		top:18px;
		right: inherit;
	}
	/*---------搜索-----------*/
	.tab-home .home-search{
		float: right;
		top:0;
		right: 0;
		margin-right: 10px;
	}
	.tab-home .home-search img{
		height: 30px;
	}
	/*--------------横向导航滚动-----------*/
	.nav-class{
		display: flex;
		-webkit-box-direction:normal;
		-webkit-box-orient:horizontal;
		flex-direction: row;
		-webkit-box-pack:justify;
		justify-content: space-between;
		position: relative;
		background: #fff;
		border-bottom: 1px solid #e6e6e6;
		font-size: 0;
	}
	.nav-class .nav-tab{
		width: 87%;
		height: 42px;
		white-space: nowrap;
		margin-left: 5px;
		font-size: 100%;
	}
	.nav-class .scroll-view{
		overflow-x: auto;
		overflow-y: hidden;
		position: relative;
		display: block;
		margin-top: -1px;
		-webkit-box-direction:normal;
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
	/*---------------------提示条--------------------*/
	.tab-home .tip{
		position: absolute;
		width: 100%;
		z-index: 3;
		color: #4b4b4b;
		font-size: 12px;
		background: #fff9e3;
		opacity: 0.9;
		display: flex;
		flex-direction:row;
		align-items: center;
		min-height: 32px;
	}
	.tab-home .tip::before{
		content: '';
		width: 13px;
		height: 12px;
		background: url(../assets/laba.png) no-repeat;
		background-size: 100% 100%;
		margin:0 10px;
	}
	.tab-home .tip .tip-content{
		flex: 1;
		-webkit-box-flex:1;
	}
	/*------------全部分类显示按钮----------*/
	.nav-class .nav-all-list-btn{
		width: 30px;
		height: 30px;
		position: absolute;
		top:3px;
		right: 7px;
		background: url(../assets/listAll.png) center center no-repeat;
		background-size: 22px 22px;
	}
	/*========主体========*/
	.main-wrap{
		position: absolute;
		left: 0;
		right: 0;
		top:1.64rem;
		bottom: 0;
		flex: 9999 1 99%;
		-webkit-box-flex: 9999;
	}
	.main-wrap.up{
		top: 2.625rem;
	}
	.main{
		width: 100%;
		position: absolute;
		top:0;
		bottom: 0;
		visibility: visible;
		overflow: hidden;
	}
	.slider-slides{
		position: relative;
		height: 100%;
		overflow-x:auto;
		overflow-y: hidden;
	}
	.product-group{
		width: 100%;	
		overflow: hidden;
	}
	.product-group .item-banner{
		height: 39px;
	}
	.item-banner .title-img{
		display: block;
		width: 100%;
		margin: 0 auto;
	}
/*=====================================================*/
/*-----------广告轮播图----------*/
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
		width: 100%;
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
	/*======================搜索界面========================*/
	.modal-backdrop{
		position: fixed;
		top: 0;
		left: 0;
		z-index: 10;
		width: 100%;
		height: 100%;
		background: #fff;
	}
	.modal{
		display: block;
		position: absolute;
		top: 0;
		z-index: 10;
		overflow:hidden;
		min-height: 100%;
		width: 100%;
		background: #fff;
	}
	.modal .bar-header{
		display: flex;
		position: absolute;
		right: 0;
		left: 0;
		z-index: 9;
		box-sizing: border-box;
		padding: 5px;
		width: 100%;
		height: 44px;
		background-color: #fff;
		color: #4b4b4b;
		box-shadow: 0 0 10px rgba(0,0,0,0.06);
		background-image: linear-gradient(0deg,#ddd,#ddd 50%,transparent 50%);
		background-position: bottom;
		background-size: 100% 1px;
		background-repeat: no-repeat;
		border-bottom: none;
	}
	/*---------------返回按钮-----------------*/
	.back-search{
		margin-left: -10px;
		width: 44px;
	}
	.bar-header .buttons{
		line-height: 34px;
	}
	.back-search img{
		width: 18px;
		height: 18px;
		margin:auto 15px;
	}
	/*------------------搜索框-------------------*/
	.search-top{
		height: auto;
		line-height: 30px;
		background: #e6e6e6;
		border-radius: 4PX;
		width: 75%;
	}
	.search-top .search-button{
		width: 14px;
		position: relative;
		margin-left: 10px;
		margin-right: 6px;
	}
	.search-top .search-keyword{
		display: inline-block;
		vertical-align: middle;
		background: #e6e6e6;
		color: #262626;
		font-size: 14px;
		width: 76%;
		padding-top: 2px;
		padding-left: 0;
		height: 34px;
		line-height: 16px;
		border:0;
	}
	.search-top .clear-button{
		width: 14px;
	}
	.search-txt{
		line-height: 34px;
		margin:auto 15px;
		color: #262626;
		position: absolute;
		right: 0;
	}
	/*-------------搜索界面内容-------------*/
	.has-header{
		top: 44px;
		background-color: #f0f0f0;
	}
	.search-keyword-box .search-keyword-title{
		padding-left: 10px;
		height: 36px;
		font-size: 14px;
		color: #969696;
	}
	.search-keyword-box .search-keyword-title span{
		display: inline-block;
		vertical-align: middle;
		line-height: 36px;
	}
	.search-keyword-box .search-keyword-txt{
		background: #fff;
		padding: 15px 10px 5px;
	}
	.search-keyword-box .search-keyword-txt span{
		margin:0 0 10px 10px;
		display: inline-block;
		color: #262626;
		line-height: 30px;
		padding:0 10px;
		background: #f6f5f5;
		border-radius: 4px;
	}
	.ev-foodList{
	position: fixed;
	width:100%;
	left:0;
	top:45px;
	background-color: #fff;
	z-index: 11;
	}
	.ev-foodList ul{
		width:100%;
		margin-left: 5%;
	}
	.ev-foodList li{
		width:90%;
		height:45px;
		line-height: 45px;
		border-bottom: 1px solid #bbb;
		padding-left: 5px;
	}
	.ev-foodList li a{
		 color:#828282;
		 font-size: 16px;
	}
	.ev-foodList li:last-of-type{
	  border-bottom: none;
	}
</style>