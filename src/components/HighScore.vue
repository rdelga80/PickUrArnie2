<template lang="pug">
	div.text-center.center-block#initials
		div.letters.center-block.text-center#letter1(
			tabindex='0'
			v-bind:style='let1Sty'
			@focus="changeLet('bgCol1')"
			@keyup.up='let1 != letLength - 1 ? let1++ : let1 = letLength - 1'
			@keyup.down='let1 != 0 ? let1-- : let1 = 0'
			ref='a'
		)
			| {{ letter1[let1] }}
		div.letters(
			tabindex='0'
			v-bind:style='let2Sty'
			@focus="changeLet('bgCol2')"
			@keyup.up='let2 != letLength - 1 ? let2++ : let2 = letLength - 1'
			@keyup.down='let2 != 0 ? let2-- : let2 = 0'
			ref='b'
		)
			| {{ letter2[let2] }}
		div.letters(
			tabindex='0'
			v-bind:style='let3Sty'
			@focus="changeLet('bgCol3')"
			@keyup.up='let3 != letLength - 1 ? let3++ : let3 = letLength - 1'
			@keyup.down='let3 != 0 ? let3-- : let3 = 0'
			ref='c'
		)
			| {{ letter3[let3] }}

</template>

<script>
	export default {
		data() {
			return {
				letter1: [' ','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','0','1','2','3','4','5','6','7','8','9','!','@','#','$','%','^','&','*','(',')','~'],
				letter2: [' ','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','0','1','2','3','4','5','6','7','8','9','!','@','#','$','%','^','&','*','(',')','~'],
				letter3: [' ','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','0','1','2','3','4','5','6','7','8','9','!','@','#','$','%','^','&','*','(',')','~'],
				let1: 0,
				let2: 0,
				let3: 0,
				letLength: null,
				let1Sty: {
					backgroundColor : 'transparent',
					color: 'white'
				},
				let2Sty: {
					backgroundColor : 'transparent',
					color: 'white'
				},
				let3Sty: {
					backgroundColor : 'transparent',
					color: 'white'
				},
				arnInit: '',
				blink: null
			}
		},
		methods: {
			startLen() {
				this.letLength = this.letter1.length
			},
			changeLet(e) {
				switch(e) {
					case 'bgCol1':
						clearInterval(this.blink)
						this.let1Sty.color = 'black'
						this.let2Sty.color = 'white'
						this.let3Sty.color = 'white'
						this.let1Sty.backgroundColor = 'white'
						this.let2Sty.backgroundColor = 'transparent'
						this.let3Sty.backgroundColor = 'transparent'
						var vm = this
						this.blink = setInterval(function() {
							if(vm.let1Sty.backgroundColor == 'white') {
								vm.let1Sty.backgroundColor = 'transparent'
								vm.let1Sty.color = 'white'
							} else {
								vm.let1Sty.backgroundColor = 'white'
								vm.let1Sty.color = 'black'
							}
						}, 1200)
						break
					case 'bgCol2':
						clearInterval(this.blink)
						this.let1Sty.color = 'white'
						this.let2Sty.color = 'black'
						this.let3Sty.color = 'white'
						this.let1Sty.backgroundColor = 'transparent'
						this.let2Sty.backgroundColor = 'white'
						this.let3Sty.backgroundColor = 'transparent'
						var vm = this
						this.blink = setInterval(function() {
							if(vm.let2Sty.backgroundColor == 'white') {
								vm.let2Sty.backgroundColor = 'transparent'
								vm.let2Sty.color = 'white'
							} else {
								vm.let2Sty.backgroundColor = 'white'
								vm.let2Sty.color = 'black'
							}
						}, 1200)
						break
					case 'bgCol3':
						clearInterval(this.blink)
						this.let1Sty.color = 'white'
						this.let2Sty.color = 'white'
						this.let3Sty.color = 'black'
						this.let1Sty.backgroundColor = 'transparent'
						this.let2Sty.backgroundColor = 'transparent'
						this.let3Sty.backgroundColor = 'white'
						var vm = this
						this.blink = setInterval(function() {
							if(vm.let3Sty.backgroundColor == 'white') {
								vm.let3Sty.backgroundColor = 'transparent'
								vm.let3Sty.color = 'white'
							} else {
								vm.let3Sty.backgroundColor = 'white'
								vm.let3Sty.color = 'black'
							}
						}, 1200)
						break
				}
			},
			arnIn() {
				var a = this.let1
				var b = this.let2
				var c = this.let3
				this.arnInit = this.letter1[a] + this.letter2[b] + this.letter3[c]
				this.$emit('arn-initials', this.arnInit)
			}
		},
		watch: {
			let1: function(chgLet) {
				this.arnIn()
			},
			let2: function(chgLet) {
				this.arnIn()
			},
			let3: function(chgLet) {
				this.arnIn()
			}
		},
		created() {
			this.startLen()
			focusOn()
		}
	}

function focusOn() {
	window.setTimeout(function() {
		document.getElementById('letter1').focus()
	}, 0)
}

</script>

<style scope>
	.letters {
		font-family: 'VT323', monospace;
		font-size: 9em;
		text-transform: capitalize;
		display: inline-flex;
		color: #FFF;
		margin: 40px 15px;
		line-height: 1em;
		border-bottom: 3px solid white;
		width: 60px;
		padding-left: 5px;
		height: 1em;
	}

	.letters:focus {
		/*background-color: white;*/
	}

	#initials {
		display: inline-flex;
	}
</style>