<template>
    <b-form @submit.prevent="$emit('processRecargo', recargo)">
        <b-form-group
            id="recargo"
            label="descripcion"
            label-for="recargp"
        >
            <b-form-input
                autocomplete="on"
                id="recargo"
                v-model="recargo.descripcion"
                :state="!$v.recargo.descripcion.$invalid"
                placeholder="Introduce la descripcion del recargo"
                @input="$v.recargo.$touch"
            ></b-form-input>
            <b-form-invalid-feedback id="recargoInfo" v-if="$v.recargo.$dirty">
                Este campo es requerido 
            </b-form-invalid-feedback>
        </b-form-group>
        <b-form-group
            id="recargo1"
            label="Tipo"
            label-for="recargo1"
        >
            <b-form-input
                autocomplete="on"
                id="recargo1"
                v-model="recargo.tipo"
                :state="!$v.recargo.tipo.$invalid"
                placeholder="Tipo de recargo a generar"
                @input="$v.recargo.$touch"
            ></b-form-input>
            <b-form-invalid-feedback id="recargoInfo" v-if="$v.recargo.$dirty">
                Este campo es requerido 
            </b-form-invalid-feedback>
        </b-form-group>
        <b-form-group
            id="recargo2"
            label="cantidad"
            label-for="recargo2"
        >
            <b-form-input
                autocomplete="on"
                id="recargo2"
                v-model="recargo.cantidad"
                :state="!$v.recargo.cantidad.$invalid"
                placeholder="Cantidad en $ del recargo"
                @input="$v.recargo.$touch"
            ></b-form-input>
            <b-form-invalid-feedback id="recargoInfo" v-if="$v.recargo.$dirty">
                Este campo es requerido 
            </b-form-invalid-feedback>
        </b-form-group>
        
        <b-button
            type="submit"
            variant="primary"
            :disabled="$v.recargo.$invalid"
        >
            {{ recargoSubmit }}
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
        recargo: {
          type: Object,
          required: true
        },
        recargoSubmit: {
          type: String,
          default: 'Crear recargo'
        }
      },
      validations: {
        recargo: {
            
            descripcion: {
                required
                },
            tipo: {
                required
                },
            cantidad: {
                required
                }
          },
      },
      mounted () {
          this.recargosAll()
      },
      methods: {
          ...mapActions('recargo', ['recargosAll'])
      }
    }
</script>
