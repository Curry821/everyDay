<template>
	<div>
		<div class="chat-severs">
		<div class="renew-header-bar">
		<div class="go-back">
			
		</div>
			<span ></span>
			<div class="title">
				<h1>
				客服与帮助
				</h1>
			</div>	
		</div>
		<div class="chat-severs-nav">
			<ul>
				<li>
					<div></div>
					<p>
						支持售后退款
					</p>
				</li>
				<li>
					<div></div>
					<p>
						支持售后退款
					</p>
				</li>
				<li>
					<div></div>
					<p>
						支持售后退款
					</p>
				</li>
			</ul>
		</div>
		<!-- 客服页面结束标签 -->
	</div>
	</div>
</template>
<script>
	
</script>
<style>
.chat-severs {
	width: 100%;
	height: 100%;
	line-height: 20px;
	color: #4b4b4b;
}
.chat-severs .chat-severs-nav{
	width: 100%;
}
.chat-severs .chat-severs-nav ul{
	padding: 10px 0;
	margin-bottom: 5px;
	background-color: #fff;
	display: flex;
	width: 100%;
	color: #4b4b4b;
}
.chat-severs .chat-severs-nav ul li{
	width: 33.3%;
	text-align: center;
	border-right: 1px solid #e3e3e5;
}
.chat-severs .chat-severs-nav ul li(1){
	border-right: none;
}
.chat-severs .chat-severs-nav ul li div{
	margin: auto;
	width: 23px;
	height: 21px;
	background-repeat: no-repeat;
	background-size: 100% 100%;
	background-image: url("../assets/tui@2x (1).png");

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