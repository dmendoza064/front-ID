<template>
    <div class="container">
       
        <b-row>
            <b-col cols="12">
                <!-- <h1><center>lista Usuarios </center> </h1> -->
                <usuario-list :usuarios="usuariosAll"></usuario-list>
            </b-col>
        </b-row>
    </div>
</template>
<script>
import {mapActions, mapGetters} from 'vuex'
import UsuarioList from '@/components/UsuarioList'
export default {
    components: {
        UsuarioList 
    },
    mounted(){
        this.fetchUsuarios()
    },
    methods:{
        ...mapActions('usuarios', ['fetchUsuarios'])
    },
    computed:{
        ...mapGetters('usuarios',['usuariosAll'])
    }
}
</script>