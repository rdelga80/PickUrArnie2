<template>
	<div class="col-xs-8 col-xs-offset-2 question-text">
		<div>Question {{ question }}</div>
		<hr>
		<div class="col-xs-12 question-head">
			Do you like kids?
		</div>
		<div class="row">
			<div class="col-xs-6 questions text-center" v-for="(answer, key) in answersArray">
				<app-quest-one
					:answer="answer"
					:keys="key"
					@sentAnswer="qAnswer = $event"
					>
				</app-quest-one>
			</div>
		
			<div class="col-xs-8 col-xs-offset-2">
				<div class="row" id="buttons">
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
			</div>
		</div>
	</div>
</template>

<script>
	import qtwoInt from './QuesttwoInt.vue';

	export default {
		props: ['question'],
		data() {
			return {
				answersArray: {
					E: 'Only after giving a military style bootcamp.',
					F: 'Can I be one of nine fathers?',
					B: 'First I hunt them, then I save them.',
					G:  'Only if they think I\'m a superhero.'
				},
				qAnswer: null
			}
		},
		methods: {
			answer() {
				this.$emit('answer', this.qAnswer);
			}
		},
		components: {
			appQuestOne : qtwoInt
		}
	}
	
</script>

<style scoped>
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

</style>