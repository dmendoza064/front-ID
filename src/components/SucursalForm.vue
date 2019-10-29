<template>
    <b-form @submit.prevent="$emit('processSucursal', sucursal)">
        <b-form-group
            id="sucursal"
            label="Nombre"
            label-for="sucursal"
        >
            <b-form-input
                autocomplete="on"
                id="sucursal"
                v-model="sucursal.nombre"
                :state="!$v.sucursal.nombre.$invalid"
                placeholder="Introduce el nombre de la nueva sucursal"
                @input="$v.sucursal.$touch"
            ></b-form-input>
            <b-form-invalid-feedback id="sucursalInfo" v-if="$v.sucursal.$dirty">
                Este campo es requerido 
            </b-form-invalid-feedback>
        </b-form-group>
        <b-form-group
            id="sucursal1"
            label="Direccion"
            label-for="sucursal1"
        >
            <b-form-input
                autocomplete="on"
                id="sucursal1"
                v-model="sucursal.direccion"
                :state="!$v.sucursal.direccion.$invalid"
                placeholder="Direccion de la sucursal"
                @input="$v.sucursal.$touch"
            ></b-form-input>
            <b-form-invalid-feedback id="sucursalInfo" v-if="$v.sucursal.$dirty">
                Este campo es requerido 
            </b-form-invalid-feedback>
        </b-form-group>
        
        <b-button
            type="submit"
            variant="primary"
            :disabled="$v.sucursal.$invalid"
        >
            {{ sucursalSubmit }}
        </b-button>
    </b-form>
</template>

<script>
    import { validationMixin } from 'vuelidate'
    import{ mapActions, mapMutations, mapState} from 'vuex'
    import { required, minLength } from 'vuelidate/lib/validators'
    export default {
      mixins: [validationMixin],
      props: {
        sucursal: {
          type: Object,
          required: true
        },
        sucursalSubmit: {
          type: String,
          default: 'Crear sucursal'
        }
      },
      validations: {
        sucursal: {
            
            nombre: {
                required
                },
            direccion: {
                required
                }
          },
      },
      mounted () {
          this.sucursalesAll()
      },
      methods: {
          ...mapActions('sucursal', ['sucursalesAll'])
      }
    }
</script>
