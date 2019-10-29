<template>
    <div v-if="selectedContrato">
        <contrato-form :contrato="selectedContrato" @processContrato="updateContrato"></contrato-form>
    </div>
</template>

<script>
    import {mapActions, mapState} from 'vuex'
    
    import ContratoForm from '@/components/ContratoPagoForm'
    export default {
      components: {
        ContratoForm
      },
      computed: {
          ...mapState ( 'contratos', ['selectedContrato'])
      },
      methods: {
        ...mapActions({
          _updateContrato: 'contratos/updateContrato'
        }),
        updateContrato (contrato) {
          this._updateContrato(contrato).then(() => {
            this.$router.push('/secret/clientespagos')
          })
        }
      }
    }
</script>