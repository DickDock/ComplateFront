<template>
  <div class="h-full w-full">
    <div class="" id="ChartMap"></div>
  </div>
</template>

<script>
export default {
  name: "MapChart",
  mounted() {
    this.buildChart()
  },
  methods: {
    buildChart() {

    }
  }
}
</script>

<style scoped>
#ChartMap {
  width: 100%;
  height: 600px;
}
</style>