<template>
	<div>
		<router-view></router-view>
		<div class="have-address">
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
						<li><span>收货人</span> <input type="text" placeholder="收货人姓名" :value="name" @input="updataName"></li>
						<li><span>手机号码</span><input type="text" placeholder="配送员联系您的电话"></li>
						<li><span>收货地址</span><input type="text" placeholder="收货人姓名"></li>
						<li><span>楼排门号</span><input type="text" placeholder="收货人姓名"></li>
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
			<router-link to="/addressList">
				<div class="btn">
					<button>保存收货地址</button>
				</div>
			</router-link>
			<!-- 有收货地址结束 -->
		</div>
	</div>
</template>
<script>
	import {store} from '../vuex/store.js'
	import {mapState} from 'vuex'
	export default({
		
	})

</script>
<style>
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
	margin-bottom: 20px;
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
</style>