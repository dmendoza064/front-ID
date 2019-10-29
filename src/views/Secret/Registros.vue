<template>
    <div class="mt-12">
        <b-row>
            <b-col cols="12">
                <!-- <h2>lista de registros</h2> -->
                <registro-list :registros="registrosAll"></registro-list>
            </b-col>
        </b-row>
    </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
import RegistroList from '@/components/RegistroList'
export default {
    components: {
        RegistroList 
    },
    mounted(){
        this.fetchRegistros()
    },
    methods:{
        ...mapActions('registros', ['fetchRegistros'])
    },
    computed:{
        ...mapGetters('registros',['registrosAll'])
    }
}
</script>
