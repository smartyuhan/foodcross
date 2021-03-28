import Vue from 'vue'
import Vuex from 'vuex'
import persistedState from 'vuex-persistedstate'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
	  foodsdetails:{},
	  menulist:[],
	  foodcollect:[],   //已收藏的商品列表
	  history:[]      //已浏览过的商品
  },
  mutations: {
	  updateFoods(state,params){
		  state.foodsdetails = params
	  },
	  upmenulist(state,params){
	  		  state.menulist = params
	  },
	  foodCollect(state,params){
		  state.foodcollect.push(params)
	  },
	  foodDel(state,params){
		  state.foodcollect.splice(params,1)
	  },
	  historyAdd(state,params){
		  state.history.push(params)
	  }
  },
  plugins: [persistedState()],
  
  actions: {
  },
  modules: {
  }
})
