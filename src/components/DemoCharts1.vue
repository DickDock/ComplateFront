<template>
  <div class="">
    <div class="inline-block" id="demoCharts1"></div>
    <div class="inline-block" id="demoCharts2"></div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
// 导入折线图依赖
import * as echarts from 'echarts/core';
import {GridComponent, GridComponentOption} from 'echarts/components';
import {BarChart, BarSeriesOption} from 'echarts/charts';
import {CanvasRenderer} from 'echarts/renderers';

// 导入饼图依赖
import {
  ToolboxComponent,
  ToolboxComponentOption,
  LegendComponent,
  LegendComponentOption
} from 'echarts/components';
import {PieChart, PieSeriesOption} from 'echarts/charts';
import {LabelLayout} from 'echarts/features';


export default defineComponent({
  name: "DemoCharts1",
  mounted() {
    this.zxt1()
    this.bingtu1()
  },
  methods: {
    zxt1() {
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
    },
    bingtu1() {
      echarts.use([
        ToolboxComponent,
        LegendComponent,
        PieChart,
        CanvasRenderer,
        LabelLayout
      ]);

      type EChartsOption = echarts.ComposeOption<ToolboxComponentOption | LegendComponentOption | PieSeriesOption>;

      var chartDom = document.getElementById('demoCharts2')!;
      var myChart = echarts.init(chartDom);
      var option: EChartsOption;

      option = {
        legend: {
          top: 'bottom'
        },
        toolbox: {
          show: true,
          feature: {
            mark: {show: true},
            dataView: {show: true, readOnly: false},
            restore: {show: true},
            saveAsImage: {show: true}
          }
        },
        series: [
          {
            name: 'Nightingale Chart',
            type: 'pie',
            radius: [50, 250],
            center: ['50%', '50%'],
            roseType: 'area',
            itemStyle: {
              borderRadius: 8
            },
            data: [
              {value: 40, name: 'rose 1'},
              {value: 38, name: 'rose 2'},
              {value: 32, name: 'rose 3'},
              {value: 30, name: 'rose 4'},
              {value: 28, name: 'rose 5'},
              {value: 26, name: 'rose 6'},
              {value: 22, name: 'rose 7'},
              {value: 18, name: 'rose 8'}
            ]
          }
        ]
      };

      option && myChart.setOption(option);
    }
  }
})
</script>

<style scoped>
#demoCharts1 {
  width: 50%;
  height: 500px;
}
#demoCharts2 {
  width: 50%;
  height: 500px;
}
</style>