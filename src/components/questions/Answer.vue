<template lang="pug">
	div.col-xs-12
		div.col-xs-12.arnLoad(
			v-if='arnCurl'
		)
			div.center-block.text-center.arnPump
				img(
					src='../../assets/arnie-curls.gif'
				)

		div.col-xs-8.col-xs-offset-2.text-center.all-arnie(
			v-else
		)
			div.topAns(
				ref='topAnswer'
			)
				| Your Arnie Is
			div.arnWho
				| {{ arnieGrp.arnieType }}
			div.arnImg
				img(v-bind:src='arnieGrp.arnieImg')
			app-initial
		div.citybg
				img(src='../../assets/city2.png' v-bind:style='raiseCity')
</template>

<script>

	import { eventBus } from '../../main.js'
	import initial from '../HighScore.vue'

	export default{
		props:['answer'],
		data () {
			return {
				arnieAns: this.answer,
				arnieGrp: { 
					arnieType: '',
					arnieImg: '',
					arnieSum: ''
				},
				raiseCity: {
					bottom: 0
				},
				changeBack: 'black',
				arnCurl: true
			}
		},
		methods: {
			chooseArn(e) {
				switch(e) {
					case 'A':
						this.arnieGrp.arnieType = 'Predator Arnie'
						this.arnieGrp.arnieImg = '../src/assets/arnie1.jpg'
						this.arnieGrp.arnieSum = 'Whether it\'s smoking Aliens or smoking cigars, you\'re a friggin badass.'
						break
					case 'B':
						this.arnieType = 'Terminator Arnie'
						this.arnieGrp.arnieImg = '../src/assets/arnie2.jpg'
						this.arnieGrp.arnieSum = 'You prove that being a robot is no excuse for a depriving yourself of a catchy one-liner.'
						break
					case 'C':
						this.arnieType = 'Total Recall'
						this.arnieGrp.arnieImg = '../src/assets/arnie3.jpg'
						this.arnieGrp.arnieSum = 'Do you even exist? Is this world even real? The answer lies with creepy baby mutants.'
						break
					case 'D':
						this.arnieType = 'Conan Arnie'
						this.arnieGrp.arnieImg = '../src/assets/arnie4.jpg'
						this.arnieGrp.arnieSum = 'Wasn\'t there a cartoon for Conan the Barbarian in the 90\'s that basically tried saying that the bad guys were snake Aliens? Crom!'
						break
					case 'E':
						this.arnieType = 'Kindergarten Cop Arnie'
						this.arnieGrp.arnieImg = '../src/assets/arnie5.jpg'
						this.arnieGrp.arnieSum = 'Don\'t you wish there was a show about John Kimble before he became Kindergarten Cop?'
						break
					case 'F':
						this.arnieType = 'Twins Arnie'
						this.arnieGrp.arnieImg = '../src/assets/arnie6.jpg'
						this.arnieGrp.arnieSum = 'Are you my father? Well, you must be because you chose me.'
						break
					case 'G':
						this.arnieType = 'Jingle All The Arnie'
						this.arnieGrp.arnieImg = '../src/assets/arnie7.jpg'
						this.arnieGrp.arnieSum = 'Are you my father?'
						break
					case 'H':
						this.arnieType = 'Pumping Iron Arnie'
						this.arnieGrp.arnieImg = '../src/assets/arnie8.jpg'
						this.arnieGrp.arnieSum = 'Perfection. Of course.'
						break
					case 'I':
						this.arnieType = 'Hercules Arnie'
						this.arnieGrp.arnieImg = '../src/assets/arnie9.jpg'
						this.arnieGrp.arnieSum = 'How could you use my name? You didn\'t ask permission. Look at my muscles, it doesn\'t even look the same.' 
						break
				}
			},
			cityRaise() {
				var vm = this
				this.raiseCity.bottom = -300 + 'px'
				var a = -300
				var raiseCity = setInterval(function() {
					if(a == 0) {
						clearInterval(raiseCity)
					} else {
						a += 3
						vm.raiseCity.bottom = a +'px'
					}
				},40)
			}
		},
		components: {
			appInitial: initial
		},
		created() {
			var change = this.changeBack
			eventBus.changeBg(change)
			var arnPros = setTimeout(function() {
				vm.arnCurl = false
			},4000)
			var answer = this.arnieAns
			this.chooseArn(answer)
			var vm = this
			this.cityRaise()
		}
	}
			
	
</script>

<style>
	.topAns {
		color: white;
		font-size: 30px;
	}

	.arnWho {
		font-size: 70px;
	}

	.all-arnie img {
		width: 200px;
	}

	.all-arnie {
		padding: 15px;
		height: 95vh;
		z-index: 1;
	}

	.citybg img {
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100vw;
		z-index: 0;
	}

	.arnLoad {
		height: 100vw;
	}

	.arnPump img {
		width: 150px;
	}

</style>