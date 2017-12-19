<template>
    <div>
        <div class="img">
            <!-- <img src="static/load.ico" alt=""> -->
          <h2>Loading......</h2>
        </div>
    </div>
</template>
<script type="text/javascript">
	document.getElementsByTagName('html')[0].style.fontSize=(document.documentElement.clientWidth || document.body.clientWidth)/375*100 + "px";
	window.onresize = function(){
		//取得当前视口宽度
		var clientWidth = document.documentElement.clientWidth || document.body.clientWidth;
		//根据标准大小375 计算当前视口对应的跟节点font-size
		var size = clientWidth/375*100 + "px";
		document.getElementsByTagName('html')[0].style.fontSize = size;
	}
</script>
<script>
export default {
  
}
</script>
<style>
    .img{
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        background-color: #fff;
        z-index: 90;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .img h2{
        font-size:0.6rem;
    }
    
</style>

