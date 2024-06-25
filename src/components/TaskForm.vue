<template>
    <form @submit.prevent="onSubmit" class="mb-4">
        <input v-model="title" placeholder="Task title" required
            class="w-full p-2 mb-2 border border-gray-300 rounded" />
        <textarea v-model="description" placeholder="Task description" required
            class="w-full p-2 mb-2 border border-gray-300 rounded"></textarea>
        <button type="submit" class="bg-blue-500 text-white p-2 rounded">Add Task</button>
    </form>
</template>

<script setup lang="ts">
import { ref, defineEmits } from 'vue'

const emits = defineEmits(['add-task'])

const title = ref<string>('')
const description = ref<string>('')

const onSubmit = () => {
    if (title.value && description.value) {
        emits('add-task', { title: title.value, description: description.value })
        title.value = ''
        description.value = ''
    }
}
</script>