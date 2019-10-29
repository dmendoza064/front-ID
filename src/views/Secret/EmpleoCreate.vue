<template>
    <div>
        <empleo-form :empleo="empleo" @processEmpleo="addEmpleo"></empleo-form>
    </div>
</template>

<script>
    import {mapActions} from 'vuex'
    import EmpleoForm from '@/components/EmpleoForm'
    export default {
      components: {
        EmpleoForm
      },
      data () {
        return {
          empleo: {
            id: null,
            empleo: ''
            
          }
        }
      },
      methods: {
        ...mapActions({
          createEmpleo: 'empleos/addEmpleo'
        }),
        addEmpleo (empleo) {
          this.createEmpleo(empleo).then(() => {
            this.$router.push('/empleos')
          })
        }
      }
    }
</script>
