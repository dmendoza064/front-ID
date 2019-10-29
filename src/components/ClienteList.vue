<template>

   <v-card>

    <v-card-title primary>

     <v-icon left color="black" large>supervised_user_circle</v-icon>
      Clientes
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
      :items="clientes"
      :search="search"
      :items-per-page="5"
      no-data-text="No se pudieron encontrar Clientes"
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
          @click="goToUpdateCliente(item)"
          color="blue"
        >
          edit
        </v-icon>

        

        <v-icon
          
          small
          @click="removeCliente(item)"
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
import ClienteItem from './ClienteItem'
import {mapMutations, mapActions} from 'vuex'
export default {
    components: {
        ClienteItem
    },
    props: {
        clientes: {
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
          { text: 'Apellidos', value: 'apellido_m' },
          { text: 'Correo', value: 'email' },
          { text: 'Direccion', value: 'direccion' },
          { text: 'Celular', value: 'celular' },
           { text: 'Status', value: 'status' },
          { text: 'Acciones', value: 'action', sortable: false },
        ],
        }
    },
    
    methods: {
        ...mapActions({
         _removeCliente: 'clientes/removeCliente'

        }),
        ...mapMutations('clientes',['setCliente']),
        goToUpdateCliente(cliente){
            this.setCliente(cliente)
            this.$router.push({
                name: 'clientes-update',
                params: {id: cliente.id}
            })
        },
        removeCliente (cliente) {
            this._removeCliente(cliente.id)
           console.log('probar el id de la celda', cliente.id)
        },
        getColorStatus (idStatusUser) {
          if (idStatusUser == 1) return 'green'
          else return 'grey'
        },
    }
}
</script>
