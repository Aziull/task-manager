<template>
  <div class="container mx-auto p-4">
    <h1 class="text-2xl font-bold mb-4">Task Manager</h1>
    <TaskForm @add-task="addTask" />
    <TaskList />
  </div>
</template>

<script setup lang="ts">
import { useTaskStore } from '@/stores/taskStore'
import TaskForm from '@/components/TaskForm.vue'
import TaskList from '@/components/TaskList.vue'

const taskStore = useTaskStore()

const addTask = (task: { title: string, description: string }) => {
  taskStore.addTask({
    id: Date.now(),
    title: task.title,
    description: task.description,
    completed: false
  })
}
</script>
