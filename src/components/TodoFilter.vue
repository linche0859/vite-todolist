<template>
  <nav class="mb-4 space-x-4">
    <button class="font-semibold focus:outline-none" :class="filter === 'all' ? 'text-indigo-600' : 'text-indigo-300'" @click="changeFilter('all')">全部</button>
    <button class="font-semibold focus:outline-none" :class="filter === 'undone' ? 'text-indigo-600' : 'text-indigo-300'" @click="changeFilter('undone')">未完成</button>
    <button class="font-semibold focus:outline-none" :class="filter === 'done' ? 'text-indigo-600' : 'text-indigo-300'" @click="changeFilter('done')">已完成</button>
  </nav>
</template>

<script>
export default {
  props: ['filter'],
  emits: ['change-filter'],
  setup(props, {emit}) {
    const changeFilter = value => {
      emit('change-filter', value)
    }

    return {changeFilter}
  }
}
</script>

<style>

</style>