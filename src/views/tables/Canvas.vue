<template>
  <div>
    <radial-gauge :options="{ value: 237 }"></radial-gauge>
    <linear-gauge :value="377"></linear-gauge>
  </div>
</template>

<script>
import { LinearGauge, RadialGauge } from 'vue-canvas-gauges'

export default {
  data () {
    return {}
  },
  components: {
    LinearGauge,
    RadialGauge
  }
}
</script>
