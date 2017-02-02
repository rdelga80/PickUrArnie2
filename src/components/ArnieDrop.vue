<template>
	<div id="arnie-row" class="row">
    <transition name="drop" appear>
  		<div class="col-xs-12">
  			<div class="row">
  			  <div id="whos" class="col-xs-12">
  			    <img src="../assets/whos.png" class="img-responsive center-block" :style="{ opacity: opacity, width: arnWidth + 'px', maxWidth: arnWidth + 10 + 'px', marginLeft: arnltMgn + 'px', transition: transTime + 's' }">
  			  </div>
  				<div class="col-xs-12">
  			    <div id="arnie">
  			      <img id="arnie-fr" class="img-responsive center-block" src="../assets/arnie-fr-1300.png">
  			    </div>
  				</div>
  			  <div id="fav" class="col-xs-12">
  			    <img src="../assets/fav.png" class="img-responsive center-block" :style="{ opacity: opacity }">
  			  </div>
  			</div>
  		</div>
    </transition>

		<div id="frontPick" class="col-xs-8 col-xs-offset-2" :style="{ opacity: opacity }" v-if="showPick">
			<div class="row">
			  <div class="col-xs-1 col-xs-offset-2">
					<img src="../assets/arrow.png" v-if="arrowShow" :style="{ visibility: arrVis }">
			  </div>
			  <div class="col-xs-9 picktext" :class="{ pickact: isActive }" v-on:mouseover="[isActive = true, arrowShow = true]" @click="chooseArnie">
          <p>Choose Ur Arnie</p>
        </div>
			  <div class="col-xs-1 col-xs-offset-2">
					<img src="../assets/arrow.png" v-if="!arrowShow" :style="{ visibility: arrVis }">
			  </div>
			  <div class="col-xs-9 picktext" :class="{ pickact: !isActive }" v-on:mouseover="[isActive = false, arrowShow = false]" @click="chooseAll">
          <p>Everyones Else's Fav Arnie</p>
        </div>
			</div>
		</div>
	</div>
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
        arnWidth: 500,
        transTime: 0,
        arnltMgn: ''
	    }
	  },
	methods: {
    dropArnie() {
      // var vm = this;
      // var top = -34;
      // var dropArn = setInterval(function(){
      //   if(top < 3) {
      //     top += 1;
      //     vm.dropping.marginTop = top + '%';
      //   } else {
      //     vm.whosOpac();
      //     clearInterval(dropArn);
      //   }
      // }, 125)
    },
    whosOpac() {
      var vm = this;
      var opac = 0;
      var opacInt = setInterval(function (){
        if(opac < 1) {
          opac += 0.1;
          vm.opacity = opac;
          } else {
            clearInterval(opacInt);
            vm.flashArrow();
          }

        }, 200);
    },
    flashArrow() {
    	var vm = this;
    	var flashArr = setInterval(function () {
    		vm.arrVis == 'hidden' ? vm.arrVis = 'visible' : vm.arrVis = 'hidden';
    	}, 1500)
    },
    chooseArnie() {
      this.showPick = false;
      var vm = this;
      var charnTran = setInterval(function (){
        if(vm.arnWidth > 1200) {
          // vm.$emit('startChoice', 'chooseArnie');
          // pauseSound();
        } else {
          if(vm.arnWidth > 1100) {
            vm.arnltMgn = -25;
          };
          vm.arnltMgn *= 1.05;
          vm.transTime = 1;
          vm.arnWidth *= 1.1;
        }
      }, 150)
    },
    chooseAll() {
    	this.$emit('startChoice', 'chooseAll')
      pauseSound();
    }
  },
  beforeMount() {
    // this.dropArnie();
    playSound();
  }
}

var sound = new Audio('../../src/assets/start.mp3');

function playSound() {
    sound.play();
}

function pauseSound() {
    sound.pause();
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
    width: 380px;
    padding-top: 10%;
  }

  #whos { 
  	z-index: 1;
  }

  #whos img {
  	width: 500px;
  }

  #fav {
  	margin-top: -145px; z-index: 2;
  }

  #fav img {
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
  	/*-webkit-text-stroke: 1px #666;*/
  	/*text-shadow: 2px 2px 20px #bbb;*/
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

  .drop-enter {
    margin-top: -43%;
  }

  .drop-enter-active {
    transition: margin-top 8s;
  }

</style>