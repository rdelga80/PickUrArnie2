<template>
	<div class="row">
		<!-- <transition name="changeq" mode="out-in" appear>
			<component :is="arnQuest" :question="question" id="drop" @answer="[addAnswer($event), question++]" @nextQuest="arnQuest = $event"></component>
		</transition>-->
		<div class="col-xs-12 quest-contain">
		
			<div v-for="(q, key, index) in questions">
				<transition :name="transName" mode="out-in" appear>
					<div class="question col-xs-12" v-if="question == index">
						<div>
							Question {{ question + 1 }}
							<hr>
							<div class="quest-text">{{ q.questText }}</div>
						</div>
						<div class="row">

							<div class="col-xs-6 answer-outer" v-for="(answers, index) in q.answersText">
								<div class="answer-tile" @click="selectAns(answers.Movie)" :class="{ selectedAns: answers.isSel }" key="answers.Movie">
									{{ answers.Answer }} - {{ answers.isSel }} - {{ answers.Movie }} - {{ index }}
								</div>

							</div>

							<div key="text">{{ text }}</div>
							<input v-model="text" style="color: black">


							<!-- <div class="col-xs-6 answer-outer">
								<div class="answer-tile" @click="selectAns(0)" :class="{ selectedAns1: question0 }">
									{{ q.answersText[0].Answer }}
								</div>
							</div>
							<div class="col-xs-6 answer-outer">
								<div class="answer-tile" @click="selectAns(1)" :class="{ selectedAns2: question1 }">
									{{ q.answersText[1].Answer }}
								</div>
							</div>
							<div class="col-xs-6 answer-outer">
								<div class="answer-tile" @click="selectAns(2)" :class="{ selectedAns3: question2 }">
									{{ q.answersText[2].Answer }}
								</div>
							</div>
							<div class="col-xs-6 answer-outer">
								<div class="answer-tile" @click="selectAns(3)" :class="{ selectedAns4: question3 }">
									{{ q.answersText[3].Answer }}
								</div>
							</div> -->
						</div> <!-- row -->
						<div class="row">
							<div class="col-xs-3 col-xs-offset-4" @click="question--">
								Back
							</div>
							<div class="col-xs-3" @click="[question++, addAnswer]">
								Next
							</div>
						</div>
					</div> <!-- col-xs-12 question -->
				</transition>
			</div>
		</div>
	</div>	
</template>

<script>

	import answers from './questions/Answer.vue';

	export default {
		data() {
			return {
				text: '',
				question0: false,
				question1: false,
				question2: false,
				question3: false,
				question: 0,
				arnQuest: 'app-quest-one',
				answers: [],
				bgColor: false,
				transName: 'changeq',
				questions: {
					question1: {
						questText: 'If you find yourself face to face with your biggest enemy, what would be the first thing you say to them?',
						answersText: [
							{ Answer: 'Even though you\'re me, I hate you!', Movie: 'C', isSel: false },
							{ Answer: 'You may have killed my family, but at least I got to push a wheel around and get some serious muscles.', Movie: 'D', isSel: false },
							{ Answer: 'Give me back my son\'s favorite toy.', Movie: 'G', isSel: false },
							{ Answer: 'Am I really fighting a bear in Central Park?', Movie: 'I', isSel: false}
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
					}
				}
			}	
		},
		methods: {
			addAnswer(item) {
				this.answers.push(item);
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

	.quest-contain {
		margin-top: 3%;
	}

	.changeq-enter {
		transform: translateY(-600px);
	}

	.changeq-enter-active {
		transition: transform 5s;

	}

	.changeq-enter-to {
		transform: translateY(0px);
	}

	.changeq-leave {

	}

	.changeq-leave-active {

	}

	.changeq-leave-to {

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