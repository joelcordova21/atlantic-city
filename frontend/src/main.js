// Registro de las librerias que se a usar: Vuetify, Pinia, Vue Router, etc.
import { registerPlugins } from '@/plugins'

// Importamos el componente principal
import App from './App.vue'

// Importamos la funcion principal para crear la instancia de la aplicacion de Vue
import { createApp } from 'vue'

// Carga las fuentes tipograficas
import 'unfonts.css'

//Se crea la instancia de la aplicacion de Vue
const app = createApp(App)

// Llama a la función de la carpeta plugins para registrar las librerias Vuetify, Pinia, Vue Router.
registerPlugins(app)

//Renderiza la aplicacion en el contenedor con id="app" en index.html
app.mount('#app')
