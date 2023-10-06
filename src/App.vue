<template>
  <Header
    :model-value="filter"
    @update:model-value="(newValue: any) => (filter = newValue)"
  />

  <Chart :key="key" v-bind="{ filter }" />
</template>
<script setup lang="ts">
import { ref, computed } from 'vue';
import Header from './components/Chart/Header.vue';
import Chart from './components/Chart/Chart.vue';
import { FILTER_ENUM } from './constants/chart';

const filter = ref(FILTER_ENUM.DEFAULT);

const key = computed(() => `search__${filter.value}`);
</script>
