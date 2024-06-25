import { defineStore } from 'pinia'

interface Task {
    id: number
    title: string
    description: string
    completed: boolean
}

export const useTaskStore = defineStore('taskStore', {
    state: () => ({
        tasks: JSON.parse(localStorage.getItem('tasks') ?? '[]') as Task[]
    }),
    actions: {
        addTask(task: Task) {
            this.tasks.push(task)
            this.saveTasks()
        },
        deleteTask(taskId: number) {
            this.tasks = this.tasks.filter(task => task.id !== taskId)
            this.saveTasks()
        },
        toggleTaskStatus(taskId: number) {
            const task = this.tasks.find(task => task.id === taskId)
            if (task) {
                task.completed = !task.completed
                this.saveTasks()
            }
        },
        saveTasks() {
            localStorage.setItem('tasks', JSON.stringify(this.tasks))
        }
    }
})