<template>
<b-row class="mb-2">
    <b-col cols="2">
        {{contrato.fecha_inicial}}
    </b-col>
    <b-col cols="2">
        {{contrato.fecha_final}}
    </b-col>
    <b-col cols="2">
        {{contrato.tiempo}}
    </b-col>
    <b-col cols="2">
        {{contrato.precio}}
    </b-col>
    <b-col cols="2">
        {{contrato.servicios_id}}
    </b-col>
    <b-col cols="2">
        {{contrato.clientes_id}}
    </b-col>
    <b-col cols="2">
        {{contrato.nota}}
    </b-col>
    <b-col cols="2">
        {{contrato.id_empleado}}
    </b-col>
        <b-col>
            <b-button
                variant="primary"
                @click="goToUpdateContrato" >Editar
            </b-button>   
        </b-col>
        <b-col>
            <b-button
                variant="danger" class="ml-2"
                @click="removeContrato" >Eliminar
            </b-button>   
        </b-col>
</b-row>
</template>
<script>
import {mapMutations, mapActions} from 'vuex'
export default {
    props:{
        contrato:{
            type: Object,
            required: true
        }
    },
    methods: {
        ...mapActions({
            _removeContrato: 'contratos/removeContrato'
        }),
        ...mapMutations('contratos',['setContrato']),
        goToUpdateContrato(){
            this.setContrato(this.contrato)
            this.$router.push({
                name: 'contratos-update',
                params: {id: this.contrato.id}
            })
        },
        removeContrato () {
            this._removeContrato(this.contrato.id)
        }
    }
    
}
</script>

