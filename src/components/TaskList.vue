<template>
    <div class="mb-4">
        <button @click="filter = 'all'" class="mr-2 p-2 border rounded"
            :class="{ 'bg-gray-200': filter === 'all' }">All</button>
        <button @click="filter = 'active'" class="mr-2 p-2 border rounded"
            :class="{ 'bg-gray-200': filter === 'active' }">Active</button>
        <button @click="filter = 'completed'" class="p-2 border rounded"
            :class="{ 'bg-gray-200': filter === 'completed' }">Completed</button>
    </div>
    <ul>
        <li v-for="task in filteredTasks" class="flex justify-between items-center mb-2 p-2 border rounded">
            <TaskItem :key="task.id" :task="task" @toggle-status="toggleStatus" @delete-task="deleteTask" />
        </li>
    </ul>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useTaskStore } from '@/stores/taskStore'
import TaskItem from './TaskItem.vue'

const taskStore = useTaskStore()
const filter = ref<string>('all')

const filteredTasks = computed(() => {
    if (filter.value === 'all') {
        return taskStore.tasks
    } else if (filter.value === 'active') {
        return taskStore.tasks.filter(task => !task.completed)
    } else {
        return taskStore.tasks.filter(task => task.completed)
    }
})

const toggleStatus = (taskId: number) => {
    taskStore.toggleTaskStatus(taskId)
}

const deleteTask = (taskId: number) => {
    taskStore.deleteTask(taskId)
}
</script>