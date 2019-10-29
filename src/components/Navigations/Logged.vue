<template>
  <div>
    <v-toolbar dark color="black" :extended="extended" :dense="dense">
      <!-- <v-btn 
      color="rgb(0, 0, 0, 0.0)" 
      @click="draw = !draw"
      >-->
      <v-icon color="blue" @click="draw = !draw" large justify="space-around">menu_open</v-icon>
      <!-- </v-btn> -->
      <v-toolbar-title>
        <v-icon color="black">language</v-icon>Mm-Network
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn @click="_logout">Cerrar Sesión</v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <!-- empieza el menu laterar -->
    <v-navigation-drawer
      app
      absolute
      v-model="draw"
      dark
      :mini-variant.sync="mini"
      src="http://www.retail-associates.com/wp-content/uploads/2016/10/website-login-background.jpg"
    >
      <v-list-item>
        <v-list-item-avatar>
          <v-img :src='("../img/pp.jpg")'></v-img>
        </v-list-item-avatar>
        <v-list-item-title>Usuario en sesion</v-list-item-title>
        <v-btn icon @click.stop="mini = !mini">
          <v-icon>chevron_left</v-icon>
        </v-btn>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-group prepend-icon="account_circle" no-action>
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title>Usuarios</v-list-item-title>
            </v-list-item-content>
          </template>

          <v-list-item to="/secret/usuarios">
            <!-- <v-list-item-title >Usuarios </v-list-item-title>   -->

            <v-list-item-title>Usuarios</v-list-item-title>
          </v-list-item>
          <v-list-item to="/secret/usuarios/create">
            <v-list-item-title>Crear usuario</v-list-item-title>
          </v-list-item>
          <!-- <v-list-item to="/secret/usuarios/:id/update">    
              <v-list-item-title >Actualizar usuario </v-list-item-title>  
          </v-list-item>-->
        </v-list-group>
        <v-list-group prepend-icon="build" no-action>
          <template v-slot:activator>
            <v-list-item-title>
              <v-list-item-title>Soportes</v-list-item-title>
            </v-list-item-title>
          </template>
          <v-list-item to="/secret/soportes">
            <v-list-item-title>Lista soportes</v-list-item-title>
          </v-list-item>
          <v-list-item to="/secret/soportes/create">
            <v-list-item-title>Crear nuevo soporte</v-list-item-title>
          </v-list-item>
          <!-- <v-list-item to="/secret/soportes/:id/update">      
              <v-list-item-title >Actualizar soporte </v-list-item-title>    
          </v-list-item>-->
        </v-list-group>
        <v-list-group prepend-icon="face" no-action>
          <template v-slot:activator>
            <v-list-item-title>
              <v-list-item-title>Clientes</v-list-item-title>
            </v-list-item-title>
          </template>
          <v-list-item to="/secret/clientes">
            <v-list-item-title>Listado de clientes</v-list-item-title>
          </v-list-item>
          <v-list-item to="/secret/clientes1/create">
            <v-list-item-title>Agregar cliente</v-list-item-title>
          </v-list-item>
          <!-- <v-list-item to="/secret/clientes/:id/update">      
              <v-list-item-title >Actualizar cliente</v-list-item-title>    
          </v-list-item>-->
        </v-list-group>
        <v-list-group prepend-icon="settings_remote" no-action>
          <template v-slot:activator>
            <v-list-item-title>
              <v-list-item-title>Routers</v-list-item-title>
            </v-list-item-title>
          </template>
          <v-list-item to="/secret/routers">
            <v-list-item-title>Listado de routers</v-list-item-title>
          </v-list-item>
          <v-list-item to="/secret/routers/create">
            <v-list-item-title>Agregar router</v-list-item-title>
          </v-list-item>
          <!-- <v-list-item to="/secret/routers/:id/update">      
              <v-list-item-title >Actualizar equipo router</v-list-item-title>    
          </v-list-item>-->
        </v-list-group>
        <v-list-group prepend-icon="chrome_reader_mode" no-action>
          <template v-slot:activator>
            <v-list-item-title>
              <v-list-item-title>Contratos</v-list-item-title>
            </v-list-item-title>
          </template>
          <v-list-item to="/secret/contratos">
            <v-list-item-title>Listado de contratos</v-list-item-title>
          </v-list-item>
          <v-list-item to="/secret/contratos/create">
            <v-list-item-title>Crear un contrato</v-list-item-title>
          </v-list-item>
          <!-- <v-list-item to="/secret/contratos/:id/update">      
              <v-list-item-title >Actualizar contrato</v-list-item-title>    
          </v-list-item>-->
        </v-list-group>
        <v-list-group prepend-icon="supervisor_account" no-action>
          <template v-slot:activator>
            <v-list-item-title>
              <v-list-item-title>Empleos</v-list-item-title>
            </v-list-item-title>
          </template>
          <v-list-item to="/secret/empleos">
            <v-list-item-title>Ver empleos</v-list-item-title>
          </v-list-item>
          <v-list-item to="/secret/empleos/create">
            <v-list-item-title>Crear un contrato</v-list-item-title>
          </v-list-item>
          <!-- <v-list-item to="/secret/empleos/:id/update">      
              <v-list-item-title >Actualizar contrato</v-list-item-title>    
          </v-list-item>-->
        </v-list-group>
        <v-list-group prepend-icon="gavel" no-action>
          <template v-slot:activator>
            <v-list-item-title>
              <v-list-item-title>Recargos</v-list-item-title>
            </v-list-item-title>
          </template>
          <v-list-item to="/secret/recargos">
            <v-list-item-title>Lista de recargos</v-list-item-title>
          </v-list-item>
          <v-list-item to="/secret/recargos/create">
            <v-list-item-title>Crear un nuevo recargo</v-list-item-title>
          </v-list-item>
          <!-- <v-list-item to="/secret/recargos/:id/update">      
              <v-list-item-title >Actualizar recargo</v-list-item-title>    
          </v-list-item>-->
        </v-list-group>

        <v-list-group prepend-icon="assignment_turned_in" no-action>
          <template v-slot:activator>
            <v-list-item-title>
              <v-list-item-title>Registros</v-list-item-title>
            </v-list-item-title>
          </template>
          <v-list-item to="/secret/registros">
            <v-list-item-title>Ver registros</v-list-item-title>
          </v-list-item>
          <v-list-item to="/secret/registros/create">
            <v-list-item-title>Crear registro</v-list-item-title>
          </v-list-item>
          <!-- <v-list-item to="/secret/registros/:id/update">      
              <v-list-item-title >Actualizar los registros</v-list-item-title>    
          </v-list-item>-->
        </v-list-group>

        <v-list-group prepend-icon="home" no-action>
          <template v-slot:activator>
            <v-list-item-title>
              <v-list-item-title>Sucursales</v-list-item-title>
            </v-list-item-title>
          </template>
          <v-list-item to="/secret/sucursales">
            <v-list-item-title>Lista de sucursales</v-list-item-title>
          </v-list-item>
          <v-list-item to="/secret/sucursales/create">
            <v-list-item-title>Añadir nueva sucursal</v-list-item-title>
          </v-list-item>
          <!-- <v-list-item to="/secret/sucursales/:id/update">      
              <v-list-item-title >Actualizar sucursales</v-list-item-title>    
          </v-list-item>-->
        </v-list-group>
        <v-list-item to="/secret/clientespagos">      
              <v-list-item-title >Pagos clientes</v-list-item-title>    
            </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>


<script>
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      //drawer: true,
      mini: true,
      extended: false,
      dense: true,
      draw: false
    };
  },
  methods: {
    ...mapMutations("auth", ["logout"]),
    _logout() {
      this.logout();
      this.$router.push("/login");
    }
  }
};
</script>