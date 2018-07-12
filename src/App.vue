<template>
  <div id="app">
    <nprogress-container></nprogress-container>
    <img src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<script>
import NprogressContainer from 'vue-nprogress/src/NprogressContainer'
export default {
  name: 'App',
  components: {
    NprogressContainer
  }
}
</script>

<style lang="scss">
@import "~bulma";
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.nprogress-container {
  position: fixed !important;
  width: 100%;
  height: 50px;
  z-index: 2048;
  pointer-events: none;

  #nprogress {
    $color: #48e79a;

    .bar {
      background: $color;
    }
    .peg {
      box-shadow: 0 0 10px $color, 0 0 5px $color;
    }

    .spinner-icon {
      border-top-color: $color;
      border-left-color: $color;
    }
  }
}
</style>
