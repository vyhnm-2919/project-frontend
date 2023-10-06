<template>
  <Spinner v-if="isLoading" />
  <div id="chart" class="mt-24" v-else>
    <apexchart
      id="apexcharts"
      type="line"
      height="500"
      :options="chartOptions"
      :series="series"
    ></apexchart>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import { formatDate } from '../../utils/datetime';
import { FILTER_ENUM, IData } from '../../constants/chart';
import data from '../../data/chart';

import Spinner from './Spinner.vue';

const props = defineProps<{
  filter: FILTER_ENUM;
}>();
const isLoading = ref(true);
const dataChart = ref<Array<IData>>([]);

const series = computed(() => {
  return [
    {
      name: 'rss',
      data: (dataChart.value || []).map((item: any) =>
        item.rss.replace('MB', '').trim()
      )
    },
    {
      name: 'heapTotal',
      data: (dataChart.value || []).map((item: any) =>
        item.heapTotal.replace('MB', '').trim()
      )
    },
    {
      name: 'heapUsed',
      data: (dataChart.value || []).map((item: any) =>
        item.heapUsed.replace('MB', '').trim()
      )
    },
    {
      name: 'external',
      data: (dataChart.value || []).map((item: any) =>
        item.external.replace('MB', '').trim()
      )
    },
    {
      name: 'arrayBuffers',
      data: (dataChart.value || []).map((item: any) =>
        item.arrayBuffers.replace('MB', '').trim()
      )
    }
  ];
});

const chartOptions = computed(() => {
  return {
    chart: {
      height: 500,
      type: 'line',
      zoom: { type: 'x', enabled: true, autoScaleYaxis: true },
      toolbar: { autoSelected: 'zoom' }
    },
    dataLabels: { enabled: false },
    stroke: { width: [5, 7, 5], curve: 'straight', dashArray: [0, 8, 5] },
    title: { text: 'Page Statistics', align: 'left' },
    legend: {
      tooltipHoverFormatter: function (val: any, opts: any) {
        return (
          val +
          ': ' +
          opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] +
          'MB'
        );
      }
    },
    markers: { size: 0, hover: { sizeOffset: 6 } },
    xaxis: {
      categories: (dataChart.value || []).map((item: any) =>
        formatDate(item.time)
      )
    },
    grid: { borderColor: '#f1f1f1' }
  };
});

onMounted(() => {
  console.log(props.filter);

  switch (props.filter) {
    case FILTER_ENUM.MINUTE:
      dataChart.value = data;
      break;
    case FILTER_ENUM.SECOND:
      dataChart.value = data;
      break;

    default:
      dataChart.value = data;
      break;
  }

  isLoading.value = false;
});
</script>
