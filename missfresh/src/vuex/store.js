import Vue from 'vue'
//插件
import Vuex from 'vuex'

Vue.use(Vuex);

/*
	state 用于存储数据项
	mutations 单线程同步代码用于操作state
	actions 用于响应状态变化 不能操作state 而跟mutations区别在于可以存在异步代码
	getters 用于获取数据的接口
*/
export default new Vuex.Store({
	state:{
		orderList:[]
	},
	mutations:{
		//添加购物车逻辑
		ADD(state, item){
			//用来判断所添加商品是否存在的标识
			let isExist = false;

			//存在的话，把当前购物车中的商品对象+1
			for(let n of state.orderList) {
				if(n.sku == item.sku) {
					isExist = true;
					n.nuo++;
					break;
				}
			}

			//如果不存在，则是新添加的商品
			if(!isExist) {
				//设计购物车商品对象
				let order = {
					sku:item.sku,
					name:item.name,
					promote_tag:item.promote_tag,
					product_tag:item.product_tag,
					vip_price_pro:item.vip_price_pro,
					price:item.price,
					image:item.image,
					nuo:1 
				}
				state.orderList.push(order)
			}
		},
		//购物车中某个商品数量增加的逻辑
		UP(state, sku){
			for(let item of state.orderList) {
				if(item.sku == sku){
					item.nuo++;
					break;
				}
			}
		},
		//购物车中某个商品数量减少的逻辑
		DOWN(state, item){
			for(let temp of state.orderList) {
				if(temp.sku == item.sku){
					temp.nuo--;
					break;
				}
			}
		},
		//删除购物车中某个商品的逻辑
		REMOVE(state, item){
			for(let index in state.orderList) {
				if(state.orderList[index].sku == item.sku) {
					state.orderList.splice(index, 1)
				}
			}
		}
	},
	actions:{
		add(context, item){
			context.commit('ADD',item)
		},
		up({commit}, sku){
			commit('UP', sku)
		},
		down({commit}, item){
			commit('DOWN', item)
		},
		remove({commit}, item){
			commit('REMOVE', item)
		}
	},
	getters:{
		//获取商品总数的逻辑
		totalCount(state) {
			let resultTotalCount = 0
			for(let item of state.orderList) {
				resultTotalCount += Number(item.nuo)
			}
			return resultTotalCount
		},
		//获取商品总价格
		totalPrice(state) {
			let resultTotalPrice = 0
			for(let item of state.orderList) {
				resultTotalPrice += Number(item.nuo * (item.vip_price_pro.price_down.price/100))
			}
			return resultTotalPrice
		}
	}
});
