<template>
  <header>
    <router-link :to="{ name: 'dashboard' }">Dashboard</router-link>
    <router-link :to="{ name: 'servers' }">Servers</router-link>
    <router-link :to="{ name: 'login' }">Login</router-link>
  </header>
  <aside><!-- sidebar --></aside>
  <main>
    <router-view></router-view>
  </main>
</template>

<script setup lang="ts"></script>
