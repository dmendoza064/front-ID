<template>
    <b-row class="mb-2">
        <b-col cols="2">{{sucursal.nombre}}</b-col>
        <b-col cols="2">{{sucursal.direccion}}</b-col>
        <b-col>
            <b-button
                variant="primary"
                @click="goToUpdateSucursal" >Editar</b-button>   
            <b-button
                variant="danger"
                class="ml-2"
                @click="removeSucursal" 
            >
                Eliminar
            </b-button>   
        </b-col>
    </b-row>
</template>

<script>
import {mapMutations, mapActions} from 'vuex'
export default {
    data(){
        return{
            fields: []
        }
    },
    props:{
        sucursal:{
            type: Object,
            required: true
        }
    },
    methods: {
        ...mapActions({
            _removeSucursal: 'sucursales/removeSucursal'

        }),
        ...mapMutations('sucursales',['setSucursal']),
        goToUpdateSucursal(){
            this.setSucursal(this.sucursal)
            this.$router.push({
                name: 'sucursales-update',
                params: {id: this.sucursal.id}
            })
        },
        removeSucursal () {
            this._removeSucursal(this.sucursal.id)
        }
    }
}
</script>

