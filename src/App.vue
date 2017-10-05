<template lang="pug">
  div.container(v-bind:style='{ "background-color": isBlack, width: contWid }' style='background-color: rgba(0,0,0,0)')
    div.row
      div#app.col-xs-12
        transition(name='exit')
          router-view
          <!-- switch between components based on click within component -->
          

</template>

<script>
import arnieDrop from './components/ArnieDrop2.vue';
import chooseArn from './components/ChooseArn.vue';
import chooseAll from './components/ChooseAll.vue';
import { eventBus } from './main.js'

export default {
  data: function () {
    return {
      currentComp: arnieDrop,
      musicSrc: 'assets/start.mp3',
      contWid: null,
      isBlack: null
    }
  },
  methods: {
    backgroundChg(color) {
      console.log(color)
      var vm = this
      var time = 0
      this.contWid = '100%'
      vm.isBlack = 'transparent'
    }
  },
  components: {
    arnieDrop : arnieDrop,
    chooseArnie : chooseArn,
    chooseAll : chooseAll
  },
  created() {
    this.isBlack = 'rgba(0,0,0,0)'
    eventBus.$on('changeBack', (backgroundCg) => {
      this.backgroundChg(backgroundCg)
    })
  }
}

</script>

<style>

  body {
    background: url('assets/arnie-bg.jpg') repeat-x #e3165b;
  }

  .turnBlack {
    background: rgba(0,0,0,0);
    width: 100%;
  }

  .exit-enter {
    opacity: 0;
  }

  .exit-enter-active {
    transition: opacity 5s;
  }

</style>
