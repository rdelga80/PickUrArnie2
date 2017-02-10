import Vue from 'vue'
import App from './App.vue'

export const eventBus = new Vue({
	methods: {
		changeBg(backgroundCg) {
			this.$emit('changeBack', backgroundCg);
		}
	}
})

new Vue({
  el: '#app',
  render: h => h(App)
})
