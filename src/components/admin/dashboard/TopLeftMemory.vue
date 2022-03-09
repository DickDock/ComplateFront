<template>
  <div class="h-full w-full">
    <div class="" id="Chart"></div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import * as echarts from 'echarts/core';
import {
  TooltipComponent,
  TooltipComponentOption,
  LegendComponent,
  LegendComponentOption,
  GridComponent
} from 'echarts/components';
import {PieChart, PieSeriesOption} from 'echarts/charts';
import {LabelLayout} from 'echarts/features';
import {CanvasRenderer} from 'echarts/renderers';

export default defineComponent({
  name: "TopLeftMemory",
  mounted() {
    this.buildChart()
  },
  methods: {
    buildChart() {
      echarts.use([
        TooltipComponent,
        LegendComponent,
        PieChart,
        CanvasRenderer,
        LabelLayout,
        GridComponent
      ])
      type EChartsOption = echarts.ComposeOption<TooltipComponentOption | LegendComponentOption | PieSeriesOption>
      const chartDom = document.getElementById('Chart')!
      const myChart = echarts.init(chartDom)
      let option: EChartsOption

      option = {
        tooltip: {
          trigger: 'item'
        },
        legend: {
          left: 'center',
          bottom: '5%',
          orient: 'horizontal',
          textStyle: {
            color: '#FFF'
          },
        },
        grid: {
          bottom: '0px',
        },
        series: [
          {
            name: '进程信息',
            type: 'pie',
            radius: ['40%', '70%'],
            avoidLabelOverlap: false,
            itemStyle: {
              borderRadius: 10,
              borderColor: '#fff',
              borderWidth: 2
            },
            label: {
              show: false,
              position: 'center'
            },
            emphasis: {
              label: {
                show: true,
                fontSize: '20',
                fontWeight: 'bold'
              }
            },
            labelLine: {
              show: false
            },
            data: [
              {value: 1048, name: '进程1'},
              {value: 735, name: '进程2'},
              {value: 580, name: '进程3'},
              {value: 484, name: '进程4'},
              {value: 300, name: '进程5'}
            ]
          }
        ]
      }

      option && myChart.setOption(option)
    },
  },
})
</script>

<style scoped>
#Chart {
  width: 100%;
  height: 400px;
}
</style>