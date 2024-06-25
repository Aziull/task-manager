<template>
    <div class="bg-white p-6 rounded-lg shadow-lg">
        <h1 class="text-2xl font-bold mb-4">{{ task.title }}</h1>
        <p class="mb-4">{{ task.description }}</p>
        <p class="mb-4">
            <span class="font-semibold">Status:</span>
            <span :class="task.completed ? 'text-green-600' : 'text-red-600'">
                {{ task.completed ? 'Completed' : 'Active' }}
            </span>
        </p>
        <router-link to="/" class="text-blue-500 hover:underline">Go back to Home</router-link>
    </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps({
    task: {
        type: Object,
        required: true
    }
})
</script>

<style scoped>
/* додаткові стилі для компонента */
</style>