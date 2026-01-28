<script setup>
import { ref } from 'vue'

// Conexión del buscador a la tabla
const search = ref('')

// Definición de las columnas (Headers)
const headers = [
  { title: '#', key: 'id', align: 'start', sortable: true },
  { title: 'Nombres', key: 'nombres' },
  { title: 'Apellidos', key: 'apellidos' },
  { title: 'Email', key: 'email' },
  { title: 'Categoría', key: 'categoria' },
  { title: 'Telefono', key: 'telefono' },
  { title: 'Acciones', key: 'acciones', sortable: false }, // Columna para los botones
]

// Datos de prueba (Items)
const clientes = ref([
  { id: 1, nombres: 'Mark', apellidos: 'Otto', email: '@mdo', categoria: 'Oro', telefono: '987456321' },
  { id: 2, nombres: 'Jacob', apellidos: 'Thornton', email: '@fat', categoria: 'Bronce', telefono: '987456321' },
  { id: 3, nombres: 'Larry', apellidos: 'the Bird', email: '@twitter', categoria: 'Plata', telefono: '987456321' },
  { id: 4, nombres: 'John', apellidos: 'Doe', email: '@jdoe', categoria: 'Oro', telefono: '987456321' },
  { id: 5, nombres: 'Jane', apellidos: 'Smith', email: '@jsmith', categoria: 'Plata', telefono: '987456321' },
])

// Funciones para los botones
const verCliente = (item) => console.log('Ver:', item)
const editarCliente = (item) => console.log('Editar:', item)
const borrarCliente = (item) => console.log('Borrar:', item)
</script>

<template>
  <v-card class="mt-5" variant="flat" color="transparent">
    <v-layout
      class="d-flex justify-space-between align-center mb-5">
        <v-text-field
            v-model="search"
            :loading="loading"
            label="Buscar cliente"
            append-inner-icon="mdi-magnify"
            density="compact"
            variant="solo-filled"
            flat
            hide-details
            single-line
            @click:append-inner="onClick"
            max-width="30rem"
        ></v-text-field>

        <v-btn variant="tonal">
            Agregar
        </v-btn>

    </v-layout>

    <v-data-table
      :headers="headers"
      :items="clientes"
      :search="search"
      class="elevation-1 custom-table"
      density="comfortable"
    >
      <template v-slot:item.acciones="{ item }">
        <div class="d-flex ga-3">
          <v-btn color="success" size="small" @click="verCliente(item)">Ver</v-btn>
          <v-btn color="warning" size="small" @click="editarCliente(item)">Editar</v-btn>
          <v-btn color="error" size="small" @click="borrarCliente(item)">Borrar</v-btn>
        </div>
      </template>
    </v-data-table>
  </v-card>
</template>

<style scoped>
    /* Estilo para que la tabla combine con tu fondo oscuro de Atlantic City */
    :deep(.custom-table) {
    background-color: #dedede !important;
    color: #1D2939 !important;
    border-radius: 8px;
    }

    :deep(.custom-table th) {
    font-weight: bold !important;
    color: #1D2939 !important;
    background-color: #f8f9fa !important; /* Gris muy claro para el encabezado */
    }

    /* Atacamos el contenedor del campo de texto */
    :deep(.v-field) {
    background-color: white !important;
    color: black !important;
    opacity: 1 !important;
    margin: 1rem 0 !important;
    }

    /* Forzamos que el texto escrito sea negro */
    :deep(.v-field__input) {
    color: black !important;
    }

    /* Forzamos que el label (el texto de sugerencia) sea negro */
    :deep(.v-field-label) {
    color: black !important;
    opacity: 0.7; /* Para que se vea como un placeholder */
    }

    /* Forzamos que el icono sea negro */
    :deep(.v-field__append-inner .v-icon) {
    color: black !important;
    }

    .v-btn {
        background-color: #17A2B8; /* Color de fondo azul */
        color: white; /* Color del texto blanco */
    }
</style>