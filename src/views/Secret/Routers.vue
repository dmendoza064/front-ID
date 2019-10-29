<template>
    <div class="container">
       
        <b-row>
            <b-col cols="12">
                <!-- <h1><center>lista de Routers </center> </h1> -->
                <router-list :routers="routersAll"></router-list>
            </b-col>
        </b-row>
    </div>
</template>
<script>
import {mapActions, mapGetters} from 'vuex'
import RouterList from '@/components/RouterList'
export default {
    components: {
        RouterList 
    },
    mounted(){
        this.fetchRouters()
    },
    methods:{
        ...mapActions('routers', ['fetchRouters'])
    },
    computed:{
        ...mapGetters('routers',['routersAll'])
    }
}
</script>