<template>
    <div class="container mx-auto p-4">
        <TaskDetail v-if="task" :task="task" />
        <div v-else class="bg-white p-6 rounded-lg shadow-lg text-center">
            <h1 class="text-2xl font-bold mb-4">Task Not Found</h1>
            <p class="mb-4">The task you are looking for does not exist.</p>
            <router-link to="/" class="text-blue-500 hover:underline">Go back to Home</router-link>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { useTaskStore } from '@/stores/taskStore'
import TaskDetail from '@/components/TaskDetail.vue'
import { computed } from 'vue'

const route = useRoute()
const taskStore = useTaskStore()
const taskId = route.params.id as number

const task = computed(() => taskStore.tasks.find(task => task.id == taskId))
</script>