<template>
    <b-row class="mb-2">
        <b-col cols="2">{{registro.tipo_sucursal}}</b-col>
        <b-col cols="2">{{registro.id_localidad}}</b-col>
        <b-col cols="2">{{registro.id_empleado}}</b-col>
        <b-col cols="2">{{registro.persona_cargo}}</b-col>
        <b-col>
            <b-button
                variant="primary"
                @click="goToUpdateRegistro" >Editar</b-button>   
            <b-button
                variant="danger"
                class="ml-2"
                @click="removeRegistro" 
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
        registro:{
            type: Object,
            required: true
        }
    },
    methods: {
        ...mapActions({
            _removeRegistro: 'registros/removeRegistro'

        }),
        ...mapMutations('registros',['setRegistro']),
        goToUpdateRegistro(){
            this.setRecargo(this.recargo)
            this.$router.push({
                name: 'recargos-update',
                params: {id: this.recargo.id}
            })
        },
        removeRecargo () {
            this._removeRecargo(this.recargo.id)
        }
    }
}
</script>

