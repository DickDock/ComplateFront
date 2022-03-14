<template>
  <div class="h-full w-full">
    <div class="" id="ChartMap"></div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "MapChart",
  mounted() {
    this.buildChart()
  },
  methods: {
    buildChart() {

    }
  }
})
</script>

<style scoped>
#ChartMap {
  width: 100%;
  height: 400px;
}
</style>