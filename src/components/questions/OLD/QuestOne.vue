<template>
	<div class="col-xs-8 col-xs-offset-2 question-text">
		<div>Question {{ question }}</div>
		<hr>
		<div class="col-xs-12 question-head">
			If you find yourself face to face with your biggest enemy, what would be the first thing you say to them?
		</div>
		<div class="row">
			<div class="col-xs-6 questions text-center" v-for="(answer, key, index) in answersArray">
				
					<app-quest-one
						:answer="answer"
						:keys="key"
						:index="index"
						@sentAnswer="qAnswer = $event"
						>
					</app-quest-one>
				
			</div>
		
			<div class="col-xs-8 col-xs-offset-2">
				<div class="row" id="buttons" v-if="question != 1">
					<div class="col-xs-6 text-right">
						<div class="btn btn-primary">
							Back
						</div>
					</div>
					<div class="col-xs-6">
						<div @click="answer" class="btn btn-primary">
							Next
						</div>
					</div>
				</div>
				<div class="row" id="buttons" v-else>
					<div class="col-xs-4 col-xs-offset-4 text-center">
						<div @click="answer" class="btn btn-primary">
							Next
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import qoneInt from './QuestoneInt.vue';

	export default {
		props: ['question'],
		data() {
			return {
				answersArray: {
					C: 'Even though you\'re me, I hate you!',
					D: 'You may have killed my family, but at least I got to push a wheel around and get some serious muscles.',
					G: 'Give me back my son\'s favorite toy.',
					I: 'Am I really fighting a bear in Central Park?'
				},
				qAnswer: null,
				nextQuest: 'appQuestTwo'
			}
		},
		methods: {
			answer() {
				this.$emit('answer', this.qAnswer);
				this.$emit('nextQuest', this.nextQuest);
			},
		},
		components: {
			appQuestOne : qoneInt
		}
	}
	
</script>

<style>
	.question-text {
		/*margin-top: 7%;*/
		color: #fff;
		font-size: 2em;
	}

	.question-head {
		margin-bottom: 75px;
	}

	.questions {
		margin-bottom: 40px;
		padding: 20px;
		font-size: .9em;
		line-height: 1em;
		height: 155px;
	}

	.btn {
		font-size: .9em;
	}

	#buttons .col-xs-6 {
		margin: 30px -26px 30px 9px;
	}

	.redBg {
		background-color: red;
	}

</style>