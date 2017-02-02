<template>
	<div class="ind-quest" @click="[changeColor(), sendAnswer(keys)]" :class="questBg">
		<div class="vcenter">{{ answer }}</div>
	</div>
</template>

<script>
	
	export default {
		props: ['answer', 'keys', 'redBg'],
		data() {
			return {
				questBg: ''
			}
		},
		methods: {
			sendAnswer(keys) {
				this.$emit('sentAnswer', keys);
			},
			changeColor() {
				this.$emit('sentBg', false)
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