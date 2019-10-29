<template>
<b-row class="mb-2">
    <b-col cols="1">
        {{contrato.id}}
    </b-col>
    <b-col cols="1">
        {{contrato.folio}}
    </b-col>
    <b-col cols="1">
        {{contrato.fecha_inicial}}
    </b-col>
    <b-col cols="1">
        {{contrato.fecha_final}}
    </b-col>
    <b-col cols="1">
        {{contrato.nombre}}
    </b-col>
    <b-col cols="1">
        {{contrato.apellido_p}}
    </b-col>
    <b-col cols="1">
        {{contrato.apellido_m}}
    </b-col>
    <b-col cols="1">
        {{contrato.nombres}}
    </b-col>
    <b-col cols="1">
        {{contrato.precio}}
    </b-col>
    <b-col cols="1">
        {{contrato.pago_mensual}}
    </b-col>
    <b-col cols="1">
        {{contrato.tiempo}}
    </b-col>
    <b-col cols="1">
        {{contrato.nombree}}
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
        // ...mapMutations('contratos',['setContrato']),
        // goToUpdateContrato(){
        //     this.setContrato(this.contrato)
        //     this.$router.push({
        //         name: 'contratos-update',
        //         params: {id: this.contrato.id}
        //     })
        // },
        removeContrato () {
            this._removeContrato(this.contrato.id)
        }
    }
    
}
</script>