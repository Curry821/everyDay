<template>
	<div>
		<div class="add-address">
			<div class="address">
				<div class="renew-header-bar">
					<div class="go-back">
					
					</div>
					<span ></span>
					<div class="title">
						<h1>
							收或地址
						</h1>
						<span class="add">
							添加
						</span>
					</div>	
				</div>
			</div>
			<div class="add-address-list">
				<div class="name">
					<h2>lidhong</h2>
				</div>
				<div class="phone-num">
					<p>1212121212</p>
				</div>
				<div class="home-address">
					<span>住宅</span>
					<span>safs</span>
					<span>(sfsfs)</span>
				</div>
				<div>
					<span>编辑</span>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
</script>
<style>
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
</style>