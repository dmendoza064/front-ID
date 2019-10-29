<template>
    <div class="mt-12">
        <b-row>
            <b-col cols="12">
                
                <recargo-list :recargos="recargosAll"></recargo-list>
            </b-col>
        </b-row>
    </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
import RecargoList from '@/components/RecargoList'
export default {
    components: {
        RecargoList 
    },
    mounted(){
        this.fetchRecargos()
    },
    methods:{
        ...mapActions('recargos', ['fetchRecargos'])
    },
    computed:{
        ...mapGetters('recargos',['recargosAll'])
    }
}
</script>
