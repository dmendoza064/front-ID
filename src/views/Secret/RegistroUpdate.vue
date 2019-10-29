<template>
    <div v-if="selectedRegistro">
        <registro-form :registro="selectedRegistro" @processRegistro="updateRegistro"></registro-form>
    </div>
</template>

<script>
    import {mapActions, mapState} from 'vuex'
    
    import RegistroForm from '@/components/RegistroForm'
    export default {
      components: {
        RegistroForm
      },
      computed: {
          ...mapState ( 'registros', ['selectedRegistro'])
      },
      methods: {
        ...mapActions({
          _updateRegistro: 'registros/updateRegistro'
        }),
        updateRegistro (registro) {
          this._updateRegistro(registro).then(() => {
            this.$router.push('/registros')
          })
        }
      }
    }
</script>