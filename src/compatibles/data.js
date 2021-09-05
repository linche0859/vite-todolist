import { ref, computed } from 'vue';
import { useStorage } from '@vueuse/core';

export default function () {
  const todos = useStorage('todos', [
    {
      id: 1,
      content: '學 Vite 和 Tailwind CSS',
      isDone: false,
    },
  ]);

  const filter = ref('all');

  const renderTodos = computed(() => {
    if (filter.value === 'undone')
      return todos.value.filter((item) => !item.isDone);
    else if (filter.value === 'done')
      return todos.value.filter((item) => item.isDone);
    else return todos.value;
  });

  return { todos, filter, renderTodos };
}
