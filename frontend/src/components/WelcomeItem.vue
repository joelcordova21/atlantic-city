<!-- =====================================
     COMPONENTE WelcomeItem
     ===================================== -->

<template>
  <!-- Contenedor principal del elemento -->
  <div class="item">

    <!-- Contenedor del ícono -->
    <i>
      <!-- Slot con nombre "icon"
           Permite insertar un ícono desde el componente padre -->
      <slot name="icon"></slot>
    </i>

    <!-- Contenedor del contenido -->
    <div class="details">

      <!-- Título del bloque -->
      <h3>
        <!-- Slot con nombre "heading"
             Permite definir el título dinámicamente -->
        <slot name="heading"></slot>
      </h3>

      <!-- Slot por defecto
           Aquí se inserta el contenido principal -->
      <slot></slot>

    </div>
  </div>
</template>

<!-- =====================================
     SECCIÓN DE ESTILOS
     ===================================== -->
<style scoped>

/* Contenedor principal del componente */
.item {
  margin-top: 2rem;
  display: flex;         /* Distribuye ícono y texto en fila */
  position: relative;
}

/* Contenedor del texto */
.details {
  flex: 1;               /* Ocupa el espacio disponible */
  margin-left: 1rem;
}

/* Estilos del ícono */
i {
  display: flex;
  place-items: center;   /* Centra verticalmente */
  place-content: center; /* Centra horizontalmente */
  width: 32px;
  height: 32px;
  color: var(--color-text);
}

/* Estilos del título */
h3 {
  font-size: 1.2rem;
  font-weight: 500;
  mar
