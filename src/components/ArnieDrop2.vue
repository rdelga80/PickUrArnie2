<template lang="pug">
  div#arnie-row.row

    div.col-xs-12(:style='dropping')

      div.row

        div#whos.col-xs-12

          img.img-responsive.center-block(
            src='../assets/whos.png'
            v-bind:style='{ opacity: opacity }'
          )

        div.col-xs-12

          div#arnie

            img(src='../assets/arnie-fr-1300.png')#arnie-fr.img-responsive.center-block

          div#fav.col-xs-12

            img.img-responsive.center-block(
              src='../assets/fav.png'
              v-bind:style='{ opacity: opacity }'
              )

    div(:style='{ opacity: opacity }' v-if='showPick')#frontPick.col-xs-8.col-xs-offset-2

      div.row

        div.col-xs-1.col-xs-offset-2

          img(
            src='../assets/arrow.png'
            v-if='arrowShow'
            v-bind:style='{ visibility: arrVis }'
          )

        router-link(
          tag="div"
          class="col-xs-9 picktext"
          style='cursor: pointer'
          v-bind:to='questionsLink'
          v-bind:class='{ pickact: isActive }'
          @mouseover='[isActive = true, arrowShow = true]'
          @click='chooseArnie'
        )

          p Choose Ur Arnie

        div.col-xs-1.col-xs-offset-2

          img(
            src='../assets/arrow.png'
            v-if='!arrowShow'
            v-bind:style='{ visibility: arrVis }'
          )

        router-link(
          tag='div'
          class='col-xs-9 picktext'
          style='cursor: pointer'
          v-bind:to='aarnLink'
          v-bind:class='{ pickact: !isActive }'
          @mouseover='[isActive = false, arrowShow = false]'
          @click="chooseAll"
        )

          p Everyones Else's Fav Arnie

        
</template>

<script>

export default {
	data: function() {
    return {
      dropping: {
        marginTop: '-34%'
      },
      opacity: 0,
      arrowShow: true,
      isActive: '',
      hideArrow: 'none',
      arrVis: 'visible',
      showPick: true,
      questionsLink: {
        name: 'Questions'
      },
      aarnLink: {
        name: 'AllArnie'
      }
    }
  },
	methods: {
    dropArnie() {
      var vm = this
      var top = -34
      var dropArn = setInterval(function () {
        if(top < 3) {
          top += 1
          vm.dropping.marginTop = top + '%'
        } else {
          vm.whosOpac()
          clearInterval(dropArn)
        }
      }, 125)
    },
    whosOpac() {
      var vm = this
      var opac = 0
      var opacInt = setInterval(function () {
        if(opac < 1) {
          opac += 0.1
          vm.opacity = opac
          } else {
            clearInterval(opacInt)
            vm.flashArrow()
          }
        }, 200)
    },
    flashArrow() {
    	var vm = this
    	var flashArr = setInterval(function () {
    		vm.arrVis == 'hidden' ? vm.arrVis = 'visible' : vm.arrVis = 'hidden'
    	}, 1000)
    },
    chooseArnie() {
      this.playSound('off')
      this.showPick = false
      this.$emit('startChoice', 'chooseArnie')
    },
    chooseAll() {
    	this.$emit('startChoice', 'chooseAll')
    },
    playSound(a) {
      var audio = new Audio(a)
      audio.play()
    }
  },
  beforeMount() {
    this.dropArnie()
    this.playSound('/PickUrArnie2/start.mp3')
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
  #arnie { 
    border-radius: 50%;
    background-color: #4c8cf8;
    width: 365px;
    height: 365px;
    margin: 0 auto;
    margin-top: -5%;
    z-index: 9999;
  }

  #arnie-fr {
    position: relative;
    width: 380px;
    padding-top: 10%;
  }

  #arnie-row {
    background-color: rgba(0,0,0,0);
  }

  #whos { 
  	z-index: 1;
  }

  #whos img {
    position: relative;
  	width: 500px;
  }

  #fav {
  	margin-top: -145px; z-index: 2;
  }

  #fav img {
    position: relative;
  	width: 625px;
  }

  #frontPick {
  	margin-top: 70px;
  	font-family: 'VT323', monospace;
  	text-transform: uppercase;
  	font-weight: bolder;
  	font-size: 3em;
  }

  .picktext p {
	background: -webkit-linear-gradient(#ff0000, #fff600);
  	-webkit-background-clip: text;
  	-webkit-text-fill-color: transparent;
  }

  .pickact {
  	visibility: visible;
  }

  img.pickarrow {
  	width: 35px;
  }

  #arnie-row {
  	margin: 0 auto;
  }

  
</style>