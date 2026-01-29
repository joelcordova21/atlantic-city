<!-- =====================================
     COMPONENTE BARRA DE NAVEGACIÓN
     ===================================== -->

<script>
/*
  En este componente no se requiere lógica JavaScript,
  ya que su función principal es estructural y visual.
  La navegación se maneja mediante Vue Router.
*/
</script>

<template>

  <!-- Tarjeta principal que contiene toda la estructura -->
  <v-card>

    <!-- Layout principal de Vuetify -->
    <v-layout>

      <!-- =============================
           MENÚ LATERAL (SIDEBAR)
           ============================= -->
      <v-navigation-drawer
        floating      <!-- Hace que el menú tenga efecto flotante -->
        permanent     <!-- Mantiene el menú visible siempre -->
      >

        <!-- Título del sistema -->
        <h1 class="navbar-title">ATLANTIC CITY</h1>

        <!-- Lista de navegación -->
        <v-list
          density="compact"  <!-- Reduce el tamaño de los ítems -->
          nav                <!-- Indica que es un menú de navegación -->
        >

          <!-- Opción: Dashboard -->
          <v-list-item
            prepend-icon="mdi-view-dashboard"
            to="/dashboard"
            title="Dashboard"
            value="dashboard"
          />

          <!-- Opción: Usuarios -->
          <v-list-item
            prepend-icon="mdi-account"
            to="/usuarios"
            title="Usuarios"
            value="usuarios"
          />

          <!-- Opción: Clientes -->
          <v-list-item
            prepend-icon="mdi-account-group"
            to="/clientes"
            title="Clientes"
            value="clientes"
          />

          <!-- Opción: Promociones -->
          <v-list-item
            prepend-icon="mdi-sale"
            to="/promociones"
            title="Promociones"
            value="promociones"
          />

          <!-- Opción: Segmentación de clientes -->
          <v-list-item
            prepend-icon="mdi-group"
            to="/segmentacion"
            title="Segmentación de Clientes"
            value="segmentacion"
          />

          <!-- Opción: Reportes -->
          <v-list-item
            prepend-icon="mdi-finance"
            to="/reportes"
            title="Reportes"
            value="reportes"
          />

          <!-- Opción: Atención al cliente -->
          <v-list-item
            prepend-icon="mdi-face-agent"
            to="/atencion"
            title="Atención al Cliente"
            value="atencion"
          />

        </v-list>
      </v-navigation-drawer>

      <!-- Área donde se cargan las vistas del sistema -->
      <v-main style="height: 100vh">
        <!-- Aquí Vue Router renderiza cada página -->
      </v-main>

    </v-layout>
  </v-card>
</template>

<!-- =====================================
     ESTILOS DEL COMPONENTE
     ===================================== -->
<style>

 /* Estilo del título del sistema */
.navbar-title {
  font-weight: bold;
  font-size: 24px;
  margin-top: 2rem;
  margin-bottom: 2rem;
  color: rgb(235, 200, 7); /* Color dorado estilo casino */
  text-align: center;
}

/* Estilo del ítem activo del menú */
.v-list-item--active {
  background-color: #3A0647 !important; /* Morado intenso */
}

</style>
