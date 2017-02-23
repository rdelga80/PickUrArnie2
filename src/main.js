import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import { routes } from './routes.js'

Vue.use(VueRouter)

const router = new VueRouter({
	routes,
	mode: 'history'
})

router.beforeEach((to, from, next) => {
	next()
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
