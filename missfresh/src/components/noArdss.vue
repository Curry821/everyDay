<template>
	<div>
		<!-- 收获地址 -->
		<div class="address">
			<div class="renew-header-bar">
				<div class="go-back">
					
				</div>
				<span ></span>
				<div class="title">
					<span class="getMap" @click= "ditu">获取地址</span>
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
			<div id="ditu" ></div>
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

		},
		methods:{
			//调用地图的方法
		 ditu() {
          let mapobj = new AMap.Map('ditu', {
                  //缩放级别
            zoom: 11,
           //地图的中心点
           center: [116.40, 39.91],
          })
        
			var toolBar = new AMap.ToolBar(),
				overView = new AMap.OverView(),
				scale = new AMap.Scale();
				//添加控制条，鹰眼，缩放
				mapobj.addControl(toolBar);
				mapobj.addControl(overView);
				mapobj.addControl(scale);   

				mapobj.plugin('AMap.Geolocation', function () {
			var geolocation = new AMap.Geolocation({
				enableHighAccuracy: true,//使用高精度定位
				timeout: 10000,          //超过10秒后停止定位
				maximumAge: 0,           //定位结果缓存0毫秒
				convert: true,           //自动偏移坐标，偏移后的坐标为高德坐标
				showButton: true,        //显示定位按钮，默认：true
				buttonPosition: 'LB',    //定位按钮停靠位置，默认：'LB'，左下角
				buttonOffset: new AMap.Pixel(10, 20),//定位按钮与设置的停靠位置的偏移量
				showMarker: true,        //在定位到的位置显示点标记，
				showCircle: true,        //用圆圈表示定位精度范围
				panToLocation: true,     //将定位到的位置作为地图中心点，
				zoomToAccuracy:true      //调整地图视野范围使定位位置及精度范围视野内可见
			});

			mapobj.addControl(geolocation);
			geolocation.getCurrentPosition();
			AMap.event.addListener(geolocation, 'complete', onComplete);//返回定位信息
			AMap.event.addListener(geolocation, 'error', onError);      //返回定位出错信息
		});

  }
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
	
	
	  	 width:248px;
	   	height:248px;
	    /*  background: url(../assets/not-address.png) center no-repeat; */
	    background-size: 90px 90px;
	    text-align: center;
	    font-size: 15px;
	    color: #7f7f7f;
	}

 #ditu{
	
		width:380px;
	   	height:246px;
	}
	.getMap{
		position: absolute;
		left: 15px;;
		top: 7px;
		font-size:17px; 
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