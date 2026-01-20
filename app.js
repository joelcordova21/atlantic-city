// Angular control de vista
angular.module('atlanticApp', [])
  .controller('MainCtrl', function() {
    this.view = 'dashboard';

this.roles = {
  administrator: false,
  cashier: false,
  receptionist: false
};
this.isActive = false;

this.createUser = function() {
  const selectedRoles = Object.keys(this.roles).filter(role => this.roles[role]);
  const userStatus = this.isActive ? 'Activo' : 'Inactivo';
  console.log('Roles seleccionados:', selectedRoles);
  console.log('Estado del usuario:', userStatus);
  // Aquí puedes agregar la lógica para crear el usuario
};
    this.setView = function(view) {
      this.view = view;
      const vueApp = document.querySelector('#app').__vue_app__;
      if (vueApp) vueApp._instance.data.currentView = view;
    };
  });

// Vue control dinámico
const { createApp } = Vue;

createApp({
  data() {
    return {
      currentView: 'dashboard',
      // CLIENTES
      searchQuery: '',
      showModal: false,
      newClient: { name: '', lastname: '', email: '', category: '' },
      clients: [
        { name: 'Mark', lastname: 'Otto', email: '@mdo', category: 'Oro' },
        { name: 'Jacob', lastname: 'Thornton', email: '@fat', category: 'Bronce' },
        { name: 'Larry', lastname: 'the Bird', email: '@twitter', category: 'Plata' }
      ],
      // USUARIOS
      searchUser: '',
      showUserModal: false,
      newUser: { name: '', lastname: '', role: '', active: true },
      users: [
        { name: 'Mark', lastname: 'Otto', role: 'Administrador', active: true },
        { name: 'Jacob', lastname: 'Thornton', role: 'Cajero', active: true },
        { name: 'Larry', lastname: 'Bird', role: 'Recepcionista', active: false }
      ]
    };
  },
  computed: {
    filteredClients() {
      return this.clients.filter(c =>
        c.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        c.lastname.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        c.email.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },
    filteredUsers() {
      return this.users.filter(u =>
        u.name.toLowerCase().includes(this.searchUser.toLowerCase()) ||
        u.lastname.toLowerCase().includes(this.searchUser.toLowerCase()) ||
        u.role.toLowerCase().includes(this.searchUser.toLowerCase())
      );
    }
  },
  methods: {
    addClient() {
      if (this.newClient.name && this.newClient.lastname && this.newClient.email && this.newClient.category) {
        this.clients.push({ ...this.newClient });
        this.newClient = { name: '', lastname: '', email: '', category: '' };
        this.showModal = false;
      } else {
        alert('Por favor completa todos los campos.');
      }
    },
    deleteClient(i) {
      this.clients.splice(i, 1);
    },
    addUser() {
      if (this.newUser.name && this.newUser.lastname && this.newUser.role) {
        this.users.push({ ...this.newUser });
        this.newUser = { name: '', lastname: '', role: '', active: true };
        this.showUserModal = false;
      } else {
        alert('Completa todos los campos del usuario.');
      }
    },
    deleteUser(i) {
      this.users.splice(i, 1);
    }
  }
}).mount('#app');
