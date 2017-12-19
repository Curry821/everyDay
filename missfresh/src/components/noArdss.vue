<template>
	<div id="ads" >
				<!-- 收获地址 -->
		<div class="address" v-show ="shows">
			<div class="renew-header-bar">
				<div class="go-back">
				</div>
				<span ></span>
				<div class="title">
					<span class="getMap" @click= "ditu">获取地址</span>
				<h1>
					收货地址
				</h1>
				<span class="add" @click="show">添加</span>
			</div>	
		</div>
		<!-- 没有收获地址得时候 -->
		<div class="not-address">
			<div id="ditu" ></div>
			<div @click="show">您还没有收货地址请添加</div>
		</div>
	<!-- 	<router-link to="/haveAdress"> -->
		<div class="btn">
				<button>
					添加收货地址
				</button>
		</div>
	<!-- 	</router-link> -->
	</div>
	<!-- 有收货地址结束 -->
			<div class="have-address" v-show = "adsshows">
			<div class="renew-header-bar">
				<div class="go-back">			
				</div>
				<span ></span>
				<div class="title">
					<h1>
						新增收货地址
					</h1>
				</div>
			</div>
			<!-- 输入信息 -->
			<div class="have-address-all">
				<div class="have-address-message">
					<ul>
						<li><span>收货人</span> <input type="text" v-focus placeholder="收货人姓名"  v-model="name"></li>
						<li><span>手机号码</span><input type="text" placeholder="配送员联系您的电话" v-model="phoneNum"></li>
						<li><span>收货地址</span><input type="text" placeholder="收货人姓名" v-model='address'></li>
						<li><span>楼排门号</span><input type="text" placeholder="收货人姓名" v-model='addressNum'></li>
						<li>
						<span>地址类型 </span>
							<div>
								<span class="active">住宅</span>
								<span>公司</span>
								<span>学校</span>
								<span>其他</span>
							</div>
						</li>
					</ul>
				</div>
			</div>
				<div class="btn" @click=" list">
					<button @click="addDate">保存收货地址</button>
				</div>
			<!-- 有收货地址结束 -->
		</div>
		<!-- 收货地址 -->
				<div class="add-address" v-show="nolist">
			<div class="address">
				<div class="renew-header-bar">
					<div class="go-back">
					</div>
					<span ></span>
					<div class="title">
						<h1>
							收货地址
						</h1>
						<span style=" float: right" @click="asd">添加</span>
					</div>	
				</div>
			</div>
			<div class="add-address-list" v-for="(item,index) in ads_list">
				<div class="revise-list">
					<div class="revise-address">
						<div class="name">
							<h2 style="font-weight: normal; color: #4b4b4b">{{ item.msg_name }}</h2>
						</div>
						<div class="phone-num" style="color: #666">
							<p>{{ item.msg_phoneNum }}</p>
						</div>
						<div class="home-address">
							<span style="color: #ff4891">住宅</span>
							<span style="color: #4b4b4b">{{ item.msg_address }}</span>
							<span style="color: #4b4b4b">{{  item.msg_addressNum }}</span>
						</div>
						<!-- 点击编辑出来修改页面 -->
						<div class="revise" @click="reviselist(index)">
						<span style="color: #666">编辑</span>
						</div>
					</div>
				</div>
			</div>
			<div class="btn">
				<button>新增收货地址</button>
			</div>
		</div>
		<!-- 点击编辑出来的标签-->
			<div class="revise-have-address" v-show = "revise">
			<div class="renew-header-bar">
				<div class="go-back">			
				</div>
				<span ></span>
				<div class="title">
					<h1>
						编辑收货地址
					</h1>
					<span style="float: right" >
						删除
					</span>
				</div>
				
			</div>
			<!-- 输入信息 -->
			<div class="have-address-all">
				<div class="have-address-message">
					<ul>
						<li><span>收货人</span> <input type="text" v-focus placeholder="收货人姓名"  v-model="user.name"></li>
						<li><span>手机号码</span><input type="text" placeholder="配送员联系您的电话" v-model="user.phoneNum"></li>
						<li><span>收货地址</span><input type="text" placeholder="收货人姓名" v-model='user.address'></li>
						<li><span>楼排门号</span><input type="text" placeholder="收货人姓名" v-model='user.addressNum'></li>
						<li>
						<span>地址类型 </span>
							<div>
								<span class="active">住宅</span>
								<span>公司</span>
								<span>学校</span>
								<span>其他</span>
							</div>
						</li>
					</ul>
				</div>
			</div>
				<!-- 编辑的保存收货地址追加到地址列表里面 -->
				<div class="btn" @click="reviseData">
					<button>保存收货地址</button>
				</div>
			<!-- 有收货地址结束 -->
		</div> 
	</div>
</template>
<script>
	import Vue from 'vue';
	// 定义全局组件
	Vue.component('loginMine',{
	template: `
		
	
	
	`})
	//自动获取焦点事件
	Vue.directive('focus',{
	//绑定元素插入dom中
	//当前使用指令的文本框自懂实现获取焦点
	//el 表示当前对象
	inserted: function (el) {
		//聚焦元素
		el.focus()
	},
});

	export default{
			data(){
				return {
					shows:true,
					// 要遍历的信息
					ads_list:[
					],
					nolist:false,
					adsshows:false,
					// 编辑页面
					revise:false,
					//初始化 添加列表数据
					// 双向数据
					name:'',
					phoneNum:'',
					address:'',
					addressNum:'',
					indexNum:0,
					//初始化编辑内容
					user:{
						name:'',
						phoneNum:'',
						address:'',
						addressNum:'',
					}

				}
			},
			methods:{
				show: function(){
				this.shows = false;
				this.adsshows = true
				},
				list: function () {
					this.nolist = true;
					this.adsshows = false
					// this.haslist = false
				},
				// 点击添加
				asd: function () {
					this.nolist =false;
					this.adsshows = true;
					//清空输入框
				
				},
				//点击编辑时候传入下标拿到下标
				reviselist(index){
					this.revise = true;
					this.nolist = false;
					this.indexNum = index;
					//替换输入框中的内容
					this.user.name = this.ads_list[index].msg_name;
					this.user.phoneNum = this.ads_list[index].msg_phoneNum;
					this.user.address = this.ads_list[index].msg_address;
					this.user.addressNum = this.ads_list[index].msg_addressNum;

				},
				// 点击保存
				addDate() {
					var msglist = {
							msg_name:this.name,
							msg_phoneNum:this.phoneNum,
							msg_address:this.address,
							msg_assressNum:this.addressNum
						};
					this.ads_list.push(msglist)
					// 构建地址信息
				},
				//点击修改的保存
				reviseData(){
					this.revise = false;
					this.nolist = true;
					//因为操作的是下标
					this.ads_list[this.indexNum].msg_name = this.user.name;
					this.ads_list[this.indexNum].msg_phoneNum = this.user.phoneNum;
					this.ads_list[this.indexNum].msg_addressNum = this.user.addressNum;
					this.ads_list[this.indexNum].msg_address = this.user.address;
				}

		},
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

	.address{
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
/*有收货地址*/
.have-address {
	width: 100%;
	height: 100%;
	background-color: #f0f0f0;
}
.have-address-all{
	width: 100%;
	background-color: #fff;
	padding: 0;
	margin: 0;
}
.have-address .have-address-message{
	background-color: #fff;
	padding-bottom: 1px;
	margin-left: 0;
	padding-top: 1px;
}
.have-address .have-address-message ul{
	width: 100%;
	background-color: #fff;
}
.have-address .have-address-message ul li{
	border: none;
    border-bottom: 1px solid #eee;
    position: relative;
    margin: 0 10px 8px;
    padding: 8px 0 0; 
}
.have-address .have-address-message ul li span{
font-size: 16px;
color:#272727;
width: 107px;
flex:  0 0 auto;
padding: 0px 0px 14px 0;
max-width: 200px;
display: inline-block;
}
.have-address .have-address-message input{
	border:none;
	font-size: 14px;
}
input::input-placeholder{color:  #bdbdbd ;} /* 有些资料显示需要写，有些显示不需要，但是在编辑器webstorm中该属性不被识别 */
::-webkit-input-placeholder { /* WebKit browsers */ 
color: #999; 
} 
:-moz-placeholder { /* Mozilla Firefox 4 to 18 */ 
color: #999; 
} 
::-moz-placeholder { /* Mozilla Firefox 19+ */ 
color: #999; 
} 
:-ms-input-placeholder { /* Internet Explorer 10+ */ 
color: #999; 
} 

/*其他*/
.have-address .have-address-message ul li div{
	position: absolute;
	top:4px;
	left: 107px;
}
.have-address .have-address-message ul li div span{
	width: 30px!important;
	height: 18px!important;
	text-align:center!important;
	color: #eee;
	border:1px solid #eee!important;
	margin-right: 15px!important;
	line-height: 17px;
	font-size: 12px;
	padding: 0;
	border-radius: 4px;
}
.have-address  .active{
	background-color: #ff4891;
	color: #fff!important;
	border: none;
}
.have-address  .btn button{
	width: 100%;
	background-color: #ff4891;
	text-align: center;
	color: #fff;
	font-size: 14px;
	border:none;
	line-height: 39px;
	border-radius: 4px;
}
.have-address .btn{
	padding: 0 15px;
	 position: absolute;
    left: 0;
    top: 80%;
    width: 100%;
    box-sizing: border-box;
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

	.add-address{
		width: 100%;
		height: 100%;
	}
	.add-address.renew-header-bar{
		padding: 5px;
		height: 44px;
		background-color: #fff;
		position: relative;
		box-sizing: border-box;
		box-shadow: 0 0 10px rgba(0,0,0,.06);
		border-bottom: 1px solid #ececec;
		z-index: 9;
	}
	.add-address.renew-header-bar .add{
		position: absolute;
		right: 10px;
		font-size: 17px;
	}
	.add-address.renew-header-bar .title{
		display: block;
		margin: 0 10px;
		min-width: 30px;
		height: 43px;
		text-align: center;
		line-height: 31px;
	}
	.add-address.renew-header-bar .title h1{
		position: absolute;
		left: 40px;
		right: 40px;
		font-size: 17px;
		font-weight: 500;
	}
.add-address{
	background-color: #fff;
	
}
.revise-list{
	padding: 15px 15px 12px 0;position: relative;
}
.revise{
	position: absolute;
	right: 15px;
	top:30px;
}
.revise-address{
	padding-left: 20px;
	width: 70%;
}
/*点击编辑出来的*/
.revise-have-address {
	width: 100%;
	height: 100%;
	background-color: #f0f0f0;
}
.revise-have-address{
	width: 100%;
	background-color: #fff;
	padding: 0;
	margin: 0;
}
.revise-have-address .have-address-message{
	background-color: #fff;
	padding-bottom: 1px;
	margin-left: 0;
	padding-top: 1px;
}
.revise-have-address .have-address-message ul{
	width: 100%;
	background-color: #fff;
}
.revise-have-address .have-address-message ul li{
	border: none;
    border-bottom: 1px solid #eee;
    position: relative;
    margin: 0 10px 8px;
    padding: 8px 0 0; 
}
.revise-have-address .have-address-message ul li span{
font-size: 16px;
color:#272727;
width: 107px;
flex:  0 0 auto;
padding: 0px 0px 14px 0;
max-width: 200px;
display: inline-block;
}
.revise-have-address .have-address-message input{
	border:none;
	font-size: 14px;
}
input::input-placeholder{color:  #bdbdbd ;} /* 有些资料显示需要写，有些显示不需要，但是在编辑器webstorm中该属性不被识别 */
::-webkit-input-placeholder { /* WebKit browsers */ 
color: #999; 
} 
:-moz-placeholder { /* Mozilla Firefox 4 to 18 */ 
color: #999; 
} 
::-moz-placeholder { /* Mozilla Firefox 19+ */ 
color: #999; 
} 
:-ms-input-placeholder { /* Internet Explorer 10+ */ 
color: #999; 
} 

/*其他*/
.revise-have-address .have-address-message ul li div{
	position: absolute;
	top:4px;
	left: 107px;
}
.revise-have-address .have-address-message ul li div span{
	width: 30px!important;
	height: 18px!important;
	text-align:center!important;
	color: #eee;
	border:1px solid #eee!important;
	margin-right: 15px!important;
	line-height: 17px;
	font-size: 12px;
	padding: 0;
	border-radius: 4px;
}
.revise-have-address  .active{
	background-color: #ff4891;
	color: #fff!important;
	border: none;
}
.revise-have-address .btn button{
	width: 100%;
	background-color: #ff4891;
	text-align: center;
	color: #fff;
	font-size: 14px;
	border:none;
	line-height: 39px;
	border-radius: 4px;
}
.revise-have-address.btn{
	padding: 0 15px;
	 position: absolute;
    left: 0;
    top: 80%;
    width: 100%;
    box-sizing: border-box;
}
</style>