<template lang="pug">
	div
		div(
			v-for='u in users'
			style='color: white; font-size: 3em;'
		)
			| {{ u.initials }}
</template>

<script>
	export default {
		data() {
			return {
				users: [],
				resource: {},
				node: 'arnie'
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
						this.users = resultArray;
					})
			}
		},
		created() {
			const customActions = {
				saveAlt: { method: 'POST', url: 'arnie.json' },
				getData: { method: 'GET'}
			}
			this.resource = this.$resource('{node}.json', {}, customActions)
			this.fetchData()
		}
	}
</script>

<style>

</style>