<template>
  <h2>ServerDetail</h2>
  <p>Server: {{ route.params.id }}</p>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()
</script>
