<template>
    <div>
        <registro-form :registro="registro" @processRegistro="addRegistro"></registro-form>
    </div>
</template>

<script>
    import {mapActions} from 'vuex'
    import RegistroForm from '@/components/RegistroForm'
    export default {
      components: {
        RegistroForm
      },
      data () {
        return {
          registro: {
            id: null,
            tipo_sucursal: '',
            id_localidad: '',
            id_empleado: '',
            persona_cargo: ''
            
          }
        }
      },
      methods: {
        ...mapActions({
          createRegistro: 'registros/addRegistro'
        }),
        addRegistro (registro) {
          this.createRegistro(registro).then(() => {
            this.$router.push('/registros')
          })
        }
      }
    }
</script>
