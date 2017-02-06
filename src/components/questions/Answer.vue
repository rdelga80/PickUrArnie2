<template>
	<div class="col-xs-8 col-xs-offset-2 text-center all-arnie">
		<div class="topAns">
			Your Arnie Is
		</div>
		<div class="arnWho">
			{{ arnieGrp.arnieType }}
		</div>
		<div class="arnImg">
			<img :src="arnieGrp.arnieImg">
		</div>
	</div>
</template>

<script>

	export default{
		props:['answer'],
		data () {
			return {
				arnieAns: this.answer,
				arnieGrp: { 
					arnieType: '',
					arnieImg: '',
					arnieSum: ''
				}
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
			}
		},
		created() {
			var answer = this.arnieAns
			this.chooseArn(answer)
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
		width: 300px;
		border: 15px ridge gray;
	}

	.all-arnie {
		background: #5c116d;
		border: 10px solid gold;
		padding: 15px;
		margin-bottom: 50px;
	}

</style>