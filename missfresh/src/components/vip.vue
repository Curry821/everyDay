<template>
	<div id="vip">
		<div class="vip">
			<div class="title-vip">
				<img src="src/assets/img_20171101110238591.png">
				<div class="img-title-vip">
					<img src="src/assets/img_20171028203434011.png">
					<div>立即开通</div>
				</div>
			</div>
			<div class="nav-vip scroll">
				<ul class="scroll" >
					<li v-for="(item, index) in vip_List">
						<img src="" v-lazy="item.path">
						<p>{{item.name}}</p>
					</li>
				</ul>
			</div>
			<div class="save-money-vip">
				<div class="save-vip">
					<!-- 会员省钱计算器 -->
					<div class="count-money-vip">
						<div class="omgs">
						</div>
						<span >会员省钱计算器</span>
					</div>
					<div class="artical-money-vip">
						<div class="save">
							<span class="title-text">优享会员将为您节省</span>
							<span class="saved-money"> ¥1121.30</span>
						</div>
						<div class="saved-sub">
							根据优鲜用户年平均消费3504元计算
						</div>
					</div>
					<!--  -->
					<div class="back-money">
						<div class="p1">
						<!-- 1 -->
							<div class="p2">
								<div class="save">
									购物返现
								</div> 
								<div class="go-back">
									单单返现5%无上限
								</div> 
								<div class="money">
									¥175.20
								</div>
							</div>	
							<!-- 2 -->
							<div class="p2">
								<div class="save">
									购物返现
								</div> 
								<div class="go-back">
									单单返现5%无上限
								</div> 
								<div class="money">
									¥175.20
								</div>
							</div>	
							<!-- 3 -->
							<div class="p2">
								<div class="save">
									购物返现
								</div> 
								<div class="go-back">
									单单返现5%无上限
								</div> 
								<div class="money">
									¥175.20
								</div>
							</div>	
						</div>
					</div>
				</div>
			</div>
			<div class="vip-produce">
				<div class="produce-title">
					<div class="title-text">
						<div>会员商品&会员专享价</div>
						<div>精选全球美食&nbsp;成为会员抢先购买</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				url:'./static/json/vip.json',
				vip_List:[]
			};
		},
		created(){
			// 是用axios传值
			this.$http.get(this.url).then((res)=>{
				// console.log(res.data.data.vip_list);
				this.vip_List = res.data.data.vip_list;
			});
		},
		mounted(){
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
			    fz = 16 * width / 375;
			    docEl.style.fontSize = fz + 'px';
			  };

			  if (!doc.addEventListener) return;
			  win.addEventListener(resizeEvt, refreshRem, false);
			  doc.addEventListener('DOMContentLoaded', refreshRem, false);
			  refreshRem();

			})(document, window);
		}
	}
	// zi
</script>
<style>	
*{
	margin:0;
	padding:0;
}
*{
	padding:0;
	margin: 0;
}
html{
	width: 100%;
	height: 100%;
	box-sizing: border-box;
}
body{
	width: 100%;
	height: 100%;
	line-height: 1.6;
}
/*toubu*/
.vip{
	width: 100%;
	height:100%; 
	/*display:none*/
}
.vip{
	width: 100%;
	height:100%; 
	/*display:none*/
}
.title-vip{
	width: 100%;
}
.title-vip >img{
	width: 100%;
}
.title-vip .img-title-vip{
	position: relative;
	margin-top: -5.6875rem;
	padding: 0 0.5rem;
	line-height: 1;

}
.title-vip .img-title-vip>img{
	width: 100%;
}
.title-vip .img-title-vip div{
	position: absolute;
	top: 7.8125rem;
    right: 2.6875rem;
    font-size: 0.875rem;
    padding: 0.5rem 0.625rem;
    color: #FFF;
    background: #ECA942;
    text-align: center;
    border-radius: 0.1875rem;
}
/*导航条*/
.vip .nav-vip{
	width: 100%;
	position: relative;
	height:  4.8125rem;
	overflow: hidden;

}
.vip .nav-vip ul{
	width: 100%;
	overflow-x: auto;
	white-space: nowrap;
	position: absolute;
	bottom:0;
	display: flex;
	font-size: .75rem;


}
.vip .nav-vip ul li{
	min-width: 5.1875rem;
	text-align: center;
	display: inline-block;
	font-size:  0.75rem;
}
.vip .nav-vip ul li img{
	width: 2.25rem;
	height: 2.25rem;
	margin-bottom: .25rem;
}
.vip .nav-vip ul li p{
	font-size: .75rem;
}
/*会员省钱*/
/*总得*/
.vip .save-money-vip{
	margin-top:1.5rem;
	padding: 0 .9375rem;
}
/*zong  2*/
.vip .save-vip{
	background: #fffbef;
}
/*title*/
.vip .count-money-vip{
	height:3.375rem;
	line-height:3.375rem;
	overflow:hidden;
	white-space:nowrap;
	text-overflow:ellipsis;
	position: relative; 
	color: #b9af91;
	font-size: 1rem;
	    border-bottom: 0.0625rem dashed #ECE7D8;
}

.vip .count-money-vip .omgs{
		position: absolute;
		left: 1rem;
		top: 1rem;
		width: 1.25rem;
		height: 1.375rem;
		display: inline-block;
		background-image: url("../assets/rwerw43.png");
}
.vip .count-money-vip span{
	width: 18.125rem;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    display: inline-block;
    margin-left: 3rem;
}
.vip .artical-money-vip .save span:nth-of-type(1){
	font-size: 1.125rem;
	color: #443e42;
}
.vip .artical-money-vip .save span:nth-of-type(2){
	color: #ff4891;
	position: absolute;
	right: 0;
}
.vip .artical-money-vip .saved-sub{
	font-size: .75rem;
	padding: 0 0.9375rem 0.625rem;
	color: #969696;
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
}
.vip .back-money{
	padding: 0 0.625rem 0.625rem;
}
.vip .back-money .save{
	 padding-top: 0.6875rem;
	padding-right: 5rem;
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
}
.vip .back-money .go-back{
	font-size: .75rem;
	color:#969696; 
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
} 
.vip .back-money .money{
	position: absolute;
    right: 0;
    display: inline-block;
    z-index: 1;
    top: 0.9375rem;
    color: #969696;
}
.vip .back-money .p2{
	 padding: 0.375rem 0;
    font-size: 0.875rem;
    color: #443E42;
    position: relative;
    border-bottom: 0.0625rem dashed #ECE7D8;
}
.vip .back-money .p1{
	    padding: 0 0.9375rem;
    	background: white;
}
.vip .vip-produce .produce-title{
	padding: 0 0.9375rem;
	height: 4.8125rem;
	font-size: 1.25rem;
	color: #474245;
	position: relative;
}
.vip .vip-produce .produce-title .title-text{
	position: absolute;
	bottom:0;
}
.vip .vip-produce .produce-title .title-text div:nth-of-type(1){
	color: #474245;
}
.vip .vip-produce .produce-title .title-text div:nth-of-type(2){
	color: #474245;
	font-size: .75rem;
	color: #969696;
}
/*商品列表*/
.vip .vip-goods{
	width: 100%;
	 padding: 0 0.9375rem;
	 background-color: #fff;
	 box-sizing: border-box;
}
.vip .goods-list{
	position: relative;
	padding: 1.375rem 0;
	background-color: #fff;
	width: 100%;
	display: flex;
	box-sizing: border-box; border-bottom: 0.0625rem solid #f5f5f5;
}
.vip .goods-img {
	width: 7.5rem;
    height: 7.5rem;
    margin-right: 0.9375rem;
    margin-left: 0.3125rem;
    position: relative;
}
.vip .goods-img img{
	width: 7.5rem;
	height: 7.5rem;
}
.vip .goods-text{
	flex: 1;
	width: 100%;
}
.vip .goods-text p:nth-of-type(1){
	font-size: 1rem;
	color: #474245;
}
.vip .goods-text p:nth-of-type(2){
	font-size: .875rem;
	color: #969696;
}
.vip .goods-text .down-price{
	color: #ff4891
}
.vip .goods-text .down-price:nth-of-type(2){
	color: #f8bc00;
	 margin-bottom: 0.625rem;
}
.vip .goods-text .down-price:nth-of-type(2) .price{
	color: #f8bc00;
	font-size: 1.25rem;
	font-weight: bolder;


}
.vip .goods-text .down-price .price{
	margin-left: -0.3125rem;
}
.vip .goods-text img{
	  display: block;
	
}
.vip .goods-text .cart{
	position: absolute;
	right: 0;
	top:6rem;
	  width: 3.0625rem
}
.boe{
	margin-bottom: 0.625rem;
}
</style>
