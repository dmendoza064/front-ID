<template>
    <div v-if="selectedSucursal">
        <sucursal-form :sucursal="selectedSucursal" @processSucursal="updateSucursal"></sucursal-form>
    </div>
</template>

<script>
    import {mapActions, mapState} from 'vuex'
    
    import SucursalForm from '@/components/SucursalForm'
    export default {
      components: {
        SucursalForm
      },
      computed: {
          ...mapState ( 'sucursales', ['selectedSucursal'])
      },
      methods: {
        ...mapActions({
          _updateSucursal: 'sucursales/updateSucursal'
        }),
        updateSucursal (sucursal) {
          this._updateSucursal(sucursal).then(() => {
            this.$router.push('/sucursales')
          })
        }
      }
    }
</script>