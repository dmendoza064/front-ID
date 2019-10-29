<template>
    <b-form @submit.prevent="$emit('processEmpleo', empleo)">
        <b-form-group
            id="empleo"
            label="empleo"
            label-for="soporte"
        >
            <b-form-input
                autocomplete="on"
                id="soporte"
                v-model="empleo.empleo"
                :state="!$v.empleo.empleo.$invalid"
                placeholder="Introduce el nuevo puesto de trabajo"
                @input="$v.empleo.$touch"
            ></b-form-input>
            <b-form-invalid-feedback id="empleoInfo" v-if="$v.empleo.$dirty">
                Este campo es requerido 
            </b-form-invalid-feedback>
        </b-form-group>
        <b-button
            type="submit"
            variant="primary"
            :disabled="$v.empleo.$invalid"
        >
            {{ empleoSubmit }}
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
        empleo: {
          type: Object,
          required: true
        },
        empleoSubmit: {
          type: String,
          default: 'Crear empleo'
        }
      },
      validations: {
        empleo: {
            
            empleo: {
                required
                }
          },
      },
      mounted () {
          this.empleosAll()
      },
      methods: {
          ...mapActions('empleo', ['empleosAll'])
      }
    }
</script>
