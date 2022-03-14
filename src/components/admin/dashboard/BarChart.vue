<template>
  <div class="h-full w-full">
    <div class="" id="ChartBar"></div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import * as echarts from 'echarts/core';
import {
  TitleComponent,
  TitleComponentOption,
  TooltipComponent,
  TooltipComponentOption,
  VisualMapComponent,
  VisualMapComponentOption,
  LegendComponent,
  LegendComponentOption
} from 'echarts/components';
import { RadarChart, RadarSeriesOption } from 'echarts/charts';
import { CanvasRenderer } from 'echarts/renderers';

export default defineComponent({
  name: "BarChart",
  mounted() {
    this.buildChart()
  },
  methods: {
    buildChart() {
      echarts.use([
        TitleComponent,
        TooltipComponent,
        VisualMapComponent,
        LegendComponent,
        RadarChart,
        CanvasRenderer
      ]);

      type EChartsOption = echarts.ComposeOption<
          | TitleComponentOption
          | TooltipComponentOption
          | VisualMapComponentOption
          | LegendComponentOption
          | RadarSeriesOption
          >;

      var chartDom = document.getElementById('ChartBar')!;
      var myChart = echarts.init(chartDom);
      var option: EChartsOption;

      option = {
        tooltip: {
          trigger: 'item'
        },
        legend: {
          type: 'scroll',
          bottom: 10,
          data: (function () {
            var list = [];
            for (var i = 1; i <= 28; i++) {
              list.push(i + 2000 + '');
            }
            return list;
          })()
        },
        visualMap: {
          top: 'middle',
          right: 10,
          color: ['red', 'yellow'],
          calculable: true
        },
        radar: {
          indicator: [
            { text: 'IE8-', max: 400 },
            { text: 'IE9+', max: 400 },
            { text: 'Safari', max: 400 },
            { text: 'Firefox', max: 400 },
            { text: 'Chrome', max: 400 }
          ]
        },
        series: (function () {
          var series = [];
          for (var i = 1; i <= 28; i++) {
            series.push({
              type: 'radar',
              symbol: 'none',
              lineStyle: {
                width: 1
              },
              emphasis: {
                areaStyle: {
                  color: 'rgba(0,250,0,0.3)'
                }
              },
              data: [
                {
                  value: [
                    (40 - i) * 10,
                    (38 - i) * 4 + 60,
                    i * 5 + 10,
                    i * 9,
                    (i * i) / 2
                  ],
                  name: i + 2000 + ''
                }
              ]
            });
          }
          return series as echarts.RadarSeriesOption;
        })()
      };

      option && myChart.setOption(option);
    }
  }
})
</script>

<style scoped>
#ChartBar {
  width: 100%;
  height: 400px;
}
</style>