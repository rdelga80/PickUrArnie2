import ArnieDrop from './components/ArnieDrop2.vue'

const Questions = resolve => {
	require.ensure(['./components/ChooseArn.vue'], () => {
		resolve(require('./components/ChooseArn.vue'))
	})
}

const Answer = resolve => {
	require.ensure(['./components/questions/Answer.vue'], () => {
		resolve(require('./components/questions/Answer.vue'))
	})
}

export const routes = [
	{ path: '/', name: 'Home', component: ArnieDrop },
	{ path: '/questions', name: 'Questions', component: Questions },
	{ path: '/your-arnie', name: 'Answer', component: Answer },
	{ path: '*', redirect: '/' }
]