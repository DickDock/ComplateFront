<template>
  <div class="">
    <div class="inline-block" id="HistoryAlarm1"></div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";

import * as echarts from 'echarts/core';
import {GridComponent, GridComponentOption} from 'echarts/components';
import {LineChart, LineSeriesOption} from 'echarts/charts';
import {UniversalTransition} from 'echarts/features';
import {SVGRenderer} from 'echarts/renderers';

export default defineComponent({
  name: "HistoricalAlarm",
  mounted() {
    this.initEcharts()
  },
  methods: {
    initEcharts() {
      echarts.use([GridComponent, LineChart, SVGRenderer, UniversalTransition]);

      type EChartsOption = echarts.ComposeOption<GridComponentOption | LineSeriesOption>;

      var chartDom = document.getElementById('HistoryAlarm1')!;
      var myChart = echarts.init(chartDom);
      var option: EChartsOption;

      option = {
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: [20, 132, 101, 134, 290, 330, 420],
            type: 'line',
            smooth: true
          }
        ]
      };

      option && myChart.setOption(option);
    }
  }
})
</script>

<style scoped>
#HistoryAlarm1 {
  width: 100%;
  height: 200px;
}
</style>