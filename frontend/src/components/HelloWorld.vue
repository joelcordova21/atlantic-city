<!-- ================================
     SECCIÓN SCRIPT
     ================================ -->
<script setup>
// defineProps se utiliza para declarar las propiedades
// que el componente recibirá desde su componente padre.
defineProps({
  // "msg" es una propiedad que recibe un texto
  msg: {
    type: String,      // Define que el tipo de dato debe ser String
    required: true,    // Indica que esta propiedad es obligatoria
  },
})
</script>

<!-- ================================
     SECCIÓN TEMPLATE
     ================================ -->
<template>
  <!-- Contenedor principal del componente -->
  <div class="greetings">

    <!-- Muestra el mensaje recibido por props -->
    <h1 class="green">{{ msg }}</h1>

    <!-- Texto informativo del proyecto -->
    <h3>
      You’ve successfully created a project with
      <!-- Enlace a la documentación de Vite -->
      <a href="https://vite.dev/" target="_blank" rel="noopener">
        Vite
      </a>
      +
      <!-- Enlace a la documentación de Vue 3 -->
      <a href="https://vuejs.org/" target="_blank" rel="noopener">
        Vue 3
      </a>.
    </h3>

  </div>
</template>

<!-- ================================
     SECCIÓN STYLE
     ================================ -->
<style scoped>
/* Estilos del título principal */
h1 {
  font-weight: 500;     /* Grosor de la letra */
  font-size: 2.6rem;   /* Tamaño del texto */
  position: relative;  /* Permite mover el elemento */
  top: -10px;          /* Desplazamiento hacia arriba */
}

/* Estilos del subtítulo */
h3 {
  font-size: 1.2rem;
}

/* Centra el texto en pantallas pequeñas */
.greetings h1,
.greetings h3 {
  text-align: center;
}

/* Media query para pantallas grandes */
@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;  /* Alinea el texto a la izquierda */
  }
}
</style>
