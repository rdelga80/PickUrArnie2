<template lang="pug">
	div.row
		div.col-xs-12.quest-contain

			div(
				v-if="yourArnie == null"
			)
	
				transition(
					v-bind:name='transChg'
					mode='out-in'
					tag='p'
				)
						
					div.question.col-xs-12(
						v-for='(q, keys, index) in questions'
						v-if='question == index'
						v-bind:key='keys'
					)
						div
							| Question {{ question + 1 }}
							hr

							div.quest-text
								| {{ q.questText }}
						
						div.row.text-center
							div.col-xs-6.answer-outer
								div.answer-tile(
									@click='[selectAns(0),selAns = q.answersText[0].Movie]'
									v-bind:class='{ selectedAns1: question0 }'
								)
									| {{ q.answersText[0].Answer }}
								
							div.col-xs-6.answer-outer
								div.answer-tile(
									@click='[selectAns(1),selAns = q.answersText[1].Movie]'
									v-bind:class='{ selectedAns2: question1 }'
								)
									| {{ q.answersText[1].Answer }}

							div.col-xs-6.answer-outer
								div.answer-tile(
									@click='[selectAns(2),selAns = q.answersText[2].Movie]'
									v-bind:class='{ selectedAns3: question2 }'
								)
									| {{ q.answersText[2].Answer }}
								
							div.col-xs-6.answer-outer
								div.answer-tile(
									@click='[selectAns(3),selAns = q.answersText[3].Movie]'
									v-bind:class='{ selectedAns4: question3 }'
								)
									| {{ q.answersText[3].Answer }}
								
							| {{ answers }}
						div.row
							div.col-xs-3.col-xs-offset-4(
								@click='[question--, remAnswer(),question0 = false, question1 = false, question2 = false, question3 = false]'
								v-show='question != 0'
							)
								| Back
							
							div.col-xs-3(
								@click.prevent=' selAns != "" ? nextClick(selAns) : noAns()'
							)
								| Next
							
			div.col-xs-12#yourArnie(v-if="yourArnie != null")
				app-answers(
					v-bind:answer="yourArnie"
				)
	
</template>

<script>

	import answers from './questions/Answer.vue';

	export default {
		data() {
			return {
				selAns: '',
				question0: false,
				question1: false,
				question2: false,
				question3: false,
				// question: 0,
				question: 9,
				arnQuest: 'app-quest-one',
				// answers: [],
				answers: ['A','A','A','A','A','A','A','A','A'],
				bgColor: false,
				transChg: 'drop-in',
				yourArnie: null,
				questions: {
					question1: {
						questText: 'If you find yourself face to face with your biggest enemy, what would be the first thing you say to them?',
						answersText: [
							{ Answer: 'Even though you\'re me, I hate you!', Movie: 'C' },	
							{ Answer: 'You may have killed my family, but at least I got to push a wheel around and get some serious muscles.', Movie: 'D' },
							{ Answer: 'Give me back my son\'s favorite toy.', Movie: 'G' },
							{ Answer: 'Am I really fighting a bear in Central Park?', Movie: 'I' }
							]
					},
					question2: {
						questText: 'Do you like kids?',
						answersText: [
							{ Answer: 'Only after giving a military style bootcamp.', Movie: 'E' },
							{ Answer: 'Can I be one of nine fathers?', Movie: 'F' },
							{ Answer: 'First I hunt them, then I save them.', Movie: 'B' },
							{ Answer:  'Only if they think I\'m a superhero.', Movie: 'G' }
							]
					},
					question3: {
						questText: 'When you smite your enemies, what\'s your preferred weapon?',
						answersText: [
							{ Answer: 'Anything that shoots bullets.', Movie: 'B' },
							{ Answer: 'A sword of Atlantis or my Dad\'s badass sword... high quality problems.', Movie: 'D' },
							{ Answer: 'Giant log to the head.', Movie: 'A' },
							{ Answer: 'Flexing my glorious muscles.', Movie: 'H' }
						]
					},
					question4: {
						questText: 'Who would you love to be your best friend?',
						answersText: [
							{ Answer: 'A short guy that gets me in trouble, but in the end... we\'re family.', Movie: 'F' },
							{ Answer: 'The hulk. But without the green.', Movie: 'H' },
							{ Answer: 'I oddly find myself protecting teenagers. It\'s totally cool, though.', Movie: 'B' },
							{ Answer: 'Jessie the Body Ventura, Carl Weathers, Bill Duke... is this even an option?', Movie: 'A' }
						]
					},
					question5: {
						questText: 'Are you just a muslce?',
						answersText: [
							{ Answer: 'Yes, but a godly one.', Movie: 'I' },
							{ Answer: 'A muscle made of steel and puns.', Movie: 'B' },
							{ Answer: 'Muscles, not tumors.', Movie: 'E' },
							{ Answer: 'I\'m a muscle, brains, kindness, and perfection... really.', Movie: 'F' }
						]
					},
					question6: {
						questText: 'What\'s your workout routine?',
						answersText: [
							{ Answer: 'Is pushing a wheel in a circle since I was a boy watching everyone else die only to end up push it myself a "routine"?', Movie: 'D' },
							{ Answer: 'Nothing but drillhammer.', Movie: 'C' },
							{ Answer: 'Routine? You mean workout orgasms!', Movie: 'H' },
							{ Answer: 'Mud baths and killing aliens.', Movie: 'A' }
						]
					},
					question7: {
						questText: 'What\'s your ideal lady like?',
						answersText: [
							{ Answer: 'Does her ex-husband have a criminal background, and a wicked pony tale?', Movie: 'E' },
							{ Answer: 'Ones that are lamentating.', Movie: 'D' },
							{ Answer: 'Do you like my bulding muscles?', Movie: 'H' },
							{ Answer: 'Brunette. Athletic. Sleazy... and demure. In other words, 41-A.', Movie: 'C' }
						]
					},
					question8: {
						questText: 'Are shirts necessary?',
						answersText: [
							{ Answer: 'No', Movie: 'I' },
							{ Answer: 'No', Movie: 'H' },
							{ Answer: 'No', Movie: 'A' },
							{ Answer: 'No', Movie: 'F' }
						]
					},
					question9: {
						questText: 'See you at the party?',
						answersText: [
							{ Answer: 'Richter', Movie: 'C' },
							{ Answer: 'Santa', Movie: 'G' },
							{ Answer: 'Tiny, tiny twin brother.', Movie: 'F' },
							{ Answer: 'Are there kids?', Movie: 'E' }
						]
					},
					question10: {
						questText: 'What\'s the meaning of life?',
						answersText: [
							{ Answer: 'Becoming Turbo Man.', Movie: 'G' },
							{ Answer: 'Bringing oxygen to all the freaks. Plus adventure and hot brunettes.', Movie: 'C' },
							{ Answer: 'Finding family. No matter how little they are.', Movie: 'F' },
							{ Answer: 'Making sure people know about my heroism and adventures.', Movie: 'I' }
						]
					}
				}
			}	
		},
		methods: {
			chooseTrans() {
				var vm = this
				var rand = (Math.random() * (5 - 1) + 1).toFixed()
				switch(rand) {
					case '1':
						vm.transChg = 'drop-in'
						break
					case '2':
						vm.transChg = 'faze-out'
						break
					case '3':
						vm.transChg = 'fadein'
						break
					case '4':
						vm.transChg = 'twist-out'
						break
					case '5':
						vm.transChg = 'shrink'
						break
				}
			},
			addAnswer(item) {
				this.answers.push(item)
			},
			remAnswer() {
				var length = this.answers.length - 1;
				this.answers.splice(length, 1);
			},
			selectAns(item) {
				switch(item) {
					case 0:
						this.question0 = true;
						this.question1 = false;
						this.question2 = false;
						this.question3 = false;
						break;
					case 1:
						this.question0 = false;
						this.question1 = true;
						this.question2 = false;
						this.question3 = false;
						break;
					case 2:
						this.question0 = false;
						this.question1 = false;
						this.question2 = true;
						this.question3 = false;
						break;
					case 3:
						this.question0 = false;
						this.question1 = false;
						this.question2 = false;
						this.question3 = true;
						break;
				}
			},
			nextClick(selAns) {
				this.chooseTrans()
				if(this.question == 9) {
					this.addAnswer(selAns)
					this.question++
					this.calcAns()
				} else {
					this.addAnswer(selAns)
					this.selAns = ''
					this.question0 = false
					this.question1 = false
					this.question2 = false
					this.question3 = false
					this.question++
				}
			},
			noAns() {
				alert('Dats Not An Answer!');
			},
			calcAns() {
				var ans = this.answers.length;
				var a = 0;
				var b = 0;
				var c = 0;
				var d = 0;
				var e = 0;
				var f = 0;
				var g = 0;
				var h = 0;
				for(var i = 0; i < ans; i++) {
					var sel = this.answers[i];
					switch(sel) {
						case 'A':
							a++;
							break;
						case 'B':
							b++;
							break;
						case 'C':
							c++;
							break;
						case 'D':
							d++;
							break;
						case 'E':
							e++;
							break;
						case 'F':
							f++;
							break;
						case 'G':
							g++;
							break;
						case 'H':
							h++;
							break;
					}
				}
				var ansMatrix = [{'A': a},{'B': b},{'C': c},{'D': d},{'E': e},{'F': f},{'G': g},{'H': h}];
				var sortMatrix = ansMatrix.sort();
				for (var arnKey in sortMatrix[0]) {
					this.yourArnie = arnKey
				}
			}
		},
		components: {
			appAnswers: answers
		}
	}
	
</script>

<style scoped>

	div {
		color: white;
	}

	.drop-in-enter-active {
		transition: all 4s;
	}

	.drop-in-leave-active {
		transition: all 3s ease-out;
	}

	.drop-in-enter, .drop-in-leave-to {
		transform: translateY(150px);
		opacity: 0;
	}

	.faze-out-enter-active, .faze-out-leave-active {
		transition: all 2s;
	}
 
	.faze-out-enter, .faze-out-leave-to {
		transform: perspective(0px) rotateY(90deg);
		opacity: 0;
	}

	.fadein-enter {
		transform: perspective(100px) translateY(200px);
		opacity: 0;
	}

	.fadein-enter-active {
		transition: all 3s ease-out;
	}

	.fadein-leave-active {
		transition: all 2s;
	}

	.fadein-leave-to {
		transform: translateX(2000px);
	}

	.twist-out-enter {
		transform: scale(.5) rotate3d(2,1,1,80deg);
	}

	.twist-out-enter-active {
		transition: all 5s;
	}

	.twist-out-leave-active {
		transition: all 3s;
	}

	.twist-out-leave-to {
		transform: scale(0) rotate3d(4,3,1,580deg);
		opacity: 0;
	}

	.shrink-enter {
		transform: scale(0) rotateZ(360deg);
		opacity: 0;
	}

	.shrink-enter-active {
		transition: all 3s ease-in;
	}

	.shrink-leave-active {
		transition: transform, opacity 1.5s, 1s linear, ease-out;
	}

	.shrink-leave-to {
		transform: scale(0);
		opacity: 0;
	}

	.droppingAns-enter {
		opacity: 0;
	}

	.droppingAns-enter-active {
		transition: 5s;
	}

	.quest-contain {
		margin-top: 3%;
	}

	.changeq-enter {
		/*transform: translateY(-600px);
		opacity: 0;*/
	}

	.changeq-enter-active {
		/*transition: transform 5s ease-in;*/
	}

	.changeq-enter-to {
		/*transform: translateY(0px);*/
	}

	.changeq-leave {
		/*transform: translateY(0px);	*/
	}

	.changeq-leave-active {
		/*transition: transform 5s ease-in;*/
	}

	.changeq-leave-to {
		/*transform: translateY(-600px);
		opacity: 0;*/
	}

	.question {
		color: white;
		font-size: 3em;
	}

	.quest-text {
		font-size: 0.8em;
	}

	.answer-outer {
		display: table;
		padding: 30px;
		min-height: 200px;
		line-height: 180px;
	}

	.answer-tile {
		vertical-align: middle;
		display: table-cell;
		width: 100%;
		font-family: 'Special Elite', cursive;
		font-weight: lighter;
		cursor: pointer;
		font-size: .6em;
		line-height: 1em;
		background-color: #186db2;
		padding: 20px;
		min-height: 200px;
		border-radius: 10px;
	}

	.answer-tile:hover {
		background-color: #dd3535;
	}

	.selectedAns {
		background-color: red;
	}

	.selectedAns1 {
		background-color: red;
	}

	.selectedAns2 {
		background-color: red;
	}

	.selectedAns3 {
		background-color: red;
	}

	.selectedAns4 {
		background-color: red;
	}
	
</style>