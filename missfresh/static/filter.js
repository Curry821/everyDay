import Vue from 'vue'

// 返现截取字符串
Vue.filter('turnTxt', function(value) {
	let arr = value.split('#_$');
	return arr
})