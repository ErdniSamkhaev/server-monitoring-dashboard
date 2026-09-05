import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export interface Server {
  id: string
  name: string
  status: 'online' | 'ofline'
  cpu: number
  ram: number
}

export const useServerStore = defineStore('servers', () => {
  const items = ref<Server[]>([]) // state
  const count = computed(() => items.value.length) // getter
  function add(s: Server) {
    items.value.push(s)
  }
  return { items, count, add }
})
