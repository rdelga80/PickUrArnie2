<template lang="pug">
	div.text-center.center-block#initials
		div.letters.center-block.text-center(
			tabindex='0'
			@keyup.up='let1++'
			@keyup.down='let1--'
		)
			| {{ letter1[let1] }}
		div.letters(
			tabindex='1'
			@keyup.up='let2++'
			@keyup.down='let2--'
		)
			| {{ letter2[let2] }}
		div.letters(
			tabindex='2'
			@keyup.up='let3++'
			@keyup.down='let3--'
		)
			| {{ letter3[let3] }}

</template>

<script>
	export default {
		data: function() {
			return {
				letter1: ['','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','0','1','2','3','4','5','6','7','8','9','!','@','#','$','%','^','&','*','(',')','~'],
				letter2: ['','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','0','1','2','3','4','5','6','7','8','9','!','@','#','$','%','^','&','*','(',')','~'],
				letter3: ['','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','0','1','2','3','4','5','6','7','8','9','!','@','#','$','%','^','&','*','(',')','~'],
				let1: 1,
				let2: 1,
				let3: 1
			}
		}
	}
</script>

<style scope>
	.letters {
		font-family: 'VT323', monospace;
		font-size: 13em;
		text-transform: capitalize;
		display: inline-flex;
		color: #FFF;
		margin: 0 15px;
		line-height: 1em;
		border-bottom: 1px solid white;
	}

	#initials {
		display: inline-flex;
	}
</style>