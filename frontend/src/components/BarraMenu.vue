<script></script>
<template>
  <v-card>
    <h1 class="navbar-title">ATLANTIC CITY</h1>
    <v-layout>
      <v-navigation-drawer
        floating
        permanent
      >
        <v-list
          density="compact"
          nav
        >
          <v-list-item prepend-icon="mdi-view-dashboard" title="Dashboard" value="dashboard"></v-list-item>
          <v-list-item prepend-icon="mdi-account" title="Usuarios" value="usuarios"></v-list-item>
          <v-list-item prepend-icon="mdi-account-group" title="Clientes" value="clientes"></v-list-item>
          <v-list-item prepend-icon="mdi-sale" title="Promociones" value="promociones"></v-list-item>
          <v-list-item prepend-icon="mdi-group" title="Segmentación de Clientes" value="segmentacion"></v-list-item>
          <v-list-item prepend-icon="mdi-finance" title="Reportes" value="reportes"></v-list-item>
          <v-list-item prepend-icon="mdi-face-agent" title="Atención al Cliente" value="atencion"></v-list-item>
          
        </v-list>
        
      </v-navigation-drawer>
      <v-main style="height: 100vh"></v-main>
    </v-layout>
  </v-card>
</template>

<style>
.navbar-title {
  font-weight: bold;
  font-size: 24px;
  font-family: ;
  margin-left: 16px;
  margin-top: 16px;
  margin-bottom: 16px;
  padding-left: 2rem;
  color: rgb(235, 200, 7);
}
</style>