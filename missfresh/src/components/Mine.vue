<template>
	<div id="mine">
		<div class="mine" v-show="show">
			<!-- 头部 -->
			<div class="home-mine">
				<div class="bottom-home-mine">
					<!-- 签到 -->
					<div class="check">
						<div class="qian">
							<span>签到</span>
						</div>
					</div>
					<!-- 头像姓名 -->
					<div class="top-home-mine">
					<!-- 头像 -->
						<div class="prc-mine">
							<img src="../assets/img_20170601002437822.png">
						</div>
						<!-- 名字称呼 -->
						<div class="name-mine">
							<!-- 1 -->
							<div class="name-top">
								<span class="home-name">小鲜</span>
								<img src="../assets/img_20171028220716130.png" class="home-img">
							</div>
							<!-- 2 -->
							<div class="name-bottom">
								<span>赠送体验卡></span>
							</div>
						</div>
						<!-- 会员到期 -->
					</div>
					<div class="vip-data">
							2017.11.16会员到期 
					</div>
				</div>
				<!--  home-mine end -->
			</div>
			<!-- 优惠卷 -->
			<div class="mine-total">
				<div class="home-money">
					<span><i>0</i>元</span>
					<span>余额</span>
				</div>
				<div class="home-money">
					<span><i>1</i>张</span>
					<span>红包</span>
				</div>
				<div class="home-money">
					<span><i>1</i>张</span>
					<span>商品卷</span>
				</div>
				<div class="home-money">
					<span><i>1</i>分</span>
					<span>积分兑换></span>
				</div>
			</div>
			<!-- 会员权益 -->
			<div class="member-equity">
				<div class="member-equity-link">
					<h4>会员权益</h4>
					<!-- 跳转到登录 -->
					<!-- 去续费 -->
					<span>
						去续费 
						<i></i>
						<span> ></span>
					</span>
				</div>
				<div class="member-equity-bottome">
					<p>成为优享会员，预计一年间为你
					<i>节省 1121.30元</i>
					</p>
				</div>
			</div>
			<!-- 导航部分 -->
			<div class="main-nav">
				<ul>
					<li v-for="(item, index) in mineList">
							<a :href="item.link">
								<img :src="item.path">
								<p>{{item.name}}</p>
							</a>	
					</li> 
				</ul>
			</div>
			<!-- 导航结束 -->
			<!-- 一张图 -->
			<div class="mine-banner">
				<img src="../assets/img_20171107230641093.png">
			</div>
			<!-- banner end -->

			<!-- 我的订单 -->
			<div class="home-list" @click="shows">
				<ul>
					<router-link to="mylist">
						<li class="mine-buy">
							我的订单
							<span>></span>
						</li>
					</router-link>
					<router-link to="/noArdss">
						<li class="mine-adrass">
							我的地址
							<span>
								>
							</span>
						</li>
					</router-link>
					<a href="http://a.app.qq.com/o/simple.jsp?pkgname=cn.missfresh.application&ckey=CK1341501716812"><li class="mine-load">下载每日优先APP<span>></span></li></a>
					<router-link to="/kefu">
						<li class="mine-service">
							联系客服
								<span>
								>
								</span>
						</li>
					</router-link>
					<router-link to="/yijian">
						<li class="mine-tickling">
							意见反馈
							<span>
								>
							</span>
						</li>
					</router-link>
					<li class="mine-message">消息<span>></span></li>
					<li class="mine-our">关于我们<span>></span></li>
					<li class="mine-set-up">设置<span>></span></li>
				</ul>
			</div>
			<!-- mine结束标签 -->
		</div>

	<!-- 输入信息 -->
	</div>
</template>
<script>
	// import longin from 'longin'
	export default {
		data(){
			return {
			url:"./static/json/vip.json",//请求地址
			mineList:[],
			show:true
			
			};
		},
	
		methods:{
			shows:function(){
				this.show = false;
			}
		},	
		
		// 使用axios请求数据
		created(){
			this.$http.get(this.url).then((res)=>{
				console.log(res.data.data.vip_list);
				this.mineList = res.data.data.vip_list;
			})
		},
		name : "Mine",
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
<style scoped>
	.mine{
		width: 100%;
		height: 100%;
		line-height:20px;
		font-size: 14px;
		display: block;
	}
	.mine .home-mine{
		width: 100%; 
	}
	.mine .home-mine .bottom-home-mine{
		background-image: url("../assets/img_20171028220420084.png");
		background-size: 100% 100%;
		padding-bottom: 10px;
	} 
	.mine .home-mine .top-home-mine{
		padding-top:15px;
		padding-left: 15px;
		position: relative;
	}
	/*-------------头像----------------*/
	.mine .home-mine .top-home-mine .prc-mine{
		display: inline-block;
		position: relative;
		width: 74px;
		height: 74px;
	}
	.mine .name-top{
		display: inline-block;
		height: 24px;
		vertical-align: middle;
	}
	.mine .home-mine .top-home-mine .prc-mine img{
		width: 74px;
		height: 74px;
		border-radius: 40px;
		border: 1px solid #262626;
	}
	/*------------姓名--------------*/
	.mine .home-mine .name-mine{
		display: inline-block;
		vertical-align: middle;
		margin-left: 14px;
		margin: auto;
		position: absolute;
		left: 104px;
		top:28px;
	}
	.mine .home-mine .home-name{
		font-size: 16px;
		color: #fff;
	}
	.mine .home-mine .name-mine .home-img{
		min-width: 50px;
		height: 15px;
		margin-left: 6px;
	}
	.mine .name-bottom{	
	    width: 80px;
	    height: 24px;
	    line-height: 24px;
	    color: #fff;
	    border: 1px solid #fff;
	    border-radius: 2px;
	    font-size: 12px;
	    padding-left: 5px;
	    margin-top: 4px;
	}
	/*-----------签到------------*/
	.check{
		display: flex;
	}
	.check .qian{
		 flex: 1;
	    text-align: right;
	    padding-right: 15px;
	}
	.check .qian span{
		display: inline-block;
	    min-width: 50px;
	    height: 30px;
	    line-height: 30px;
	    text-align: center;
	    color: #fff;
	    margin-top: 5px;
	    position: relative;
	}
	.mine .vip-data{
	     text-align: right;
	    padding-right: 15px;
	    color: #fff;
	    font-size: 12px;
	}
	.mine .mine-total{
		width: 100%;
	    height: 84px;
	    background: #fff;
	    display: table;
	    table-layout: fixed;
	    padding: 12px 0;

	}
	.mine .mine-total div{
		display: table-cell;
		padding-top: 10px;
		text-align: center;
	}
	.mine .mine-total div span{
		display: block;
		font-size: 12px;
		color: #4d4d4d;
	}
	.mine .mine-total div span i{
		font-size: 18px;
		font-style: normal;
	}
	.mine .member-equity-link{
		display: flex;
		height: 30px;
	}
	.mine .member-equity{
		padding: 15px 10px 0 15px;
		width: 100%;
		background-color: #fff;
		box-sizing: border-box;
	}

	.mine .member-equity h4{
		flex: 1;
	    line-height: 30px;
	    font-size: 20px;
	    color: #474245;
	    font-weight: normal;
	}
	.mine .member-equity span{
		font-size: 12px;
		float: right;
		line-height: 30px;
		color: #969696;
	}
	.mine .member-equity span i{
		display:inline-block;
		width: 20px;
		height: 16px;
		background-repeat: no-repeat;
		background-size: 100% 100%;
		vertical-align: middle;
		background-image: url("../assets/img_20171109160522719.png");
	}
	.mine .member-equity span span{
		font-family: "宋体";
		margin-left:5px;
		clear: both;
	}
	.mine .member-equity-bottome p{
		color:#969696;
		font-size: 12px;
		line-height: 18px; 
	}
	.mine .member-equity-bottome p i{
		color: #ff4891;
		font-style: normal;
	}
	.mine .main-nav{
		width: 100%;
		padding-top: 20px;
		padding-bottom: 5px;
	}
	.mine .main-nav ul{
		display: flex;
		width: 100%;
		overflow-x: auto;
		overflow-y: hidden;
	}
	.mine .main-nav ul li{
		width:22%;
		flex:none;
		text-align: center; 
	}
	.mine .main-nav ul li img{
		 width: 28px;
	    height: 28px;
	    margin-bottom: 7px;
	  
	}
	.mine .main-nav ul li{
		color:   #474245
	}
	/*----------一张图------------*/
	.mine .mine-banner {
		width: 100%;
		border-bottom: 1px solid #f6f6f6;
	}
	.mine .mine-banner img{
		width: 100%;
	}
	.home-list ul li{
		line-height: 60px;
		display: block;
		color: #262626;
		font-size: 15px;
		margin-left: 16px;
		border-top: 1px solid #f0f0f0;
		width: 90%;
	}
	.home-list ul li span{
		float: right;
		font-family: "宋体";
		color: #9b9b9b;
	}
</style>