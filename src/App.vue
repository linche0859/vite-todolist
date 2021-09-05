<template>
  <div class="min-h-screen py-20 bg-gradient-to-tr from-indigo-600 to-purple-500">
    <h1 class="mb-6 text-center text-5xl text-white font-bold">TODOLIST</h1>
    <div class="bg-indigo-50 mx-auto max-w-sm p-6 rounded-lg shadow-lg">
      <TodoInput @add-todo="addTodo" />
      <TodoFilter :filter="filter" @change-filter="changeFilter" />
      <ul class="space-y-3">
        <TodoItem v-for="todo in renderTodos" :key="todo.id" v-bind="todo" @update-state="updateState" @delete-todo="deleteTodo" @update-todo="updateTodo" />
      </ul>
    </div>
  </div>
</template>

<script>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import TodoFilter from './components/TodoFilter.vue'
import TodoInput from './components/TodoInput.vue'
import TodoItem from './components/TodoItem.vue'
import data from './compatibles/data'
import methods from './compatibles/methods'


export default {
  components: {
    TodoFilter,
    TodoInput,
    TodoItem
  },
  setup() {
    const {todos, filter, renderTodos} = data()
    const {addTodo, updateState, deleteTodo, updateTodo, changeFilter} = methods(filter, todos)
    return {todos, filter, renderTodos, addTodo, updateState, deleteTodo, updateTodo, changeFilter}
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
