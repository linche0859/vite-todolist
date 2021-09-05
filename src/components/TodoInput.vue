<template>
  <form action="" class="relative mb-6" @submit.prevent="addToHandler">
    <input v-model="newTodo" type="text" class="px-5 w-full rounded-full border-none focus:ring-0 shadow-lg">
    <button class="absolute right-0 inset-y-0 w-10 bg-gradient-to-t from-indigo-600 to-purple-500 text-white rounded-full">+</button>
  </form>
</template>

<script>
import {ref} from 'vue'
export default {
  emits: ['add-todo'],
  setup(props, {emit}) {
    const newTodo = ref('')

    const addToHandler = () => {
      emit('add-todo', newTodo.value)
      newTodo.value = ''
    }

    return {newTodo, addToHandler}
  }
}
</script>

<style>

</style>