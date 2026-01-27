<template>
  <v-app>
  
    <v-main>
      <router-view />
    </v-main>
    <AppFooter />
  </v-app>
</template>

<script setup>
  import BarraMenu from '@/components/BarraMenu.vue'
</script>
