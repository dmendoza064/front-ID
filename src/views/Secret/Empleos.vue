<template>
    <div class="mt-12">
        <b-row>
            <b-col cols="12">
                
                <empleo-list :empleos="empleosAll"></empleo-list>
            </b-col>
        </b-row>
    </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
import EmpleoList from '@/components/EmpleoList'
export default {
    components: {
        EmpleoList 
    },
    mounted(){
        this.fetchEmpleos()
    },
    methods:{
        ...mapActions('empleos', ['fetchEmpleos'])
    },
    computed:{
        ...mapGetters('empleos',['empleosAll'])
    }
}
</script>
