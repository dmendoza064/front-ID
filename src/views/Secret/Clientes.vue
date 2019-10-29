<template>
    <div class="container">
       
        <b-row>
            <b-col md="12">
                
               <cliente-list :clientes="clientesAll"></cliente-list>
                <!-- <b-table striped hover 
                :items="clientesAll" 
                :fields="fields"
                :sort-by.sync="sortBy"
                :sort-desc.sync="sortDesc"></b-table>-->
            </b-col>
        </b-row>
    </div>
</template>
<script>
import {mapActions, mapGetters} from 'vuex'
import ClienteList from '@/components/ClienteList'
export default {
    data(){
        return {
            sortBy: 'nombre',
            sortDesc: false,
            fields:[{key:'id', sortable: true},
                    {key:'nombre', sortable: true},
                    {key:'apellido_p', sortable: true},
                    {key:'apellido_m', sortable: true},
                    {key:'direccion', sortable: true},
                    {key:'email', sortable: true}],
            
        }   
    },
    components: {
        ClienteList 
    },
    mounted(){
        this.fetchClientes()
    },
    methods:{
        ...mapActions('clientes', ['fetchClientes'])
    },
    computed:{
        ...mapGetters('clientes',['clientesAll'])
    }
}
</script>
