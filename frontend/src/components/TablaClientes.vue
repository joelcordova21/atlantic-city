<!-- ==========================================
     MÓDULO: GESTIÓN DE CLIENTES
     ========================================== -->

<script setup>
// Importación de la función ref para manejar estados reactivos
import { ref } from 'vue'

// ==============================
// BUSCADOR
// ==============================
// Variable reactiva que almacena el texto ingresado
// en el campo de búsqueda de la tabla
const search = ref('')

// ==============================
// DEFINICIÓN DE COLUMNAS
// ==============================
// Headers de la tabla de clientes
const headers = [
  { title: '#', key: 'id', align: 'start', sortable: true },
  { title: 'Nombres', key: 'nombres' },
  { title: 'Apellidos', key: 'apellidos' },
  { title: 'Email', key: 'email' },
  { title: 'Categoría', key: 'categoria' },
  { title: 'Teléfono', key: 'telefono' },

  // Columna especial para acciones (botones)
  { title: 'Acciones', key: 'acciones', sortable: false },
]

// ==============================
// DATOS DE PRUEBA
// ==============================
// Lista de clientes simulada (mock data)
const clientes = ref([
  {
    id: 1,
    nombres: 'Mark',
    apellidos: 'Otto',
    email: '@mdo',
    categoria: 'Oro',
    telefono: '987456321'
  },
  {
    id: 2,
    nombres: 'Jacob',
    apellidos: 'Thornton',
    email: '@fat',
    categoria: 'Bronce',
    telefono: '987456321'
  },
  {
    id: 3,
    nombres: 'Larry',
    apellidos: 'the Bird',
    email: '@twitter',
    categoria: 'Plata',
    telefono: '987456321'
  },
  {
    id: 4,
    nombres: 'John',
    apellidos: 'Doe',
    email: '@jdoe',
    categoria: 'Oro',
    telefono: '987456321'
  },
  {
    id: 5,
    nombres: 'Jane',
    apellidos: 'Smith',
    email: '@jsmith',
    categoria: 'Plata',
    telefono: '987456321'
  },
])

// ==============================
// FUNCIONES DE ACCIONES
// ==============================
// Función para visualizar los datos del cliente
const verCliente = (item) => {
  console.log('Ver cliente:', item)
}

// Función para editar los datos del cliente
const editarCliente = (item) => {
  console.log('Editar cliente:', item)
}

// Función para eliminar un cliente
const borrarCliente = (item) => {
  console.log('Borrar cliente:', item)
}
</script>

<!-- ==========================================
     SECCIÓN TEMPLATE
     ========================================== -->
<template>

  <!-- Tarjeta contenedora del módulo -->
  <v-card class="mt-5" variant="flat" color="transparent">

    <!-- Barra superior: buscador + botón -->
    <v-layout
      class="d-flex justify-space-between align-center mb-5"
    >

      <!-- Campo de búsqueda -->
      <v-text-field
        v-model="search"
        label="Buscar cliente"
        append-inner-icon="mdi-magnify"
        density="compact"
        variant="solo-filled"
        flat
        hide-details
        single-line
        max-width="30rem"
      />

      <!-- Botón para agregar nuevo cliente -->
      <v-btn variant="tonal">
        Agregar
      </v-btn>

    </v-layout>

    <!-- ==============================
         TABLA DE CLIENTES
         ============================== -->
    <v-data-table
      :headers="headers"
      :items="clientes"
      :search="search"
      class="elevation-1 custom-table"
      density="comfortable"
    >

      <!-- Slot personalizado para la columna acciones -->
      <template v-slot:item.acciones="{ item }">
        <div class="d-flex ga-3">

          <!-- Botón ver -->
          <v-btn
            color="success"
            size="small"
            @click="verCliente(item)"
          >
            Ver
          </v-btn>

          <!-- Botón editar -->
          <v-btn
            color="warning"
            size="small"
            @click="editarCliente(item)"
          >
            Editar
          </v-btn>

          <!-- Botón borrar -->
          <v-btn
            color="error"
            size="small"
            @click="borrarCliente(item)"
          >
            Borrar
          </v-btn>

        </div>
      </template>

    </v-data-table>
  </v-card>
</template>

<!-- ==========================================
     ESTILOS
     ========================================== -->
<style scoped>

/* Estilos generales de la tabla */
:deep(.custom-table) {
  background-color: #dedede !important;
  color: #1D2939 !important;
  border-radius: 8px;
}

/* Estilos del encabezado */
:deep(.custom-table th) {
  font-weight: bold !important;
  color: #1D2939 !important;
  background-color: #f8f9fa !important;
}

/* Campo de búsqueda */
:deep(.v-field) {
  background-color: white !important;
  color: black !important;
  opacity: 1 !important;
  margin: 1rem 0 !important;
}

/* Texto del input */
:deep(.v-field__input) {
  color: black !important;
}

/* Label del input */
:deep(.v-field-label) {
  color: black !important;
  opacity: 0.7;
}

/* Ícono de búsqueda */
:deep(.v-field__append-inner .v-icon) {
  color: black !important;
}

/* Botones */
.v-btn {
  background-color: #17A2B8;
  color: white;
}
</style>
