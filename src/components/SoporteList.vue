<template>

   <v-card>

    <v-card-title primary>

     <v-icon left color="black" large>supervised_user_circle</v-icon>
      Soporte
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
      :items="soportes"
      :search="search"
      :items-per-page="5"
      no-data-text="No se pudieron encontrar Soportes"
      no-results-text="No hay coincidencias">
      

      

      <template v-slot:item.action="{ item }">
        <v-icon
        
          small
          class="mr-2"
          @click="goToUpdateSoporte(item)"
          color="blue"
        >
          edit
        </v-icon>

        

        <v-icon
          
          small
          @click="removeSoporte(item)"
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
import SoporteItem from './SoporteItem'
import {mapMutations, mapActions} from 'vuex'
export default {
    components: {
        SoporteItem
    },
    props: {
        soportes: {
            type: Array,
            required: true
        }
    },
    data() {
        return {
            search: '',
            headers: [
          
          {
            text: 'Cliente',
            align: 'left',
            sortable: false,
            value: 'cliente',
          },
          { text: 'descripcion del error', value: 'descripcion' },
          { text: 'remplazo equipo', value: 'remplazo_equipo' },
          { text: 'tiempo solucion', value: 'tiempo_solucion' },
          { text: 'Atendido por', value: 'usuario' },
          { text: 'Acciones', value: 'action', sortable: false },
        ],
        }
    },
    
    methods: {
        ...mapActions({
            _removeSoporte: 'soportes/removeSoporte'

        }),
        ...mapMutations('soportes',['setSoporte']),
        goToUpdateSoporte(soporte){
            this.setSoporte(soporte)
            this.$router.push({
                name: 'soportes-update',
                params: {id: soporte.id}
            })
        },
        removeSoporte (soporte) {
            this._removeSoporte(soporte.id)
        }
    }
}
</script>
