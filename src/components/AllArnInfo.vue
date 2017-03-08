<template lang="pug">
	div.row.arnrow
		div.col-xs-3
			| {{ selArn.initials }}
		div.col-xs-6(
			style='font-size: 1em; color: white;'
		)
			| {{ arnieType }}
		div.col-xs-3
			img(
				:src="arnieGrp.arnieImg"
				height="150px"
			)

</template>

<script>
	export default {
		props: ['selArn'],
		data() {
			return {
				arnieType: '',
				arnieGrp: {
					arnieImg: ''
				}
			}
		},
		created() {
			const arn = this.selArn.arnieAns
			switch(arn) {
					case 'A':
						this.arnieType = 'Predator Arnie'
						this.arnieGrp.arnieImg = '../src/assets/arnie1.jpg'
						break
					case 'B':
						this.arnieType = 'Terminator Arnie'
						this.arnieGrp.arnieImg = '../src/assets/arnie2.jpg'
						break
					case 'C':
						this.arnieType = 'Total Recall'
						this.arnieGrp.arnieImg = '../src/assets/arnie3.jpg'
						break
					case 'D':
						this.arnieType = 'Conan Arnie'
						this.arnieGrp.arnieImg = '../src/assets/arnie4.jpg'
						break
					case 'E':
						this.arnieType = 'Kindergarten Cop Arnie'
						this.arnieGrp.arnieImg = '../src/assets/arnie5.jpg'
						break
					case 'F':
						this.arnieType = 'Twins Arnie'
						this.arnieGrp.arnieImg = '../src/assets/arnie6.jpg'
						break
					case 'G':
						this.arnieType = 'Jingle All The Arnie'
						this.arnieGrp.arnieImg = '../src/assets/arnie7.jpg'
						break
					case 'H':
						this.arnieType = 'Pumping Iron Arnie'
						this.arnieGrp.arnieImg = '../src/assets/arnie8.jpg'
						break
					case 'I':
						this.arnieType = 'Hercules Arnie'
						this.arnieGrp.arnieImg = '../src/assets/arnie9.jpg'
						break
				}
			}
		}
	

</script>

<style scoped>
	.row {
		font-family: 'VT323', monospace;
		font-size: 1.2em;
	}

	.arnrow {
		margin-bottom: 15px;
	}

	.arnrow div {
		border: 1px solid white;
		height: 175px;
	}

	.arnrow div:before {
		content: '\200B';
		/*   content: '';
		margin-left: -0.25em; */
		display: inline-block;
		height: 100%; 
		vertical-align: middle;
 }

</style>