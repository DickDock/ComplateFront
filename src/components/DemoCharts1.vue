<template>
  <div class="" id="demoCharts1"></div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import * as echarts from 'echarts/core';
import {GridComponent, GridComponentOption} from 'echarts/components';
import {BarChart, BarSeriesOption} from 'echarts/charts';
import {CanvasRenderer} from 'echarts/renderers';


export default defineComponent({
  name: "DemoCharts1",
  mounted() {
    echarts.use([GridComponent, BarChart, CanvasRenderer]);

    type EChartsOption = echarts.ComposeOption<GridComponentOption | BarSeriesOption>;

    const chartDom = document.getElementById('demoCharts1')!;
    const myChart = echarts.init(chartDom);
    let option: EChartsOption;

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
          data: [120, 200, 150, 80, 70, 110, 130],
          type: 'bar',
          showBackground: true,
          backgroundStyle: {
            color: 'rgba(180, 180, 180, 0.2)'
          }
        }
      ]
    };

    option && myChart.setOption(option);

  }
})
</script>

<style scoped>

</style>