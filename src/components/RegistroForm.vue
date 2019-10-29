<template>
    <b-form @submit.prevent="$emit('processRegistro', registro)">
        <b-form-group
            id="registro"
            label="Tipo de sucursal"
            label-for="registro"
        >
            <b-form-input
                autocomplete="on"
                id="registro"
                v-model="registro.tipo_sucursal"
                :state="!$v.registro.tipo_sucursal.$invalid"
                placeholder="Introduce el tipo de sucursal"
                @input="$v.registro.$touch"
            ></b-form-input>
            <b-form-invalid-feedback id="registroInfo" v-if="$v.registro.$dirty">
                Este campo es requerido 
            </b-form-invalid-feedback>
        </b-form-group>
        <b-form-group
            id="registro1"
            label="Localidad"
            label-for="registro1"
        >
            <b-form-input
                autocomplete="on"
                id="registro1"
                v-model="registro.id_localidad"
                :state="!$v.registro.id_localidad.$invalid"
                placeholder="Localidad del registro"
                @input="$v.registro.$touch"
            ></b-form-input>
            <b-form-invalid-feedback id="todoInfo" v-if="$v.registro.$dirty">
                Este campo es requerido 
            </b-form-invalid-feedback>
        </b-form-group>
        <b-form-group
            id="registro2"
            label="Empleado"
            label-for="registro2"
        >
            <b-form-input
                autocomplete="on"
                id="registro2"
                v-model="registro.id_empleado"
                :state="!$v.registro.id_empleado.$invalid"
                placeholder="Introduce el empleado del registro"
                @input="$v.registro.$touch"
            ></b-form-input>
            <b-form-invalid-feedback id="registroInfo" v-if="$v.registro.$dirty">
                Este campo es requerido 
            </b-form-invalid-feedback>
        </b-form-group>
        <b-form-group
            id="registro3"
            label="Persona a cargo"
            label-for="registro3"
        >
            <b-form-input
                autocomplete="on"
                id="registro3"
                v-model="registro.persona_cargo"
                :state="!$v.registro.persona_cargo.$invalid"
                placeholder="Introduce el personal a cargo"
                @input="$v.registro.$touch"
            ></b-form-input>
            <b-form-invalid-feedback id="registroInfo" v-if="$v.registro.$dirty">
                Este campo es requerido 
            </b-form-invalid-feedback>
        </b-form-group>
        
        <b-button
            type="submit"
            variant="primary"
            :disabled="$v.registro.$invalid"
        >
            {{ registroSubmit }}
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
        registro: {
          type: Object,
          required: true
        },
        registroSubmit: {
          type: String,
          default: 'Crear registro'
        }
      },
      validations: {
        registro: {
            
            tipo_sucursal: {
                required
                },
            id_localidad: {
                required
                },
            id_empleado: {
                required
                },
            persona_cargo: {
                required
                }
          },
      },
      mounted () {
          this.registrosAll()
      },
      methods: {
          ...mapActions('registro', ['registrosAll'])
      }
    }
</script>
