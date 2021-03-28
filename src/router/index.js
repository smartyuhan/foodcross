import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)


const routes = [
  {
    path: '/',
	name:'main',
	redirect:'home',
	component: () => import('@/views/Main'),
	children:[
		{
			path:'/home',
			name:'home',
			component:() => import('@/views/Home')
		},
		{
			path:'/classify',
			name:'classify',
			component:() => import('@/views/Classify')
		},
		{
			path:'/Collect',
			name:'collect',
			component:() => import('@/views/Collect')
		},
		{
			path:'/Mine',
			name:'mine',
			component:() => import('@/views/Mine')
		}
	],
  },
  {
  	path:'/Login',
  	name:'login',
  	component:() => import('@/views/Login')
  },
  {
	  path:'/foodetails',
	  name:'foodetails',
	  component: ()=> import('@/views/Foodetails')
  },
  {
  	  path:'/foodlist',
  	  name:'foodlist',
  	  component: ()=> import('@/views/Foodlist')
  },
  {
  	path:'/Search',
  	name:'Search',
  	component:() => import('@/views/Search'),
  },
  {
	path:'/Carts',
	name:'Carts',
	component:() => import('@/components/Carts')
  },
  {
	 path:'/Comment',
	  name:'Comment',
	  component:() => import('@/views/Comment')
  },
  {
	  path:'/like',
	  name:'like',
	  component:() => import('@/views/like')
  },
  {
  	  path:'/Register',
  	  name:'register',
  	  component:() => import('@/views/Register')
  },
  {
  	  path:'/History',
  	  name:'history',
  	  component:() => import('@/views/History')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior (to, from, savedPosition) {
    // return 期望滚动到哪个的位置
    return { x: 0, y: 0 }
  },
  routes
})

export default router

