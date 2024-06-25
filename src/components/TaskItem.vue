<template>
    <router-link :to="{ name: 'task-detail', params: { id: task.id } }" class="flex-1">{{ task.title
        }}</router-link>
    <div class="ml-4">
        <button @click="toggleStatus" class="mr-2 bg-yellow-500 text-white p-2 rounded">
            {{ task.completed ? 'Mark as Incomplete' : 'Mark as Complete' }}
        </button>
        <button @click="deleteTask" class="bg-red-500 text-white p-2 rounded">Delete</button>
    </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
    task: Object
})

const emits = defineEmits(['toggle-status', 'delete-task'])

const toggleStatus = () => {
    emits('toggle-status', props.task.id)
}

const deleteTask = () => {
    emits('delete-task', props.task.id)
}
</script>