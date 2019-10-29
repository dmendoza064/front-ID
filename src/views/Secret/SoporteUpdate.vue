<template>
    <div v-if="selectedSoporte">
        <soporte-form :soporte="selectedSoporte" @processSoporte="updateSoporte"></soporte-form>
    </div>
</template>

<script>
    import {mapActions, mapState} from 'vuex'
    
    import SoporteForm from '@/components/SoporteForm'
    export default {
      components: {
        SoporteForm
      },
      computed: {
          ...mapState ( 'soportes', ['selectedSoporte'])
      },
      methods: {
        ...mapActions({
          _updateSoporte: 'soportes/updateSoporte'
        }),
        updateSoporte (soporte) {
          this._updateSoporte(soporte).then(() => {
            this.$router.push('/soportes')
          })
        }
      }
    }
</script>