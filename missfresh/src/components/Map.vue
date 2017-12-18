<template>
    <div id="mapa">
    
              <div id="ditu"></div>

        <button @click='ditu'>点击</button>
    </div>
    </div>
</template>

<style>
#mapa {
    height: 600px;
    width:500px;
}
</style>

<script>

export default {
 methods:{
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
        buttonPosition: 'LT',    //定位按钮停靠位置，默认：'LB'，左下角
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