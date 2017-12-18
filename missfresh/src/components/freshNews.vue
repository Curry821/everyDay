<template>
<div id="freshNews">
	<load v-show="isload"></load>	
	<scroller class="fresh-news" on-refresh="refresh" :on-infinite="infinite" ref="myscroller">
		<!-- 头部小白条 -->
		<div class="fresh-news-header">

		</div>	
		<!-- 做菜 -->
		<div class="fresh-news-article" v-for="(item,index) in proList">
			<div class="fresh-news-article-info">
			<!-- 大图 -->
					<div class="vonten" >
						<div class="content">
							<a :href="item.link">
							<img :src="item.img">

						<!--滤镜图 -->
							<div class="bg"><img src="src/assets/opctiv.png"></div>
						<!-- 右上角 -->
							<div class="fresh-news-article-info-text">
								<p>教你做菜</p>
							</div>
							</a>
						<!-- 小心心 -->
						<div class="i-like">
							<img src="src/assets/data-image-png;base… (1).png">
							<!-- 喜欢 -->
							<span>{{item.like}}</span>
						</div>
					</div>	
					<!-- 图片下文字 -->
					<div class="fresh-news-article-info-name">
						{{ item.s_content }}
					</div>
					<!-- 介绍 -->
					<div class="fresh-news-article-info-peifang">
						{{item.s_content}}	
					</div>	
					<!-- 发布时间 -->
					<div class="fresh-news-article-info-look">
						<span>{{ item.online_time }}</span>
						<span>|</span>
						<span>{{ `${item.view} 次浏览`}}</span>
					</div>
				</div>
			</div>
		</div>
	</scroller>
</div>
</template>
<script>
	import load from "@/components/load"
	export default{
		data() {
			return{
				/*返回请求的数据*/
				url:'./static/json/freshNew.json',
				proList:[],
				noData: '',
				isload:true
			};
		},
		components:{
			load
		},
		// ready() {
  //     for (let i = 1; i <= 20; i++) {
  //       this.items.push(i + ' - keep walking, be 2 with you.')
  //     }
  //     this.top = 1
  //     this.bottom = 20

  //     setTimeout(() => {
  //        下面2种方式都可以调用 resize 方法 
  //       // 1. use scroller accessor
  //       $scroller.get('myScroller').resize()

  //       // 2. use component ref
  //       // this.$refs.my_scroller.resize()
  //     })
  //   },

		methods:{
			infinite(done){
				console.log(this.noData);
				if(this.noData){
					setTimeout( ()=> {
						this.$refs.myscroller.finishInfinite(2);
					})
					return;
				}
				let self = this;
				let start = this.proList.length;
				setTimeout( ()=> {
					for(let i = start + 1; i < start + 0; i++){
						self.proList.push(i);
					}
					if(start > 2) {
						self.noData = '没有更多数据'
					}
					self.$refs.myscroller.resize();
					done()
				},1500)

			},
		 refresh(done) {
		     setTimeout(() => {
		       let start = this.top - 1
		       for (let i = start; i > start - 10; i--) {
		         this.proList.splice(0, 0, i + ' - keep walking, be 2 with you.')
		       }
		       this.top = this.top - 10;
		       done()
		     }, 1500)
		   },
	},
		created(){
			// 使用axio 插件请求数据
			this.$http.get(this.url).then((res)=>{
			console.log(res.data.data.discover_con_list);
			this.proList = res.data.data.discover_con_list;
			this.isload =false
			});
		},
		mounted(){
			   for (let i = 1; i <= 20; i++) {
        	 this.proList.push(i  + ' - keep walking, be 2 with you.')
       }
       this.top = 1,
       this.bottom = 20,
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
			    fz = 16 * width / 375;
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
<style>
	*{
	box-sizing: border-box;
}
html{
	width: 100%;
	height: 100%;
	font-size: 16px;
}
body{
	height: 100%;
    font-size: .875rem;
    word-wrap: break-word;
    line-height: 1.6;
    font-family: -apple-system-font,Helvetica Neue,sans-serif;
}
div{
	display: block;
}
.fresh-news{
	width: 100%;
	height: 100%;
	padding: 0 0.9375rem;
    margin-bottom: 0.625rem;
}
/*头部小白条*/
.fresh-news-header{
	width:100%;
	height: 1.875rem;
	border:none;
}
/*第一个模块*/
.fresh-news-article-info{
	width: 100%;
	text-align: center;
	line-height: 1.6;
 	border-bottom: 0.0625rem solid #F5F5F5;
}
/*图片*/
.fresh-news-article-info .content{
	width: 100%;
	position: relative;
	color: #fff;
}
.fresh-news-article-info .content img{
	width: 100%;
	/*margin: 0.625rem 0 0.625rem 0;*/
   border-radius: 0.1875rem;

}
/*教你做菜图上*/
.fresh-news-article-info-text{
	font-size: 1rem;
	position: absolute;
	top:1.25rem;
	left: 0.625rem;
	font-size:  0.625rem;
	display: inline-block;
	color: #969696;
	background-color: #fff;
	border: 0px solid #f5f5f5;
	border-radius: 0.125rem;
	padding: 0 0.3775rem;
}
/*喜欢的小心*/
.fresh-news-article-info .i-like{
	position: absolute;
	bottom: 1.4375rem;
	right: .625rem;
	display: inline-block;
}
/*小心心图*/
.fresh-news-article-info .i-like img{
	width: 1.25rem;
	height: 1.25rem;
	display: inline-block;
	vertical-align: bottom;
}
/*旁边的字*/
.fresh-news-article-info .i-like span{
	text-align: center;
	font-size: .875rem;
}
/*菜的名字*/
.fresh-news-article-info-name{
	color: #4d4d4d;
	font-size: 1rem;
}
/*介绍*/
.fresh-news-article-info-peifang{
	color: #969696;
	font-size: .75rem;
	padding-bottom:.625rem; 
}
/*浏览*/
.fresh-news-article-info-look{
	color: #c6c6c6;
	font-size: .75rem;
   padding-bottom: 1.4375rem;
}
.fresh-news-article-info .content .bg img{
	position: absolute;
	width: 100%;
	height: 5.5rem;
    bottom: 0rem;
    border-radius: 0.1875rem;
    left:0;
}
.fresh-news-article-info-texts {
	position: absolute;
	top:1.25rem;
	right: .625rem;
	display: inline-block;
	font-size: .625rem;
	color: #969696;
	background-color: #fff;
	padding:  0  0.375rem;
	border-radius: 0.125rem;
	border:  0px solid #f5f5f5;
}
</style>