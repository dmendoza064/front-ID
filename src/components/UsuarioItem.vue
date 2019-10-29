<template>
    <b-row class="mb-2">
        <b-col cols="2">
            {{usuario.nombre}}
        </b-col>
        <b-col cols="2">
            {{usuario.apellidos}}
        </b-col>
        <b-col cols="2">
            {{usuario.email}}
        </b-col>
        <b-col cols="2">
            {{usuario.password}}
        </b-col>
        <b-col cols="2">
            {{usuario.tipo}}
        </b-col>
        <b-col>
            
            <b-button
                variant="success"
                @click="goToUpdateUsuario" >Editar</b-button>   
        </b-col>
        <b-col>
            <b-button
                variant="danger"
                @click="removeUsuario">Eliminar</b-button>   
        </b-col>
        
    </b-row>
</template>
<script>
import {mapMutations, mapActions} from 'vuex'
export default {
    props:{
        usuario:{
            type: Object,
            required: true
        }
    },
    methods: {
        ...mapActions({
         _removeUsuario: 'usuarios/removeUsuario'

        }),
        ...mapMutations('usuarios',['setUsuario']),
        goToUpdateUsuario(){
            this.setUsuario(this.usuario)
            this.$router.push({
                name: 'usuarios-update',
                params: {id: this.usuario.id}
            })
        },
        removeUsuario() {
            this._removeUsuario(this.usuario.id)
        }
    }
}
</script>