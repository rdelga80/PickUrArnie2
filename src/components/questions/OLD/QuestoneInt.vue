<template>
	<div class="ind-quest" :id="'box-'+index" @click="sendAnswer(keys)">
		<div class="vcenter">{{ answer }} - {{ index }}</div>
	</div>
</template>

<script>
	
	export default {
		props: ['answer', 'keys', 'index'],
		data() {
			return {
				
				}
			},
			methods: {
				sendAnswer(keys) {
					this.$emit('sentAnswer', keys);
				}
			}
		}

</script>

<style scoped>
	.ind-quest {
		font-family: 'Special Elite', cursive;
		font-weight: lighter;
		background-color: #186db2;
		padding: 15px;
		height: inherit;
		border-radius: 5px;
		cursor: pointer;
	}

	.ind-quest:hover {
		background-color: #dd3535;
	}

	.vcenter {
		position: absolute;
		top: 60%;
		left: 25%;
		transform: translate(-18%, -42%);
	}

	.redBg {
		background-color: red;
	}
</style>