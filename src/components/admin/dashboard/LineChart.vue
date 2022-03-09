<template>
  <div class="h-full w-full">
    <div class="" id="ChartLine"></div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import * as echarts from 'echarts/core';
import {
  TitleComponent,
  TitleComponentOption,
  ToolboxComponent,
  ToolboxComponentOption,
  TooltipComponent,
  TooltipComponentOption,
  GridComponent,
  GridComponentOption,
  LegendComponent,
  LegendComponentOption
} from 'echarts/components';
import {LineChart, LineSeriesOption} from 'echarts/charts';
import {UniversalTransition} from 'echarts/features';
import {CanvasRenderer} from 'echarts/renderers';

export default defineComponent({
  name: "LineChart",
  mounted() {
    this.buildChart()
  },
  methods: {
    buildChart() {
      echarts.use([
        TitleComponent,
        ToolboxComponent,
        TooltipComponent,
        GridComponent,
        LegendComponent,
        LineChart,
        CanvasRenderer,
        UniversalTransition
      ]);

      type EChartsOption = echarts.ComposeOption<| TitleComponentOption
          | ToolboxComponentOption
          | TooltipComponentOption
          | GridComponentOption
          | LegendComponentOption
          | LineSeriesOption>;

      const chartDom = document.getElementById('ChartLine')!;
      const myChart = echarts.init(chartDom);
      let option: EChartsOption;

      option = {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: '#6a7985'
            }
          }
        },
        legend: {
          data: ['高', '中', '低']
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            boundaryGap: false,
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: [
          {
            name: '高',
            type: 'line',
            stack: 'Total',
            areaStyle: {},
            emphasis: {
              focus: 'series'
            },
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: '中',
            type: 'line',
            stack: 'Total',
            areaStyle: {},
            emphasis: {
              focus: 'series'
            },
            data: [220, 182, 191, 234, 290, 330, 310]
          },
          {
            name: '低',
            type: 'line',
            stack: 'Total',
            areaStyle: {},
            emphasis: {
              focus: 'series'
            },
            data: [150, 232, 201, 154, 190, 330, 410]
          },
        ]
      };

      option && myChart.setOption(option);
    }
  }
})
</script>

<style scoped>
#ChartLine {
  width: 100%;
  height: 400px;
}
</style>