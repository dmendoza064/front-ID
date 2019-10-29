<template>
    <div>
        <soporte-form :soporte="soporte" :clientes="clientesAll" @processSoporte="addSoporte"></soporte-form>
    </div>
</template>

<script>
    import {mapActions, mapGetters, mapState} from 'vuex'
    
    import SoporteForm from '@/components/SoporteForm'
    export default {
      components: {
        SoporteForm
      },
      data () {
        return {
          soporte: {
            //id: null,
            descripcion: '',
            remplazo_equipo: '',
            cliente_id: '',
            usuario_id: '',
            tiempo_solucion: ''
            
          }
        }
      },mounted(){
        this.fetchClientes()
    },
      computed:{
            ...mapGetters('clientes',['clientesAll']),
            
        },
      methods: {
        ...mapActions('clientes', ['fetchClientes']),
        ...mapActions({
          createSoporte: 'soportes/addSoporte'
        }),
        addSoporte (soporte) {
          this.createSoporte(soporte).then(() => {
            this.$router.push('/soportes')
          })
        }
      }
    }
</script>
