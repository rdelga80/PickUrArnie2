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

const AllArnie = resolve => {
	require.ensure(['./components/AllArnie.vue'], () => {
		resolve(require('./components/AllArnie.vue'))
	})
}

export const routes = [
	{ path: '/PickUrArnie2', name: 'Home', component: ArnieDrop },
	{ path: '/all_arnie', name: 'AllArnie', component: AllArnie },
	{ path: '/questions', props: true, name: 'Questions', component: Questions },
	{ path: '/your_arnie', props: true, name: 'Answer', component: Answer },
	{ path: '*', redirect: '/' }
]