<template>
    <div v-if="selectedRecargo">
        <recargo-form :recargo="selectedRecargo" @processRecargo="updateRecargo"></recargo-form>
    </div>
</template>

<script>
    import {mapActions, mapState} from 'vuex'
    
    import RecargoForm from '@/components/RecargoForm'
    export default {
      components: {
        RecargoForm
      },
      computed: {
          ...mapState ( 'recargos', ['selectedRecargo'])
      },
      methods: {
        ...mapActions({
          _updateRecargo: 'recargos/updateRecargo'
        }),
        updateRecargo (recargo) {
          this._updateRecargo(recargo).then(() => {
            this.$router.push('/recargos')
          })
        }
      }
    }
</script>