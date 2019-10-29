<template>
    <b-row class="mb-2">
        <b-col cols="2">{{soporte.descripcion}}</b-col>
        <b-col cols="2">{{soporte.remplazo_equipo}}</b-col>
        <b-col cols="2">{{soporte.cliente_id}}</b-col>
        <b-col>
            <b-button
                variant="primary"
                @click="goToUpdateSoporte" >Editar</b-button>   
            <b-button
                variant="danger"
                class="ml-2"
                @click="removeSoporte" 
            >
                Eliminar
            </b-button>   
        </b-col>
          <b-table striped hover :items="items"></b-table>
    </b-row>
  
</template>

<script>
import {mapMutations, mapActions} from 'vuex'
export default {
    props:{
        soporte:{
            type: Object,
            required: true
        }
    },
    data()
    {
        items = this.soporte
    },
    methods: {
        ...mapActions({
            _removeSoporte: 'soportes/removeSoporte'

        }),
        ...mapMutations('soportes',['setSoporte']),
        goToUpdateSoporte(){
            this.setSoporte(this.soporte)
            this.$router.push({
                name: 'soportes-update',
                params: {id: this.soporte.id}
            })
        },
        removeSoporte () {
            this._removeSoporte(this.soporte.id)
        }
    }
}
</script>

