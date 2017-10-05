<template lang="pug">
	div.col-xs-12
		div(
			v-if="afterInitial"
		)
			div.col-xs-8.col-xs-offset-2.text-center.all-arnie(
				
			)
				div.topAns(
					ref='topAnswer'
				)
					| Your Arnie Is
				div.arnWho
					| {{ arnieGrp.arnieType }}
				div.arnImg
					img(v-bind:src='arnieGrp.arnieImg')
				div.textDesc
					| Use  
					span.glyphicon.glyphicon-arrow-up
					|  OR
					span.glyphicon.glyphicon-arrow-down
					|  To Enter Initials
					br
					small
						|Tab (Shift+Tab) To Switch Letters
					
				app-initial(
					v-on:arn-initials="arnInit.initials = $event"
				)

				div
					button.btn.btn-primary(
						@click.prevent='[submit(), afterInitial = !afterInitial]'
					)
						| Share Your Arnie
				
			div.citybg
					img(src='../../assets/city2.png' v-bind:style='raiseCity')
		
		div.col-xs-12.arnty(
			v-else
		)
			div.col-xs-12.text-center.arntopthx
				| Thank You

			div.col-xs-12.center-block.text-center
				iframe(
					width="560"
					height="315"
					src="https://www.youtube.com/embed/pDxn0Xfqkgw?ecver=1"
					frameborder="0"
					allowfullscreen
				)

			div.col-xs-8.col-xs-offset-2.text-center.arnbttmthx
				| On behalf of Arnie fans

			div.col-xs-12.text-center
				router-link(
					tag='button'
					class='btn btn-primary arnbackbtn'
					@click='changeBgBack'
					v-bind:to="{ name: 'Home' }"
				)
					| Back to Arnie

</template>

<script>

	import { eventBus } from '../../main.js'
	import initial from '../HighScore.vue'

	export default{
		props:['answer'],
		data () {
			return {
				arnieGrp: { 
					arnieType: '',
					arnieImg: '',
					arnieSum: ''
				},
				arnInit: {
					initials: '',
					arnieAns: this.answer,
				},
				raiseCity: {
					bottom: 0
				},
				changeBack: 'black',
				arnCurl: true,
				resource: {},
				afterInitial: true
			}
		},
		methods: {
			chooseArn(e) {
				switch(e) {
					case 'A':
						this.arnieGrp.arnieType = 'Predator Arnie'
						this.arnieGrp.arnieImg = 'src/assets/arnie1.jpg'
						this.arnieGrp.arnieSum = 'Whether it\'s smoking Aliens or smoking cigars, you\'re a friggin badass.'
						break
					case 'B':
						this.arnieGrp.arnieType = 'Terminator Arnie'
						this.arnieGrp.arnieImg = 'src/assets/arnie2.jpg'
						this.arnieGrp.arnieSum = 'You prove that being a robot is no excuse for a depriving yourself of a catchy one-liner.'
						break
					case 'C':
						this.arnieGrp.arnieType = 'Total Recall Arnie'
						this.arnieGrp.arnieImg = 'src/assets/arnie3.jpg'
						this.arnieGrp.arnieSum = 'Do you even exist? Is this world even real? The answer lies with creepy baby mutants.'
						break
					case 'D':
						this.arnieGrp.arnieType = 'Conan Arnie'
						this.arnieGrp.arnieImg = 'src/assets/arnie4.jpg'
						this.arnieGrp.arnieSum = 'Wasn\'t there a cartoon for Conan the Barbarian in the 90\'s that basically tried saying that the bad guys were snake Aliens? Crom!'
						break
					case 'E':
						this.arnieGrp.arnieType = 'Kindergarten Cop Arnie'
						this.arnieGrp.arnieImg = 'src/assets/arnie5.jpg'
						this.arnieGrp.arnieSum = 'Don\'t you wish there was a show about John Kimble before he became Kindergarten Cop?'
						break
					case 'F':
						this.arnieGrp.arnieType = 'Twins Arnie'
						this.arnieGrp.arnieImg = 'src/assets/arnie6.jpg'
						this.arnieGrp.arnieSum = 'Are you my father? Well, you must be because you chose me.'
						break
					case 'G':
						this.arnieGrp.arnieType = 'Jingle All The Arnie'
						this.arnieGrp.arnieImg = 'src/assets/arnie7.jpg'
						this.arnieGrp.arnieSum = 'Are you my father?'
						break
					case 'H':
						this.arnieGrp.arnieType = 'Pumping Iron Arnie'
						this.arnieGrp.arnieImg = 'src/assets/arnie8.jpg'
						this.arnieGrp.arnieSum = 'Perfection. Of course.'
						break
					case 'I':
						this.arnieGrp.arnieType = 'Hercules Arnie'
						this.arnieGrp.arnieImg = 'src/assets/arnie9.jpg'
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
			},
			submit() {
				this.resource.saveAlt(this.arnInit)
			},
			changeBgBack() {
				eventBus.changeBg('transparent')
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
			var answer = this.arnInit.arnieAns
			this.chooseArn(answer)
			var vm = this
			this.cityRaise()

			const customActions = {
				saveAlt: { method: 'POST', url: 'arnie.json' },
				getData: { method: 'GET'}
			}
			this.resource = this.$resource('{node}.json', {}, customActions)
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
	.topAns {
		color: white;
		font-size: 3.3em;
		height: 160px;
		padding-top: 40px;
		background: url('../../assets/banner.png') no-repeat center top;
		background-size: 500px 160px;
		text-shadow: 2px 2px #888;
	}

	.topAns, .arnWho {
		font-family: 'VT323', monospace;
	}

	.arnWho {
		color: white;
		text-transform: uppercase;
		font-size: 70px;
	}

	.all-arnie img {
		width: 200px;
	}

	.all-arnie {
		padding: 15px;
		height: 100vh;
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

	.textDesc {
		color: white;
		margin-top: 30px;
		font-size: 2em;
	}

	.arnty {
		height: 100vh;
	}

	.arntopthx {
		font-family: 'VT323', monospace;
		font-size: 3em;
		color: #FFF;
	}

	.arnbackbtn {
		font-family: 'Special Elite', cursive;
		font-size: 1.2em;
	}

	.arnbttmthx {
		font-family: 'VT323', monospace;
		font-size: 3em;
		color: #FFF;
		margin-bottom: 10px;
	}

</style>