<template>
    <div class="container">
        <b-row>
            <b-col cols="12">
                <!-- <h2>Lista de Contratos</h2> -->
                <contrato-list :contratos="contratosAll"></contrato-list>
            </b-col>
        </b-row>
    </div>
</template>
<script>
import {mapActions, mapGetters} from 'vuex'
import ContratoList from '@/components/ContratoList'
export default {
    components: {
        ContratoList 
    },
    mounted(){
        this.fetchContratos()
    },
    methods:{
        ...mapActions('contratos', ['fetchContratos'])
    },
    computed:{
        ...mapGetters('contratos',['contratosAll'])
    }
}
</script>