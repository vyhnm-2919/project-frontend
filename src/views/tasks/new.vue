<template>
  <div>Hi</div>
</template>
<!-- <template>
  <div
    class="h-screen w-full flex items-center justify-center bg-red-100 font-sans"
  >
    <div class="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
      <div class="mb-4">
        <h1 class="text-gray-900">Todo List</h1>
        <form @submit.prevent="onSubmitTask" class="flex mt-4">
          <input
            v-model.trim="todo"
            class="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker"
            placeholder="Add Todo"
          />
          <button
            type="submit"
            class="flex-no-shrink p-2 border rounded-[5px] rounded text-white bg-red-100"
          >
            Add
          </button>
        </form>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, onBeforeMount } from 'vue';
import { useRouter } from 'vue-router';

import { taskModule } from '../../repository';
import { TaskDTO } from '../../models/task.dto';

const router = useRouter();
const todo = ref('');

const onSubmitTask = async () => {
  try {
    const newTask = await taskModule.newTask({
      name: todo.value,
      isDone: false
    });
    router.push({ name: 'tasks-new' });
  } catch (error) {
    console.log(error);
  }
};
</script> -->
