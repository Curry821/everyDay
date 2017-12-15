<template>
	<div>
		<div class="my-buy-list">
			<div class="renew-header-bar">
					<div class="go-back">
						
					</div>
					<span ></span>
					<div class="title">
						<h1>
							我的订单
						</h1>
					</div>
			</div>
			<div class="not-address">
			<div>
				您还没有收货地址请天假
			</div>
			<div>
				添加订单
			</div>
		</div>
	</div>
</div>
</template>
<script>
	
</script>
<style scoped>
body{
	height: 100%;
	background-color: #f0f0f0;
}
.my-buy-list{
	width: 100%;
	height: 100%;
	background-color: #f0f0f0;
	position: absolute;
	z-index:10;
}
.my-buy-list .not-address{
	padding-top: 180px;
    margin: 100px auto 0;
    background: url(../assets/not-address.png) center no-repeat;
    background-size: 90px 90px;
    text-align: center;
    font-size: 15px;
    color: #7f7f7f;
}

.my-buy-list .not-address div{
	text-align: center;
}
.my-buy-list .not-address div:nth-of-type(2){
    line-height: 27px;
    min-height: 27px;
    min-width: 97px;
    border: 1px solid #777;
    border-radius: 5px;
    margin-top: 10px;
    display: inline-block;
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