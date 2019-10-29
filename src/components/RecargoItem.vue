<template>
    <b-row class="mb-2">
        <b-col cols="2">{{recargo.descripcion}}</b-col>
        <b-col cols="2">{{recargo.tipo}}</b-col>
        <b-col cols="2">{{recargo.cantidad}}</b-col>
        <b-col>
            <b-button
                variant="primary"
                @click="goToUpdateRecargo" >Editar</b-button>   
            <b-button
                variant="danger"
                class="ml-2"
                @click="removeRecargo" 
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
        recargo:{
            type: Object,
            required: true
        }
    },
    methods: {
        ...mapActions({
            _removeRecargo: 'recargos/removeRecargo'

        }),
        ...mapMutations('recargos',['setRecargo']),
        goToUpdateRecargo(){
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