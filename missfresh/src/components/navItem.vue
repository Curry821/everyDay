<template>
	<div class="scroll">
		<div class="nav-item" v-for="(item,index) in categoryList">
			<span class="nav-item-txt">{{ item.name }}</span>
		</div>
	</div>
</template>
<script>
	export default{
		name:"navItem",
		props:["categoryList"]
	}
</script>
<style>
.nav-class .nav-item{
	white-space: nowrap;
	text-align-last: center;
	display: inline-block;
	line-height: 40px;
	background-size: contain;
	background-position: center right;
	background-repeat: no-repeat;
}
.nav-item .nav-item-txt{
	display: block;
	margin:0 10px;
	font-size: 14px;
	padding: 0 3px;
	color:rgb(38,38,38);
}
.nav-item .nav-item-txt.active{
	border-bottom: 2px solid #ff4891;
}
/*------------全部分类显示按钮----------*/
.nav-class .nav-all-list-btn{
	width: 30px;
	height: 30px;
	position: absolute;
	top:3px;
	right: 7px;
	background: url(../assets/listAll.png) center center no-repeat;
	background-size: 22px 22px;
}
</style>