<template>
    <b-row class="mb-2">
        <b-col cols="2">
            {{router.nombre}}
        </b-col>
        <b-col cols="2">
            {{router.ip}}
        </b-col>
        <b-col cols="2">
            {{router.puerto_api}}
        </b-col>
        <b-col cols="2">
            {{router.puerto_www}}
        </b-col>
        <b-col cols="2">
            {{router.intefaz_lan}}
        </b-col>
        <b-col cols="2">
            {{router.rangos_ip}}
        </b-col>
        
        <b-col>
            
            <b-button
                variant="success"
                @click="goToUpdateRouter" >Editar</b-button>   
        </b-col>
        <b-col>
            <b-button
                variant="danger"
                @click="removeRouter" >Eliminar</b-button>   
        </b-col>
        
    </b-row>
</template>
<script>
import {mapMutations, mapActions} from 'vuex'
export default {
    props:{
        router:{
            type: Object,
            required: true
        }
    },
    methods: {
        ...mapActions({
        _removeRouter: 'routers/removeRouter'

        }),
        ...mapMutations('routers',['setRouter']),
        goToUpdateRouter(){
            this.setRouter(this.router)
            this.$router.push({
                name: 'routers-update',
                params: {id: this.router.id}
            })
        },
        removeRouter () {
            this._removeRouter(this.router.id)
        }
    }
}
</script>