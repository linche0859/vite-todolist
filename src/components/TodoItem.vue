<template>
  <li class="flex bg-white rounded-md">
    <div class="flex items-center flex-grow px-5 py-2">
      <input :checked="isDone" type="checkbox" name="" id="" class="flex-shrink-0 mr-2 w-5 h-5 text-indigo-600 rounded-full focus:ring-0 focus:ring-offset-0" @change="changeState">
      <p v-if="!isEditing" class="flex-grow p-1 text-indigo-700" :class="[isDone?'line-through':'']" @dblclick="editTodo">{{content}}</p>
      <input v-else type="text" class="flex-grow p-1 border-none focus:ring-indigo-600 rounded-md" v-model="content" @keyup.enter="updateTodo" @blur="updateTodo">
    </div>
    <button class="flex-shrink-0 px-5 py-3 text-indigo-300 hover:text-red-600" @click="deleteTodo">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 stroke-current" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
      </svg>
    </button>
  </li>
</template>

<script>
import {ref} from 'vue'
export default {
  props: ['id', 'content', 'isDone'],
  emits: ['update-state', 'delete-todo', 'update-todo'],
  setup(props, {emit}) {
    const isEditing = ref(false)
    const changeState = event => {
      emit('update-state', props.id, event.target.checked);
    }

    const deleteTodo = () => {
      emit('delete-todo', props.id);
    }

    const editTodo = () => {
      isEditing.value = true
    }

    const updateTodo = event => {
      emit('update-todo', props.id, props.content);
      isEditing.value = false
    }

    return {isEditing, changeState, deleteTodo, editTodo, updateTodo}
  }
}
</script>

<style>

</style>