<template>
    <b-row class="mb-2">
        <b-col cols="2">{{empleo.empleo}}</b-col>
        <b-col>
            <b-button
                variant="primary"
                @click="goToUpdateEmpleo" >Editar</b-button>   
            <b-button
                variant="danger"
                class="ml-2"
                @click="removeEmpleo" 
            >
                Eliminar
            </b-button>   
        </b-col>
    </b-row>
</template>

<script>
import {mapMutations, mapActions} from 'vuex'
export default {
    data(){
        return{
            fields: []
        }
    },
    props:{
        empleo:{
            type: Object,
            required: true
        }
    },
    methods: {
        ...mapActions({
            _removeEmpleo: 'empleos/removeEmpleo'

        }),
        ...mapMutations('empleos',['setEmpleo']),
        goToUpdateEmpleo(){
            this.setEmpleo(this.empleo)
            this.$router.push({
                name: 'empleos-update',
                params: {id: this.empleo.id}
            })
        },
        removeEmpleo () {
            this._removeEmpleo(this.empleo.id)
        }
    }
}
</script>