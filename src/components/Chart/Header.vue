<template>
  <header>
    <nav class="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
      <div
        class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl"
      >
        <a href="https://flowbite.com" class="flex items-center">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            class="mr-3 h-6 sm:h-9"
            alt="Flowbite Logo"
          />
          <span
            class="self-center text-xl font-semibold whitespace-nowrap dark:text-white"
            >Chart</span
          >
        </a>
        <div class="flex items-center lg:order-2">
          <button
            id="dropdownDefaultButton"
            data-dropdown-toggle="dropdown"
            class="text-white bg-red-800 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
            type="button"
            @click="isShow = !isShow"
          >
            {{ filter === FILTER_ENUM.DEFAULT ? 'Select' : filter }}
            <svg
              class="w-2.5 h-2.5 ml-2.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </button>

          <!-- Dropdown menu -->
          <div
            v-if="isShow"
            id="dropdown"
            class="rounded-lg shadow w-44 absolute top-[8%] bg-red-100 z-50"
          >
            <ul
              class="py-2 text-sm text-gray-700 dark:text-gray-200"
              aria-labelledby="dropdownDefaultButton"
            >
              <li v-for="option in filterOptions">
                <a
                  href="#"
                  class="block px-4 py-2 hover:bg-red-600 hover:text-white"
                  :value="option.value"
                  @click="filterByOption(option.value)"
                  >{{ option.label }}</a
                >
              </li>
            </ul>
          </div>
        </div>
        <div
          class="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
          id="mobile-menu-2"
        >
          <ul
            class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0"
          >
            <li>
              <a
                href="#"
                class="block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white"
                aria-current="page"
                >Home</a
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { FILTER_ENUM } from '../../constants/chart';

const props = defineProps(['modelValue']);
const emit = defineEmits(['update:modelValue']);

const isShow = ref(false);
const filter = ref<FILTER_ENUM>(props.modelValue);
const filterOptions = ref([
  { value: FILTER_ENUM.MINUTE, label: 'Minute' },
  { value: FILTER_ENUM.SECOND, label: 'Second' }
]);

const filterByOption = (option: FILTER_ENUM) => {
  filter.value = option;
  isShow.value = false;
  emit('update:modelValue', option);
};
</script>
