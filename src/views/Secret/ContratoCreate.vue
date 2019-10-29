<template>
    <div>
        <h2>Nuevo contrato</h2>
        <contrato-form :contrato="contrato" @processContrato="addContrato"></contrato-form>
    </div>
</template>
<script>
import {mapActions} from 'vuex'
import ContratoForm from '@/components/ContratoForm'

export default {
    components: {
        ContratoForm
    },
    data () {
        return {
            contrato: {
                fecha_inicial: '',
                fecha_final: '',
                tiempo: '',
                precio: '',
                servicios_id: '',
                clientes_id: '',
                nota: '',
                id_empleado: ''

            }
        }
    },
    methods: {
        ...mapActions({
          createContrato: 'contratos/addContrato'
        }),
        addContrato (contrato) {
          this.createContrato(contrato).then(() => {
            this.$router.push('/contratos')
          })
        }
    }

}
</script>

