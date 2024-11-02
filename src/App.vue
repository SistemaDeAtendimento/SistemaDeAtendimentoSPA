<script setup>

import HeaderMain from './components/headers/HeaderMain.vue';

</script>

<template>
  <header>
    <HeaderMain />
  </header>
  <main>
    <router-view />
  </main>
</template>

<style scoped>
header {
  position: relative;
  background-color: #333;
  color: #fff;
  padding: 1rem;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}
</style>
