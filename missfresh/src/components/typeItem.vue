<template>
	<ul class="nav-all-list-wrap">
		<li class="nav-all-list-item" v-for="(item,index) in categoryList">
			<i class="item-icon" v-lazy:background-image="item.icon"></i>
			<h4>{{ item.name }}</h4>
		</li>
	</ul>
</template>
<script>
	export default{
		name:'typeItem',
		props:["categoryList"]
	}
</script>
<style>
	/*----------------全部分类菜单--------------*/
/*--------------题目---------------*/
	.nav-all-list{
		width: 100%;
		min-height: 170px;
		max-height: 410px;
		overflow-x: hidden;
		overflow-y: auto;
		position: absolute;
		top:-1px;
		left: 0;
		z-index: 120;
		background-color: #fff;
	}
	.nav-all-list-title{
		width: 100%;
		height: 44px;
		line-height: 44px;
		font-size: 16px;
		color:#262626;
		font-weight: 400;
		text-align:center;
		background-color: #fff;
		overflow:hidden;
		border-bottom: 1px solid #e6e6e6;
		margin-bottom: 20px;
	}
	.nav-all-list-title .nav-all-list-clo{
		position: absolute;
		top:0;
		right: 0;
		width: 40px;
		height: 44px;
		background: url(../assets/close01.png) center center no-repeat;
		background-size: 20px 20px;
	}
	/*-----------------内容----------------*/
	.nav-all-list-wrap{
		width: 100%;
		background-color: #fff;
		overflow-y: auto;
	}
	.nav-all-list-item{
		float: left;
		width: 33.3%;
		margin-bottom: 18px;
	}
	.nav-all-list-item .item-icon{
		background-image: url(../assets/img_20170613155747486.png);
		display: block;
		width: 100%;
		height: 58px;
		background-size: 36px;
		background-position: center center;
		background-repeat: no-repeat;
	}
	.nav-all-list-item h4{
		padding:0 10px;
		height: 18px;
		line-height: 18px;
		font-size: 12px;
		font-weight: 400;
		color: #4d4d4d;
		text-align:center;
		overflow:hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
</style>