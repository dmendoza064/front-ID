k<template>
    <div>
        <sucursal-form :sucursal="sucursal" @processSucursal="addSucursal"></sucursal-form>
    </div>
</template>

<script>
    import {mapActions} from 'vuex'
    import SucursalForm from '@/components/SucursalForm'
    export default {
      components: {
        SucursalForm
      },
      data () {
        return {
          sucursal: {
            id: null,
            nombre: '',
            direccion: ''
            
          }
        }
      },
      methods: {
        ...mapActions({
          createSucursal: 'sucursales/addSucursal'
        }),
        addSucursal (sucursal) {
          this.createSucursal(sucursal).then(() => {
            this.$router.push('/sucursales')
          })
        }
      }
    }
</script>
