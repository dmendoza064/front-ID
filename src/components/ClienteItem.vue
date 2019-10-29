<template>

    <b-row class="mb-2">
        <b-col cols="2">
            {{cliente.nombre}}
        </b-col>
        <b-col cols="2">
            {{cliente.apellido_p}}
        </b-col>
        <b-col cols="2">
            {{cliente.apellido_m}}
        </b-col>
        <b-col cols="2">
            {{cliente.email}}
        </b-col>
        <b-col cols="2">
            {{cliente.direccion}}
        </b-col>
        
        <b-col>
            <b-button
                variant="primary"
                @click="goToUpdateCliente" >Editar</b-button>   
        </b-col>
        <b-col>
            <b-button
                variant="danger" class="ml-2"
                @click="removeCliente" >Eliminar</b-button>   
        </b-col>
        
    </b-row>
</template>
<script>
import {mapMutations, mapActions} from 'vuex'
export default {
    props:{
        cliente:{
            type: Object,
            required: true
        }
    },
    methods: {
        ...mapActions({
         _removeCliente: 'clientes/removeCliente'

        }),
        ...mapMutations('clientes',['setCliente']),
        goToUpdateCliente(){
            this.setCliente(this.cliente)
            this.$router.push({
                name: 'clientes-update',
                params: {id: this.cliente.id}
            })
        },
        removeCliente () {
            this._removeCliente(this.cliente.id)
        }
    }
}
</script>