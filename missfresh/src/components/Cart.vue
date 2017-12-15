<template>
<div id="cart">
	<div class="tab-cart">
		<div class="pane" v-if = "orderList.length !=0">
			<div class="cart-promotion">
				<div class="list">
					<div class="item">
						<span class="header">最优惠</span>
							<span>新人专享，满59元立减30元</span>
					</div>
				</div>
			</div>
			<div class="cart-content has-promotion scroll-content">
				<div class="scroll">
					<div class="scroll-refresher"></div>
					<div class="cart-position">
						<div class="list">
							 <span class="address-text">北京市</span>
						</div>
					</div>
					<!-- 已加入购物车的商品 -->
					<div class="item-group">
						<div class="cart-group">
							<div class="list">
								<div class="cart-group-all">
									<span class="checkbox"></span>
								</div>
								<div class="cart-group-title">
									<span>次日达</span>
								</div>
								<div class="cart-group-free">
									<a href="#">
									 	<span v-if="totalPrice < 69">实付满69包邮,还差{{ (69-totalPrice).toFixed(1) }}元,去凑单</span>
									 	<span v-else>免运费</span>
									</a>
								</div>
								<div class="cart-arrow-tip-icon">
									<img src="../assets/jiantou-icon.png">
								</div>
							</div>
						</div>
						<div class="cart">
							<div class="list">
								<div class="shop-item list-item item item-content-product" v-for="(item,index) in orderList" :key="item.id">
									<div class="checkbox-wrapper">
										<span class="checkbox"></span>
									</div>
									<div class="list-item-content">
										<img class="item-discount-img" :src="item.promote_tag">
										<div class="item-image">
											<img class="item-image-img" :src="item.image" v-show="item.image != 'unknown' ">
										</div>
										<div class="item-info">
											<div class="mess-title cart-mess-title">
												{{item.name}}
											</div>
											<div class="has-tag">
												<span class="place-name-tag" v-for="(tag,index) in item.product_tag">
													{{ tag.name }}
												</span>
											</div>
											<div class="price-sub-row" v-for="(price,index) in item.vip_price_pro" :style="price.is_ex_price == 1?{color:'rgb(255,72,145)',fontSize:'12px'}:{color:'rgb(150,150,150)'}">
											<!-- 遍历对象 -->
												<span class="rmb ng-binding">{{ price.name }}</span>
												<span style="font-size: 12px;">￥</span>
												<span class="price" :style="price.is_ex_price == 1?{fontSize:'15px'}:{fontSize:'12px'}">{{ price.price/100 }}</span>
											</div>
											<div class="price-num cart-price-num">
												<div>
													<span class="jian" @click="down(item)"></span>
													<span class="text">{{ item.nuo }}</span>
													<span class="jia" @click="up(item.sku)"></span>
												</div>
											</div>
										</div>
									</div>		
									<div class="item-options">
										
									</div>
								</div>
							</div>
						</div>
					</div>
					<!-- 结算列表 -->
					<div class="price-list">
						<!-- 商品价 -->
						<div class="list item-board">
							<span class="item-content">
								商品总价
								<span class="post-tip"></span>
							</span>
							<span class="item-price" style="color: rgb(38, 38, 38);">
								￥{{ totalPrice.toFixed(1) }}
							</span>
						</div>
						<!-- 商品价格 -->
						<div class="list">
							<span class="item-content" style="color: rgb(38, 38, 38);">
								商品实付
								<span class="post-tip"></span>
							</span>
							<span class="item-price">
								<span class="rmb">￥34.9</span>
							</span>
						</div>
						<div class="list item-board">
							<span class="item-content">
								运费
								<span class="post-tip">
								 实付满69元包邮
								</span>
							</span>
							<span class="item-price">
								￥10
							</span>
						</div>
						<!-- 总价 -->
						<div class="total-price">
							<span>合计</span>
							<span style='color:rgb(255,72,145);'>
								<span>￥</span>44.9
							</span>
						</div>
					</div>
				</div>
			</div>
			<div class="cart-footer bg-f">
				<div class="price-num price-left">
					<div class="checkbox-wrapper check-left">
						<span class="checkbox check"></span>
					</div>
					<span class="all">全选</span>
				</div>
				<div class="fot-price foot-info">
					<span class="total-price">
						<span style="color:rgb(38, 38, 38);">合计</span>
						<span style="color: rgb(255, 72, 145);">￥44.9</span>
					</span>
					<span class="post-info">
						<span style="color: rgb(150, 150, 150);">运费￥10</span>
					</span>
				</div>
				<div class="fot-price">
					<div class="foot-price">
						去结算
					</div>
				</div>
			</div>
		</div>
	</div>
	<!-- 没有商品 -->
	<div class="no-cart-wrap" v-if="orderList.length == 0">
		<div class="no-cart">
			<div class="no-cart-info">
				<span class="no-cart-txt">您还没有添加任何商品</span>
			</div>
		</div>
	</div>
	<!-- 遮罩层 -->
	<div class="shadow" v-if="isShow"></div>
	<!-- 删除弹窗 -->
	<div class="popup-container popup-showing" v-if="isShow" >
		<div class="popup">
			<div class="popup-head">
				<h3 class="popup-title">你确定删除该商品么</h3>
			</div>
			<div class="popup-buttons">
				<button class="button" @click="hide(item)">取消</button>
				<button class="button" @click="remove(item)">确定</button>
			</div>
		</div>
	</div>
</div>
</template>
<script>
	export default{
		name:'Cart',
		data(){
			return{
				isShow:false
			}
		},
		mounted(){
			// this.$store.dispatch("addDate",new Date());
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

			})(document, window),
			function(){
				this.orderList = this.$store.getters.getOrderList;
			}
		},
		computed:{
			orderList(){
				return this.$store.state.orderList;
			},
			totalPrice() {
				return this.$store.getters.totalPrice
			}
		},
		methods:{
			up(sku) {
				this.$store.dispatch('up', sku)
			},
			down(item) {
				this.$store.dispatch('down', item)
				if(item.nuo == 0){
					this.isShow = true;
				}
			},
			remove(item){
				this.$store.dispatch('remove', item)
				this.isShow = false;
			},
			hide(item) {
				item.nuo = 1;
				this.isShow = false;
			}
		}
	}
</script>
<style scoped>
	img{
	    vertical-align: middle;
	}
</style>
<style>
	*{
	    box-sizing: border-box;
	}
	
	body{
		background: #f9f9f9;
	}
/*===============购物车=============*/
	.tab-cart{
	    position: absolute;
	    display: block;
	    width: 100%;
	    height: 100%;
	    z-index: 3;
	}
	.pane, .view {
	    position: absolute;
	    top: 0;
	    right: 0;
	    bottom: 0;
	    left: 0;
	    width: 100%;
	    height: 100%;
	    background-color: #fff;
	    overflow: hidden;
	}
	.pane {
	    background-color: #F9F9F9;
	}
	/*==========顶部广告条=========*/
	.list {
	    position: relative;
	    padding-top: 1px;
	    padding-bottom: 1px;
	    padding-left: 0;
	    margin-bottom: 20px;
	}
	.list:last-child {
	    margin-bottom: 0;
	}
	.cart-promotion .list {
	    z-index: 1;
	    opacity: .9;
	    background-color: transparent;
	    padding-bottom: 0;
	}
	.cart-promotion .list .item {
	    font-size: 12px;
	    display: block;
	    color: #4b4b4b;
	    background: #fff9e2;
	    position: relative;
	    text-align: left;
	    line-height: 34px;
	    overflow: hidden;
	    text-overflow: ellipsis;
	    white-space: nowrap;
	    border: none;
	    padding: 0 24px 0 15px;
	}
	.cart-promotion .list .item .header {
	    height: 16px;
	    top: 8px;
	    background-color: #ff4891;
	    color: #fff;
	    border-radius: 3px;
	    padding: 2px;
	}
	.tab-cart .has-promotion{
	    bottom: 49px;
	    padding:0;
	    background-color: #f0f0f0;
	}
	.tab-cart .cart-content{
		position: absolute;
		top: 0;
		right: 0;
		left: 0;
		overflow:auto;
		margin-top: -1px;
		width: auto;
		height: auto;
		padding-top: 37px;
	}
	.cart-content .scroll {
	    min-height: inherit;
	    height: inherit;
	    padding-bottom: 49px;
	}
	/*-----------地址信息--------------*/
	.cart-position .list {
	    height: .88rem;
	    text-align: center;
	    line-height: .88rem;
	    font-size: .32rem;
	    color: #262626;
	    background-color: #fff;
	}
	.cart-content .item.list-item{
	    padding:21px 0;
	    margin-top:0;
	}
	.cart-content .cart-position .list .address-text:before {
	    content: '';
	    width: .44rem;
	    height: .44rem;
	    display: inline-block;
	    vertical-align: middle;
	    margin-right: .1rem;
	    background: url(../assets/position-icon.png) no-repeat;
	    background-size: 100% 100%;
	}
	.cart-position .list .address-text:after {
	    content: '';
	    width: .3rem;
	    height: .3rem;
	    display: inline-block;
	    vertical-align: middle;
	    background: url(../assets/cart-position-select.png) no-repeat;
	    background-size: 100% 100%;
	}
	/*--------购物车列表------*/
	.cart-group .list {
	    position: relative;
	    height: .88rem;
	    border-bottom: .5px solid #e6e6e6;
	    background-color: #fff;
	    margin-top: .2rem;
	    display: flex;
	    flex-direction: row;
	    align-items: center;
	    color: #262626;
	}
	.cart-group .list .cart-group-all {
	    width: 50px;
	    text-align: center;
	    padding: .1rem .2rem 0 10px;
	}
	.checkbox {
	    position: relative;
	    display: inline-block;
	    padding: 7px;
	    cursor: pointer;
	}
	.cart-group .list .cart-group-all .checkbox {
	    width: 22px;
	    height: 22px;
	    display: inline-block;
	    background: url(../assets/unchecked.png) no-repeat;
	    background-size: cover;
	}
	.cart-group .list .cart-group-all .checked {
	    background: url(../assets/checked.png) no-repeat;
	    background-size: 100% 100%;
	}
	.cart-group .list .cart-group-title {
	    max-width: 30%;
	    margin-right: 9%;
	}
	.cart-group .list .cart-group-title span {
	    width: 150%;
	    display: block;
	}
	.cart-group .list .cart-group-free {
	    font-size: .24rem;
	    color: #ff4891;
	    max-width: 70%;
	    margin-left: auto;
	    margin-right: 4%;
	    text-align: right;
	    display: flex;
	}
	.cart-group .list .cart-group-free a {
	    color: #ff4891;
	    padding-right: 10px;
	}
	.cart-group .list .cart-group-free span {
	    display: inline-block;
	    line-height: 14px;
	}
	.cart-group .list .cart-group-free a span {
	    display: inline-block;
	    line-height: .32rem;
	    padding-top: .14rem;
	}
	.cart-group .list .cart-arrow-tip-icon {
	    position: absolute;
	    right: 0;
	    padding-right: 5px;
	    margin-left: 5px;
	    line-height: .88rem;
	}
	.cart-group .list .cart-arrow-tip-icon img {
	    width: 20px;
	    vertical-align: middle;
	}
	.cart .list {
	    padding-bottom: 0;
	    padding-top: 0;
	    margin: 0;
	}
	.item {
	    border-color: #ddd;
	    background-color: #fff;
	    color: #444;
	    position: relative;
	    z-index: 2;
	    display: block;
	    margin: -1px;
	    padding: 16px;
	    border-width: 1px;
	    border-style: solid;
	    font-size: 16px;
	}
	.cart-content .shop-item {
	    border-top: none;
	    margin: 0;
	    border-color: #f7f7f7;
	}
	.shop-item .item-content {
	    background-color: #fff;
	    display: flex;
	    flex-direction: row;
	    position: relative;
	    border: none;
	    padding: 0;
	    z-index: 2;
	}
	.item-content .cart-item-product {
	    width: 100%;
	}
	.item-content-product {
	    background-color: #fff;
	    display: flex;
	    flex-direction: row;
	    position: relative;
	    border: none;
	    border-color: #f5f5f5;
	    padding-top: 20px;
	    padding-bottom: 23px;
	    border-bottom: 1px solid #f5f5f5;
	}
	.item-content-product {
	    padding: 0;
	}
	.checkbox-wrapper {
	    display: flex;
	    flex: 0 0 auto;
	    align-items: center;
	    width: 50px;
	    justify-content: center;
	}
	.checkbox-wrapper .checkbox {
	    display: block;
	    width: 22px;
	    height: 22px;
	    background: #fff;
	    border: 1px solid #d1d1d1;
	    border-radius: 15px;
	    position: relative;
	    padding: 0;
	}
	.checkbox-wrapper .checkbox:before {
	    content: ' ';
	    position: absolute;
	    top: -10px;
	    bottom: -10px;
	    left: -10px;
	    right: -10px;
	}
	.checkbox-wrapper .checkbox.checked {
	    width: 22px;
	    height: 22px;
	    background: url(../assets/quanxuan.png) no-repeat;
	    background-size: 100% 100%;
	    border: none;
	}
	.item-content-product .list-item-content {
	    position: relative;
	    flex-direction: row;
	    justify-content: space-between;
	    flex: 1 1 0;
	    width: 100%;
	    display: -webkit-box;
	}
	.item-content-product .list-item-content{
	    box-sizing: border-box;
	    width: 87%;
	}
	.list-item-content .item-discount-img {
	    position: absolute;
	    width: 22.5px;
	    height: 30px;
	    top: 0;
	    left: 0;
	    z-index: 2;
	}
	.list-item-content .item-discount-img-cart {
	    height: 30px;
	}
	.item-image{
	    margin: 0!important;
	    padding-right: 13px;
	    width: auto;
	    height: auto;
	    position: relative;
	    flex: 0 0 auto;
	}
	.item-image-img{
	    display: block;
	    border-radius: 0;
	    width: 70px;
	    height: 70px;
	}
	/*----------商品信息----------*/
	.list-item-content .item-info {
	    -webkit-box-flex: 1;
	    flex: 1 1 0;
	    text-align: left;
	    margin: 0;
	    color: #262626;
	}
	.cart-content .has-tag{
	    height: 20px;
	    line-height: 13px;
	}
	.cart-content .has-tag span{
		display: inline-block;
		border-radius: 2px;
		font-size: 9px;
		height: 13px;
		line-height: 11px;
	}
	.cart-content .has-tag .place-name-tag{
		border:1px solid rgb(198,198,198);
		color: rgb(198,198,198);
		padding: 1px;
		background: #fff;
		margin-right: 5px;
	}
	.cart-content .price-num{
		position: absolute;
		text-align:right;
		height: 30px;
		right: 4%;
		background:#fff;
	}
	.list-item-content .item-info .cart-mess-title {
	    font-size: 14px;
	    padding-top: 0;
	    padding-bottom: 1px;
	}
	.list-item-content .price-sub-row{
	    line-height: 1;
	    font-size: 12px;
	    color:rgb(150,150,150);
	}
	.list-item-content .price-sub-row .price{
	    font-size: 12px;
	}
	.list-item-content .bom-price{
	    display: block;
	    color: rgb(255,72,145);
	}
	.list-item-content .bom-price .price-label{
	    font-size: 12px;
	}
	.bom-price .rmb{
	    font-size: 12px;
	    letter-spacing: -3px;
	}
	.bom-price .price{
	    font-size: 15px;
	}
	.cart-content .price-num{
	    bottom: -1px;
	    width: 80px;
	    background-color: #fff;
	}
	.cart-content .price-num .jian{
    background-image: url(../assets/reduce-img-cart.png);
	}
	.cart-content .price-num .text{
	    width: 25px;
	    height: 22px;
	    background-color: transparent;
	    color: #4b4b4b;
	    line-height: 20px;
	    display: inline-block;
	    border: none;
	    border-radius: 0;
	    text-align: center;
	    vertical-align: top;
	    margin: 0;
	    font-size: 14px;
	}
	.price-num .jian {
	    width: 22px;
	    height: 22px;
	    display: inline-block;
	    text-align: center;
	    position: relative;
	    background-repeat: no-repeat;
	    background-size: 100% 100%;
	}
	.price-num .jia {
	    width: 22px;
	    height: 22px;
	    display: inline-block;
	    text-align: center;
	    position: relative;
	    background-repeat: no-repeat;
	    background-size: 100% 100%;
	}
	.cart-content .price-num .jia{
    background-image: url(../assets/add-img-cart.png);
	}
	/*---------结算列表---------*/
	.cart-content .price-list{
	    margin-top: 10px;
	    color: #4B4B4B;
	    font-size: 14px;
	    background: #fff;
	    padding-top: 15px;
	}
	.cart-content .list{
	    margin-bottom: 0;
	    background-color: #fff;
	    padding:0 15px;
	}
	.cart-content .price-list .item-board{
	    margin-bottom: 15px;
	    padding-bottom: 10px;
	    border-bottom: 1px solid #f5f5f5;
	}
	.price-list .list .item-content {
	    background-color: inherit;
	    width: 70%;
	    overflow: hidden;
	    text-overflow: ellipsis;
	    white-space: nowrap;
	    display: inline-block;
	}
	.list .item-content .post-tip {
	    font-size: 12px;
	    color: #969696;
	    margin-left: 6px;
	}
	.list .item-price {
	    float: right;
	    display: inline-block;
	}
	.price-list .total-price {
	    background-color: #fff;
	    padding: 0 15px 10px;
	    text-align: right;
	    line-height: 24px;
	}
	/*------合计去结算------*/
	.cart-footer {
	    display: flex;
	    -webkit-box-direction: normal;
	    flex-direction: row;
	    justify-content: space-between;
	    position: absolute;
	    width: 100%;
	    height: 49px;
	    background: #fff;
	    bottom: 49px;
	    z-index: 10;
	}
	.cart-footer .price-num {
	    border-top: .5px solid #e6e6e6;
	}
	.cart-footer .price-num.price-left {
	    position: static;
	    margin-top: 0;
	    background: #fff;
	    padding-right: 10px;
	    -webkit-box-flex: 0;
	    flex: 0 0 78px;
	}
	.cart-footer .checkbox-wrapper.check-left {
	    position: absolute;
	    top: 13px;
	}
	.cart-footer .all {
	    font-size: 14px;
	    color: #262626;
	    display: block;
	    line-height: 49px;
	    margin-left: 38px;
	}
	.cart-footer .fot-price {
	    font-size: 18px;
	    background: #ff4891;
	    height: 100%;
	    width: 130px;
	    line-height: 49px;
	    text-align: center;
	}
	.cart-footer .foot-info {
	    display: flex;
	    flex-direction: column;
	    -webkit-box-flex: 1;
	    flex: 1;
	    border-top: .5px solid #e6e6e6;
	    background: #fff;
	    color: #262626;
	    text-align: left;
	    vertical-align: middle;
	    height: 49px;
	    line-height: 15px;
	    overflow: hidden;
	}
	.cart-footer .foot-info .total-price {
	    margin-top: 10px;
	    font-size: 14px;
	}
	.cart-footer .foot-info .post-info {
	    font-size: 10px;
	}
	/*-------结算按钮--------*/
	.cart-footer .fot-price .foot-price:after {
	    content: ' ';
	    width: 7px;
	    height: 10px;
	    background: url(../assets/youjiantou.png) no-repeat;
	    background-size: 7px 8px;
	    display: inline-block;
	    line-height: 49px;
	    vertical-align: middle;
	}
	.cart-footer.bg-f {
	    color: #fff;
	}
	.popup-container .popup{
	    border-radius: 15px;
	    padding:0;
	    max-width: 230px;
	}
	.popup-container{
		position: fixed;
		left: 50%;
		top:50%;
		transform: translate(-50%, -30%);
		z-index: 11;
	}
	.popup-container .popup{
		width: 250px;
		background: rgba(255, 255, 255, .9);
		display: flex;
		flex-direction: column;
		-webkit-box-direction:normal;
		-webkit-box-orient:vertical;

	}
	.popup-container .popup-head{
	    text-align:center;
	    border-bottom: none;
	    padding: 15px 0 3px;
	    margin:0 30px;
	    display: block;
	    font-size: 20px;
	}
	.popup-container .popup-head .popup-title{
	    font-size: 16px;
	    color: #4b4b4b;
	    margin-top: 0;
	    font-weight: normal;
	}
	.popup-container .popup-buttons{
		min-height: 45px;
		padding: 0;
		display: flex;
	}
	.popup-buttons .button{
	    background: 0 0;
	    font-size: 15px;
	    color: #4b4b4b;
	    margin:5px 0;
	    border: none;
	    min-height: 34px;
	    display: block;
	    flex: 1;
	}
	.popup-buttons .button:first-child{
	    border-right: 1px solid #d1d1d1;
	}
	.popup-buttons .button:last-child{
	    border-right: none;
	}
	/*----------------没有商品的购物车------------*/
	.no-cart-wrap{
		color:#878787;
	}
	.no-cart{
		background: url(https://static-as.missfresh.cn/frontend/img/icon_buycar_empty_icon.png) center no-repeat;
		background-size: 90px 90px;
		padding-top: 162px;
		background-position-y:182px;
	}
	.no-cart .no-cart-info{
		font-size: 14px;
		padding-top: 128px;
		text-align: center;
	}
	.no-cart .no-cart-txt{
		font-size: 15px;
		color: #7f7f7f;
	}
	/*------------------遮罩层--------------------*/
	.shadow{
		position: fixed;
		width: 100%;
		height: 100%;
		left: 0;
		top:0;
		z-index: 10;
		background: rgba(0,0,0,0.7);
	}
</style>