<template>
    <div v-if="selectedCliente">
        <cliente-form :cliente="selectedCliente" @processCliente="updateCliente"></cliente-form>
    </div>
</template>

<script>
    import {mapActions, mapState} from 'vuex'
    
    import ClienteForm from '@/components/ClienteForm'
    export default {
      components: {
        ClienteForm
      },
      computed: {
          ...mapState ( 'clientes', ['selectedCliente'])
      },
      methods: {
        ...mapActions({
          _updateCliente: 'clientes/updateCliente'
        }),
        updateCliente (cliente) {
          this._updateCliente(cliente).then(() => {
            this.$router.push('/clientes')
          })
        }
      }
    }
</script>
