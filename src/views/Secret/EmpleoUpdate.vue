<template>
    <div v-if="selectedEmpleo">
        <empleo-form :empleo="selectedEmpleo" @processEmpleo="updateEmpleo"></empleo-form>
    </div>
</template>

<script>
    import {mapActions, mapState} from 'vuex'
    
    import EmpleoForm from '@/components/EmpleoForm'
    export default {
      components: {
        EmpleoForm
      },
      computed: {
          ...mapState ( 'empleos', ['selectedEmpleo'])
      },
      methods: {
        ...mapActions({
          _updateEmpleo: 'empleos/updateEmpleo'
        }),
        updateEmpleo (empleo) {
          this._updateEmpleo(empleo).then(() => {
            this.$router.push('/empleos')
          })
        }
      }
    }
</script>