<template>
  <div v-if="signedIn">
    <div id="app">
      <nprogress-container></nprogress-container>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Mgr from './services/SecurityService'
import NprogressContainer from 'vue-nprogress/src/NprogressContainer'

export default {
  name: 'App',
  data () {
    return {
      mgr: new Mgr(),
      signedIn: false
    }
  },
  components: {
    NprogressContainer
  },
  mounted () {
    this.mgr.getSignedIn().then(
      sucess => {
        console.log(sucess)
        this.signedIn = sucess
      },
      err => {
        console.log(err)
      }
    )
  }
}
</script>
