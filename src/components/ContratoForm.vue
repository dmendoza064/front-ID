<template>
    <div>
        <b-form @submit.prevent="$emit('processContrato', contrato)" v-if="show">
            <!--Inicia fecha inicial-->
            <b-form-group
                id="contrato"
                label="fecha_inicial"
                label-for="contrato"
                description="fecha_inicial"
            >
                <b-form-input
                    autocomplete="on"
                    id="contrato"
                    v-model="contrato.fecha_inicial"
                    :state="!$v.contrato.fecha_inicial.$invalid"
                    placeholder="Introduce la fecha inicial del contrato"
                    @input="$v.contrato.$touch()">
                </b-form-input>
            </b-form-group>
            <!--Inicia fecha final-->
            <b-form-group
                id="contrato1"
                label="fecha_final"
                label-for="contrato1"
                description="fecha_final"
            >
                <b-form-input
                    autocomplete="on"
                    id="contrato1"
                    v-model="contrato.fecha_final"
                    :state="!$v.contrato.fecha_final.$invalid"
                    placeholder="Introduce la fecha final del contrato"
                    @input="$v.contrato.$touch()">
                </b-form-input>
                <b-form-invalid-feedback id="contratoInfo" v-if="$v.contrato.$dirty">
                    Esta información es requerida
                </b-form-invalid-feedback>
            </b-form-group>
            <!--Inicia tiempo-->
            <b-form-group
                id="contrato2"
                label="tiempo"
                label-for="contrato2"
                description="tiempo"
            >
                <b-form-input
                    autocomplete="on"
                    id="contrato2"
                    v-model="contrato.tiempo"
                    :state="!$v.contrato.tiempo.$invalid"
                    placeholder="Introduce el tiempo del contrato"
                    @input="$v.contrato.$touch()">
                </b-form-input>
            <b-form-invalid-feedback id="contratoInfo" v-if="$v.contrato.$dirty">
                Esta información es requerida
            </b-form-invalid-feedback>
            </b-form-group>
            <!--Inicia precio-->
            <b-form-group
                id="contrato3"
                label="precio"
                label-for="contrato3"
                description="precio"
            >
                <b-form-input
                    autocomplete="on"
                    id="contrato3"
                    v-model="contrato.precio"
                    :state="!$v.contrato.precio.$invalid"
                    placeholder="Introduce el precio del contrato"
                    @input="$v.contrato.$touch()">
                </b-form-input>
                <b-form-invalid-feedback id="contratoInfo" v-if="$v.contrato.$dirty">
                Esta información es requerida
                </b-form-invalid-feedback>
            </b-form-group>
            <!--Inicia servicios_id-->
            <b-form-group
                id="contrato4"
                label="servicios"
                label-for="contrato4"
                description="servicios"
            >
                <b-form-input
                    autocomplete="on"
                    id="contrato4"
                    v-model="contrato.servicios_id"
                    :state="!$v.contrato.servicios_id.$invalid"
                    placeholder="selecciona el tipo de servicio"
                    @input="$v.contrato.$touch()">
                </b-form-input>
                <b-form-invalid-feedback id="contratoInfo" v-if="$v.contrato.$dirty">
                Esta información es requerida
                </b-form-invalid-feedback>
            </b-form-group>
            <!--Inicia clientes_id-->
            <b-form-group
                id="contrato5"
                label="clientes_id"
                label-for="contrato5"
                description="clientes_id"
            >
                <b-form-input
                    autocomplete="on"
                    id="contrato5"
                    v-model="contrato.clientes_id"
                    :state="!$v.contrato.clientes_id.$invalid"
                    placeholder="selecciona el cliente"
                    @input="$v.contrato.$touch()">
                </b-form-input>
                <b-form-invalid-feedback id="contratoInfo" v-if="$v.contrato.$dirty">
                Esta información es requerida
                </b-form-invalid-feedback>
            </b-form-group>
            <!--Inicia nota-->
            <b-form-group
                id="contrato6"
                label="nota"
                label-for="contrato6"
                description="nota"
            >
                <b-form-input
                    autocomplete="on"
                    id="contrato6"
                    v-model="contrato.nota"
                    :state="!$v.contrato.nota.$invalid"
                    placeholder="Notas:"
                    @input="$v.contrato.$touch()">
                </b-form-input>
                <b-form-invalid-feedback id="contratoInfo" v-if="$v.contrato.$dirty">
                Esta información es requerida
                </b-form-invalid-feedback>
            </b-form-group>
            <!--Inicia id_empleado-->
            <b-form-group
                id="contrato7"
                label="id_empleado"
                label-for="contrato7"
                description="id_empleado"
            >
                <b-form-input
                    autocomplete="on"
                    id="contrato7"
                    v-model="contrato.id_empleado"
                    :state="!$v.contrato.id_empleado.$invalid"
                    placeholder="Selecciona empleado responsable del contrato:"
                    @input="$v.contrato.$touch()">
                </b-form-input>
            </b-form-group>
            <b-button
            type="submit"
            variant="primary"
            :disabled="$v.contrato.$invalid"
        >
            {{ contratoSubmit }}
        </b-button>
        </b-form>
    </div>
</template>

<script>
import {validationMixin } from 'vuelidate' 
import { required, minLeng} from 'vuelidate/lib/validators';
export default {
    mixins: [validationMixin],
    props: {
        contrato: {
            type: Object,
            required: true
        },
        contratoSubmit: {
            type: String,
            default: 'Crear contrato'
        }
    },
    validations: {
        contrato: {
            fecha_inicial: {required},
            fecha_final: {required},
            tiempo: {required},
            precio: {required},
            servicios_id: {required},
            clientes_id: {required},
            nota: {required},
            id_empleado: {required}
        }
    },
    data() {
      return {
        form: {
          email: '',
          name: '',
          food: null,
          checked: []
        },
        foods: [{ text: 'Select One', value: null }, 'Carrots', 'Beans', 'Tomatoes', 'Corn'],
        show: true
      }
    },
    methods: {
        
    }
}
</script>