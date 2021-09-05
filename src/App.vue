<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <!-- <HelloWorld msg="Hello Vue 3 + Vite" /> -->
  <div class="min-h-screen py-20 bg-gradient-to-tr from-indigo-600 to-purple-500">
    <h1 class="mb-6 text-center text-5xl text-white font-bold">TODOLIST</h1>
    <div class="bg-indigo-50 mx-auto max-w-sm p-6 rounded-lg shadow-lg">
      <TodoInput @add-todo="addTodo" />
      <TodoFilter />
      <ul class="space-y-3">
        <TodoItem v-for="todo in todos" :key="todo.id" v-bind="todo" @update-state="updateState" @delete-todo="deleteTodo" @update-todo="updateTodo" />
      </ul>
    </div>
  </div>
</template>

<script>
import {ref} from 'vue'
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import TodoFilter from './components/TodoFilter.vue'
import TodoInput from './components/TodoInput.vue'
import TodoItem from './components/TodoItem.vue'


export default {
  components: {
    TodoFilter,
    TodoInput,
    TodoItem
  },
  setup() {
    const todos = ref([{
      id: 1,
      content: '學...',
      isDone: false,
    }])

    const addTodo = newTodo => {
      todos.value.push({
        id: Date.now(),
        content: newTodo,
        isDone: false,
      })
    }

    const updateState = (id, newState) => {
      const index = todos.value.findIndex(item=>item.id === id)
      if(index!==-1) todos.value[index].isDone = newState
    }

    const deleteTodo = id => {
      const index = todos.value.findIndex(item=>item.id === id)
      if(index!==-1) todos.value.splice(index, 1)
    }

    const updateTodo = (id, content) => {
      const index = todos.value.findIndex(item=>item.id === id)
      if(index!==-1) todos.value[index].content = content
    }

    return {todos, addTodo, updateState, deleteTodo, updateTodo}
  }
}
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
