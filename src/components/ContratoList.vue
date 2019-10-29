<template>

   <v-card>

    <v-card-title primary>

     <v-icon left color="black" large>supervised_user_circle</v-icon>
      Contratos
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
      :items="contratos"
      :search="search"
      :items-per-page="5"
      no-data-text="No se pudieron encontrar Contratos"
      no-results-text="No hay coincidencias">
      

      

      <template v-slot:item.action="{ item }">
        <v-icon
        
          small
          class="mr-2"
          @click="goToUpdateContrato(item)"
          color="blue"
        >
          edit
        </v-icon>

        

        <v-icon
          
          small
          @click="removeContrato(item)"
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
import ContratoItem from './ContratoItem'
import {mapMutations, mapActions} from 'vuex'
export default {
    components: {
        ContratoItem
    },
    props: {
        contratos: {
            type: Array,
            required: true
        }
    },
    data() {
        return {
            search: '',
            headers: [
          
          {
            text: 'Fecha Inicial',
            align: 'left',
            sortable: false,
            value: 'fecha_inicial',
          },
          { text: 'Fecha Final', value: 'fecha_final' },
          { text: 'Tiempo', value: 'tiempo' },
          { text: 'Precio', value: 'precio' },
          { text: 'Servicios', value: 'nombres' },
          { text: 'Cliente', value: 'nombre' },
          { text: 'Apellido del Cliente', value: 'apellido_p' },
          { text: 'Folio', value: 'folio' },
          
          { text: 'Empleado', value: 'nombree' },
          { text: 'Nota', value: 'nota' },
          { text: 'Acciones', value: 'action', sortable: false },
        ],
        }
    },
    methods: {
        ...mapActions({
            _removeContrato: 'contratos/removeContrato'
        }),
        ...mapMutations('contratos',['setContrato']),
        goToUpdateContrato(contrato){
            this.setContrato(contrato)
            this.$router.push({
                name: 'contratos-update',
                params: {id: contrato.id}
            })
        },
        removeContrato (contrato) {
            this._removeContrato(contrato.id)
        }
    }
}
</script>