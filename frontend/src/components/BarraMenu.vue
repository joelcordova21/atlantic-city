<script></script>
<template>
  <v-card>
    <v-layout>
      <v-navigation-drawer
      floating
      permanent
      >
      <h1 class="navbar-title">ATLANTIC CITY</h1>
        <v-list
          density="compact"
          nav
        >
          <v-list-item prepend-icon="mdi-view-dashboard" to="/dashboard" title="Dashboard" value="dashboard"></v-list-item>
          <v-list-item prepend-icon="mdi-account" to="/usuarios" title="Usuarios" value="usuarios"></v-list-item>
          <v-list-item prepend-icon="mdi-account-group" to="/clientes" title="Clientes" value="clientes"></v-list-item>
          <v-list-item prepend-icon="mdi-sale" to="/promociones" title="Promociones" value="promociones"></v-list-item>
          <v-list-item prepend-icon="mdi-group" to="/segmentacion" title="Segmentación de Clientes" value="segmentacion"></v-list-item>
          <v-list-item prepend-icon="mdi-finance" to="/reportes" title="Reportes" value="reportes"></v-list-item>
          <v-list-item prepend-icon="mdi-face-agent" to="/atencion" title="Atención al Cliente" value="atencion"></v-list-item>
          
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
  margin-top: 2rem;
  margin-bottom: 2rem;
  color: rgb(235, 200, 7);
  text-align: center;
}

.v-list-item--active {
  background-color: #3A0647 !important; /* Morado intenso */
}
</style>