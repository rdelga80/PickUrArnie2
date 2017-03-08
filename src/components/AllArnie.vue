<template lang="pug">
	div
		div.col-xs-12(
			v-for='entries in arnieDB'
		)
						
			div.col-xs-12.text-center
				router-link(
					tag='button'
					class='btn btn-primary text-center'
					v-bind:to='{ name: "Home" }'
				)
					| Back to Arnie

			div.row.headline.text-center
				div.col-xs-3
					| Initials
				div.col-xs-6
					| Arnie
				div.col-xs-3
					| Argh!

			div.col-xs-12(
				v-for='entry in entries'
				style='color: white; font-size: 3em;'
			)
				div.row.text-center
					app-arn-data(
						v-bind:selArn = 'entry'
					)

</template>

<script>
	import arnDet from './AllArnInfo.vue'

	export default {
		data() {
			return {
				arnieDB: [],
				resource: {},
				node: 'arnie',
				selArn: '',
				arnHome: {
					name: 'Home'
				}
			}
		},
		methods: {
			fetchData() {
				this.resource.getData({node: this.node})
					.then(response => {
						return response.json()
					})
					.then(data => {
						const resultArray = []
						for (let key in data) {
							resultArray.push(data[key])
						}
						this.arnieDB = resultArray;
					})
			}
		},
		components: {
			'app-arn-data': arnDet
		},
		created() {
			const customActions = {
				saveAlt: { method: 'POST', url: 'arnie.json' },
				getData: { method: 'GET'}
			}
			this.resource = this.$resource('{node}.json', {}, customActions)
			this.fetchData()
		},
		beforeRouteEnter(to, from, next) {
			if (true) {
				next()
			} else {
				next(false)
			}
		}
	}

</script>

<style scoped>
	.headline {
		font-family: 'VT323', monospace;
		font-size: 5em;
		color: white;
	}

</style>