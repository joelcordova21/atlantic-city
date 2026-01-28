<script></script>
<template>
  <v-layout>
    <BarraMenu />
    <v-app>
      <v-main>
        <v-container>
          <h2>Clientes</h2>

          <TablaClientes />

          <router-view />
        </v-container>
      </v-main>
    </v-app>

  </v-layout>
</template>
<style>
  .v-layout {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
</style>