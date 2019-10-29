<template>
    <div>
        <recargo-form :recargo="recargo" @processRecargo="addRecargo"></recargo-form>
    </div>
</template>

<script>
    import {mapActions} from 'vuex'
    import RecargoForm from '@/components/RecargoForm'
    export default {
      components: {
        RecargoForm
      },
      data () {
        return {
          recargo: {
            id: null,
            descripcion: '',
            tipo: '',
            cantidad: ''
            
          }
        }
      },
      methods: {
        ...mapActions({
          createRecargo: 'recargos/addRecargo'
        }),
        addRecargo (recargo) {
          this.createRecargo(recargo).then(() => {
            this.$router.push('/recargos')
          })
        }
      }
    }
</script>
