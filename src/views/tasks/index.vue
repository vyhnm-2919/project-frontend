<template>
  <div
    class="h-screen w-full flex items-center justify-center bg-red-100 font-sans"
  >
    <button
      class="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded text-green border-green hover:bg-green"
      @click="router.push({ name: Routes.TASK.TASK_NEW.NAME })"
    >
      New Todo
    </button>

    <ul role="list" class="divide-y divide-gray-100">
      <li
        v-for="todo in todos"
        :key="todo.id"
        class="flex justify-between gap-x-6 py-5"
      >
        <div class="flex min-w-0 gap-x-4">
          <img
            class="h-12 w-12 flex-none rounded-full bg-gray-50"
            src="https://picsum.photos/536/354"
            alt=""
          />
          <div class="min-w-0 flex-auto">
            <p class="text-sm font-semibold leading-6 text-gray-900">
              {{ todo.name }}
            </p>

            <p class="mt-1 truncate text-xs leading-5 text-gray-500">
              <!-- {{ person.email }} -->
              The Lorem Ipsum for photos.
            </p>
          </div>
        </div>
        <div class="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
          <button
            class="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded text-green border-green hover:bg-green"
            @click="() => handleTodo(todo)"
          >
            {{ todo.isDone ? 'Remove' : 'Complete' }}
          </button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref, onBeforeMount } from 'vue';
import { useRouter } from 'vue-router';

import { taskModule } from '../../repository';
import { TaskDTO } from '../../models/task.dto';
import Routes from '../../router/constants';

const router = useRouter();
const todos = ref<Array<TaskDTO>>([]);

const handleTodo = (todo: TaskDTO) => {
  todo.isDone ? deleteTodo(todo) : markCompleted(todo);
};

const markCompleted = async (todo: TaskDTO) => {
  try {
    const res = await taskModule.markCompleted({ ...todo, isDone: true });

    console.log(res);
  } catch (error) {
    console.log(error);
  }
};

const deleteTodo = async (todo: TaskDTO) => {
  try {
    const res = await taskModule.deleteTodo(todo);

    console.log(res);
  } catch (error) {
    console.log(error);
  }
};

onBeforeMount(async () => {
  try {
    const data = await taskModule.tasks();
    console.log(data);

    todos.value = data;
  } catch (error) {
    console.log(error);
  }
});
</script>
