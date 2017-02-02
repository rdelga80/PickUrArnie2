<template>
	<div class="answer-tile text-center" @click="[bgColor = !bgColor, selectedAns(index), isSelected(index), isKey()]" :class="[{ selectedAns1 : isAns1 },{ selectedAns2 : isAns2 },{ selectedAns3 : isAns3 },{ selectedAns4 : isAns4 }]" :key="a.movie">
		{{ a.Answer }} {{ whatKey }}
	</div>
</template>

<script>
	
	export default {
		props: ['a', 'index', 'keys', 'bgColor'],
		data() {
			return {
				backColor: '',
				isAns1: false,
				isAns2: false,
				isAns3: false,
				isAns4: false,
				whatKey: ''
			}
		},
		methods: {
			isKey() {
				var key = this.$keys;
				console.log(key);
			},
			isSelected(index) {
				switch(index){
					case 0:
						this.isAns1 = true;
						this.isAns2 = false;
						this.isAns3 = false;
						this.isAns4 = false;
						break;
					case 1:
						this.isAns1 = false;
						this.isAns2 = true;
						this.isAns3 = false;
						this.isAns4 = false;
						break;
					case 2:
						this.isAns1 = false;
						this.isAns2 = false;
						this.isAns3 = true;
						this.isAns4 = false;
						break;
					case 3:
						this.isAns1 = false;
						this.isAns2 = false;
						this.isAns3 = false;
						this.isAns4 = true;
						break;

				}
			},
			selectedAns(keys) {
				this.$emit('answeredQuest', keys);
			}
		}
	}
</script>

<style>
	
</style>