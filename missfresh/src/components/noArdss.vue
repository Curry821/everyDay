<template>
	<div>
		<!-- 收获地址 -->
		<div class="address">
			<div class="renew-header-bar">
				<div class="go-back">
					
				</div>
				<span ></span>
				<div class="title">
				<h1>
					收货地址
				</h1>
				<router-link to="/haveAdress">
					<span class="add">
						添加
					</span>
				</router-link>
			</div>	
		</div>
		<!-- 没有收获地址得时候 -->
		<div class="not-address">
			<div>您还没有收货地址请添加</div>
		</div>
	<!-- 	<router-link to="/haveAdress"> -->
		<div class="btn">
				<button>
					添加收货地址
				</button>
		</div>
	<!-- 	</router-link> -->
</div>
<router-view></router-view>
</div>

</template>
<script>
	export default{
			mounted(){
			//添加修改state数据
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

			})(document, window);

		}
	}
</script>
<style>
	*{
		padding: 0;
		margin: 0;
	}
	address{
		width: 100%;
		height: 100%;
		background-color: #f0f0f0;
	}
	.address .not-address{
		padding-top: 128px;
		margin-top:120px;
	    margin: 120px auto 0;
	    background: url(../assets/not-address.png) center no-repeat;
	    background-size: 90px 90px;
	    padding-top: 128px;
	    text-align: center;
	    font-size: 15px;
	    color: #7f7f7f;
	}

	.address .not-address div{
		text-align: center;
	}
	.renew-header-bar{
	padding: 5px;
	height: 44px;
	background-color: #fff;
	position: relative;
	box-sizing: border-box;
	box-shadow: 0 0 10px rgba(0,0,0,.06);
	border-bottom: 1px solid #ececec;
	z-index: 9;
}
.renew-header-bar .add{
	position: absolute;
	right: 10px;
	font-size: 17px;
}
.renew-header-bar .title{
	display: block;
	margin: 0 10px;
	min-width: 30px;
	height: 43px;
	text-align: center;
	line-height: 31px;
}
.renew-header-bar .title h1{
	position: absolute;
	left: 40px;
	right: 40px;
	font-size: 17px;
	font-weight: 500;
}
 .btn button{
	width: 100%;
	background-color: #ff4891;
	text-align: center;
	color: #fff;
	font-size: 14px;
	border:none;
	line-height: 39px;
	border-radius: 4px;
}
.btn{
	padding: 0 15px;
	 position: absolute;
    width: 100%;
    box-sizing: border-box;
    left: 0;
    top: 80%;
}
</style>