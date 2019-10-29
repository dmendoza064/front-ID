<template>
    <div class="mt-12">
        <b-row>
            <b-col >
                
                <soporte-list :soportes="soportesAll"></soporte-list>
                <!--<b-table striped hover :items="soportesAll" :fields="fields"></b-table>-->
                
                
            </b-col>
        </b-row>
    </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
import SoporteList from '@/components/SoporteList'
export default {
    data(){
        return {
            fields:['descripcion','cliente_id','remplazo_equipo'],
            currentPage: 1,
            perPage: '8'
        }
    },

    components: {
        SoporteList 
    },
    mounted(){
        this.fetchSoportes()
    },
    methods:{
        ...mapActions('soportes', ['fetchSoportes']),
        // ...mapActions({
        //   getPaginado: 'soportes/fetchSoportesP'
        // }) ,
        
    },
    computed:{
        ...mapGetters('soportes',['soportesAll']),
        // paginado: function ()
        //  {
        //      this.getPaginado(this.currentPage).then(() => {
        //        console.log('paginando...', '')
        //      })
        //  }
        

        
    }
}
</script>
