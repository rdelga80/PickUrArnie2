import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './App.vue'
import { routes } from './routes.js'

Vue.use(VueRouter)
Vue.use(VueResource)

const router = new VueRouter({
	routes,
	mode: 'history'
})

router.beforeEach((to, from, next) => {
	next()
})

Vue.http.options.root = 'https://pick-ur-arnie.firebaseio.com/';
Vue.http.interceptors.push((request, next) => {
	console.log(request);
	// if(request.method == 'POST') {
	// 	request.method = 'PUT';
	// }
	next(response => {
		response.json = () => {
			return { messages: response.body }
		}
	})
})

export const eventBus = new Vue({
	methods: {
		changeBg(backgroundCg) {
			this.$emit('changeBack', backgroundCg);
		}
	}
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
