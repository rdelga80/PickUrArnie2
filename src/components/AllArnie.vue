<template lang="pug">
	div
		div.col-xs-12.text-center
				router-link(
					tag='button'
					class='btn btn-primary text-center arn-back'
					v-bind:to='{ name: "Home" }'
				)
					| Back to Arnie

		div.col-xs-12(
			v-for='entries in arnieDB'
		)

			div.row.headline.text-center
				div.col-xs-3
					| Initials
				div.col-xs-6
					| Arnie
				div.col-xs-3
					| Argh!

			| {{ entries[1] }}
			div.col-xs-12(
				v-for='entry in revEntry(entries)'
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
						this.arnieDB = data
					})
			},
			revEntry(e) {
				// console.log(e['-Ke1Mq8mNWJ6hXjnuu57'])
				let newArray = []
				for(let items in e) {
					newArray.push(e[items])
				}
				return newArray.reverse()
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

	.arn-back {
		margin-top: 15px;
		font-family: 'Special Elite', cursive;
		font-size: 2em;
	}

</style>