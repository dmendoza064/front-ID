<template>
    <div class="container">
        <b-row>
            <b-col cols="12">
                <h2>Lista de Pagos clientes por mes</h2>
                <contrato-list :contratos="contratosAll"></contrato-list>
            </b-col>
        </b-row>
    </div>
</template>
<script>
import {mapActions, mapGetters} from 'vuex'
import ContratoList from '@/components/ContratoPagoList'
export default {
    components: {
        ContratoList 
    },
    mounted(){
        this.fetchContratosP()
    },
    methods:{
        ...mapActions('contratos', ['fetchContratosP'])
    },
    computed:{
        ...mapGetters('contratos',['contratosAll'])
    }
}
</script>