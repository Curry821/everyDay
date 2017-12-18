<template>
    <div>
         <div>
                 <div class="checkMessage">
                 <div class="mineLogin">
			        <div class="renew-header-bar">
			        	<div class="go-back">			
				        </div>
			        	<span ></span>
				        <div class="title">
                            <h1>
                                验证手机
                            </h1>
                            <span style="float: right" >
                            </span>
                        </div>
                    </div>
                    <div class="message">
                        <div class="messageNums">
                            <div class="phoneNum">
                                <input type="text" name="" placeholder="请输入手机号" v-focus v-model="Phoneval" @click="textnum">
                                <p>{{ text }}</p>
                                <div class="phonebtn" @click="phonemessage()" >
                                    <button :disabled = "disabled" >
                                        {{ time }}
                                    </button>
                                </div>
                            </div>
                            <div class="speakNum">
                                <input type="text" name="" placeholder="请输入验证码" v-model="speakNum">
                                <p>{{ speaktext }}</p>
                            </div>
                        </div>
                        <div class="padding">
                            <button @click="login">
                                登录
                            </button>
                        </div>
                    </div>
                </div>
            </div>
		        <p>为方便您及时查询订单信息，需要验证您的手机号来登录</p>
            </div>
    </div>
</template>
<script>
    import Vue from "vue"
    import router from 'vue-router'
   export default{
        data(){
            return {
                time:'获取验证码',//时间按钮
                disabled:false,//按钮禁用
                Phoneval:'',//手机号输入框
                text:''	,//错误提示信息
                speaktext:"",//错误提示信息
                speakNum:'',//验证码输入框
                sendNum:9979//假装发来的验证码
            }
        },
        methods:{
            	// 点击输入框清空text
			textnum() {
				this.text = ''
			},
			// 点击验证码
			phonemessage () {
                this.text = '';
                // 手机号正则
                var reg= /^((13|14|15|17|18)[0-9]{1}\d{8})$/;
                    if( this.Phoneval == ''){
                        this.text = '手机号码不能为空'

                    }else if( !reg.test ( this. Phoneval )){
                        this. text = '手机号码格式不正确';
                        this. Phoneval = '';
                    }else{
                    //按钮的不可以禁止点击 
                    this. disabled = true;
                    //  清楚输入框
                    this. text = '';
                    let self = this;  //注意点  计时器里this的指向变成了window 所以要转换一下
                    
                    self.time = 60;//总的时间
                    let interval = setInterval ( function () {
                        // 注意  ()	
                        if( (self.time--) <= 0 ){
                            self.time = 60;
                            window.clearInterval( interval );
                            self.time = "点击获取验证码";
                            self.disabled = false;

                        }
                    },1000)
                }
                },
                // 登录成功
                login(){
                    var reg= /^((13|14|15|17|18)[0-9]{1}\d{8})$/;
                    if( this.Phoneval == ''){
                        this.text = '手机号码不能为空'

                    }
                    else if( !reg.test ( this. Phoneval )){
                        this. text = '手机号码格式不正确';
                        this. Phoneval = '';
                    }
                    else if(this.Phoneval == '17610399682'){
                        if(this.speakNum == this.sendNum){
                            // alert('登陆成功');
                            // 这种方法不行他就刷一下
                            // this.$router.go('/Mine')
                            this.$router.push({path:'/Mine'});
                            // console.log($router);
                        }else{
                            this.speaktext = '验证码错误'
                            this.speakNum = '';
                        }
                    }else{
                        this.text = '用户名错误'; 
                        this.Phoneval = ''
                    }
                },
            },
            //根据验证码长度的大于4时
            watch:{
                speakNum( newvalue, oldvalue ){
                    if( this. speakNum. length == 4 ){
                        this.speakNum  = newvalue;
                
                    }else if( this. speakNum. length > 4){
                        alert('长度超出')
                    }
                }		
            }
        }
         Vue.directive('focus',{
        //绑定元素插入dom中
        //当前使用指令的文本框自懂实现获取焦点
        //el 表示当前对象
        inserted: function (el) {
            //聚焦元素
            el.focus();
        },
    });
    // export default login;
</script>

<style>
    	/*登录*/
    .mine{
            display: none;
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
.messageNums{
	margin: 70px 30px 10px 30px
}
.messageNums input{
	border: none;
	outline:none;
	height: 35px;
	font-size: 16px;

}
.messageNums .phoneNum {
	position: relative;
    border-bottom: 1px solid #e6e6e6;
    padding: 5px 0;
    background: 0 0;
}
.messageNums .phoneNum p{
	color: #ff4891 ;
	text-align: left;
	padding:0;
}
 .phonebtn button{
	 font-size: 14px;
    color: #ff4891;
    padding: 5px 5px 4px;
    border: 1px solid #ff4891;
    border-radius: 5px;
    background: #fff;
	min-width: 82px;
}
 .phonebtn{
	position: absolute;
    right: 0;
    top: 5px;
    z-index: 10;
}
.bthPhone{
	 font-size: 14px;
    color: #666;
    padding: 5px 5px 4px;
    border: 1px solid #666;
    border-radius: 5px;
    background: #fff;
	min-width: 82px;
}
.messageNums .speakNum {
	position: relative;
    border-bottom: 1px solid #e6e6e6;
    padding: 5px 0;
    background: 0 0;
}
.messageNums .speakNum p{
	padding: 0;
	color: #ff4891;
}
.padding{
    padding: 20px 30px 15px;
    width: 100%;
    box-sizing: border-box;
	min-width:82px ;

}
.padding button{
	width: 100%;
	background-color: #ff4891;
	text-align: center;
	color: #fff;
	font-size: 14px;
	border:none;
	line-height: 39px;
	border-radius: 4px;
	min-width:82px ;
}
/* .padding button ::after{
    position: absolute;
    top: -6px;
    right: -6px;
    bottom: -6px;
    left: -6px;
    content: ' ';
} */
p{
	padding: 5px 30px 0 32px;
    color: #969696;
    font-size: 12px;
}
</style>


