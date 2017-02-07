<template lang="pug">
  div.container
    div.row
      div#app.col-xs-12
        transition(name='exit')
          <!-- switch between components based on click within component -->
          component(
            :is='currentComp'
            @startChoice='currentComp = $event'
            @endSound='endSound = $event'
          )

</template>

<script>
import arnieDrop from './components/ArnieDrop2.vue';
import chooseArn from './components/ChooseArn.vue';
import chooseAll from './components/ChooseAll.vue';

export default {
  data: function () {
    return {
      currentComp: arnieDrop,
      musicSrc: '../assets/start.mp3',
    }
  },
  components: {
    arnieDrop : arnieDrop,
    chooseArnie : chooseArn,
    chooseAll : chooseAll
  }
}

</script>

<style>

  body {
    background: url('./assets/arnie-bg.jpg') repeat-x #e3165b;
  }

  .exit-enter {
    opacity: 0;
  }

  .exit-enter-active {
    transition: opacity 5s;
  }

</style>
