<template>
    <div class="mt-12">
        <b-row>
            <b-col cols="12">
                <!-- <h2>lista sucursales</h2> -->
                <sucursal-list :sucursales="sucursalesAll"></sucursal-list>
            </b-col>
        </b-row>
    </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
import SucursalList from '@/components/SucursalList'
export default {
    components: {
        SucursalList 
    },
    mounted(){
        this.fetchSucursales()
    },
    methods:{
        ...mapActions('sucursales', ['fetchSucursales'])
    },
    computed:{
        ...mapGetters('sucursales',['sucursalesAll'])
    }
}
</script>
