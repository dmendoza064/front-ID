<template>

   <v-card>

    <v-card-title primary>

     <v-icon left color="black" large>supervised_user_circle</v-icon>
      Usuarios
      <div class="flex-grow-1"></div>
      <v-text-field
        v-model="search"
        append-icon="search"
        label="Buscar"
        single-line
        hide-details
      >
      </v-text-field>

    </v-card-title>


    <v-data-table
      :headers="headers"
      :items="usuarios"
      :search="search"
      :items-per-page="5"
      no-data-text="No se pudieron encontrar Usuarios"
      no-results-text="No hay coincidencias">
      <template v-slot:item.status="{ item }">
        <v-chip :color="getColorStatus(item.status)"  outlined >
          <v-icon>mdi-account</v-icon>
        </v-chip>
      </template>

      

      <template v-slot:item.action="{ item }">
        <v-icon
        
          small
          class="mr-2"
          @click="goToUpdateUsuario(item)"
          color="blue"
        >
          edit
        </v-icon>

        

        <v-icon
          
          small
          @click="removeUsuario(item)"
          color="red"
        >
          delete
        </v-icon>
      </template>
    
    </v-data-table>

    <v-card-text style="height: 15px; position: relative">
            
          </v-card-text>
        
  </v-card>
  
</template>
<script>
import UsuarioItem from './UsuarioItem'
import {mapMutations, mapActions} from 'vuex'
export default {
    components: {
        UsuarioItem
    },
    props: {
        usuarios: {
            type: Array,
            required: true
        }
    },
    data() {
        return {
            search: '',
            headers: [
          
          {
            text: 'Nombre',
            align: 'left',
            sortable: false,
            value: 'nombre',
          },
          { text: 'Apellidos', value: 'apellidos' },
          { text: 'Correo', value: 'email' },
          { text: 'Tipo', value: 'tipo' },
          { text: 'Estatus', value: 'status' },
          { text: 'Acciones', value: 'action', sortable: false },
        ],
        }
    },
    methods: {
        ...mapActions({
         _removeUsuario: 'usuarios/removeUsuario'

        }),
        ...mapMutations('usuarios',['setUsuario']),
        goToUpdateUsuario(item){
            this.setUsuario(item)
            this.$router.push({
                name: 'usuarios-update',
                params: {id: item.id}
            })
        },
        removeUsuario(item) {
            this._removeUsuario(item.id)
        },
        getColorStatus (idStatusUser) {
          if (idStatusUser == 1) return 'green'
          else return 'grey'
        },
    }
}
</script>