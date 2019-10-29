<template>

   <v-card>

    <v-card-title primary>

     <v-icon left color="black" large>supervised_user_circle</v-icon>
      Router
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
      :items="routers"
      :search="search"
      :items-per-page="5"
      no-data-text="No se pudieron encontrar Router"
      no-results-text="No hay coincidencias">
      

      

      <template v-slot:item.action="{ item }">
        <v-icon
        
          small
          class="mr-2"
          @click="goToUpdateRouter(item)"
          color="blue"
        >
          edit
        </v-icon>

        

        <v-icon
          
          small
          @click="removeRouter(item)"
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
import RouterItem from './RouterItem'
import {mapMutations, mapActions} from 'vuex'
export default {
    components: {
        RouterItem
    },
    props: {
        routers: {
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
          { text: 'IP', value: 'ip' },
          { text: 'Puerto api', value: 'puerto_api' },
          { text: 'Puerto www', value: 'puerto_www' },
          { text: 'Intefaz lan', value: 'interfaz_lan' },
          { text: 'Rangos ip', value: 'rangos_ip' },
          { text: 'Acciones', value: 'action', sortable: false },
        ],
        }
    },
    methods: {
        ...mapActions({
        _removeRouter: 'routers/removeRouter'

        }),
        ...mapMutations('routers',['setRouter']),
        goToUpdateRouter(){
            this.setRouter(this.router)
            this.$router.push({
                name: 'routers-update',
                params: {id: this.router.id}
            })
        },
        removeRouter () {
            this._removeRouter(this.router.id)
        }
    }
}
</script>