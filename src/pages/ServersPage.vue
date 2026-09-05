<template>
  <h2>ServersPage</h2>
  <p>{{ store.count }}</p>
</template>

<script setup lang="ts">
import { useServerStore } from '@/entities/server'

const store = useServerStore()
</script>
