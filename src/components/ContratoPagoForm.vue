<template>
    <div>
        <v-card class="mt-3">
            
        <b-form @submit.prevent="$emit('processContrato', contrato)" v-if="show">
            <!-- folio -->
            <v-row justify="center">
            <v-col>
            <b-form-group
                id="contrato"
                label="folio"
                label-for="contrato"
                description="folio"
            >
                <b-form-input
                    autocomplete="on"
                    id="contrato"
                    v-model="contrato.folio"
                    :state="!$v.contrato.folio.$invalid"
                    placeholder="Folio cliente"
                    @input="$v.contrato.$touch()">
                </b-form-input>
            </b-form-group>
            <!-- cliente select item -->
             <b-form-group
                id="contrato"
                label="Cliente"
                label-for="contrato"
                description="nombre"
            >
                <b-form-input
                    autocomplete="on"
                    id="contrato"
                    v-model="contrato.nombre"
                    :state="!$v.contrato.nombre.$invalid"
                    placeholder="Nombre del cliente"
                    @input="$v.contrato.$touch()">
                </b-form-input>
            </b-form-group>
        </v-col>
        
            <!-- descripcion -->
        <v-col>
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
            </v-col>
            </v-row>
        <v-row>
            <v-col>
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
            <!-- nombre -->
            <!-- <b-form-group
                id="contrato2"
                label="nombre"
                label-for="contrato2"
                description="nombre"
            >
                <b-form-input
                    autocomplete="on"
                    id="contrato2"
                    v-model="contrato.nombre"
                    :state="!$v.contrato.nombre.$invalid"
                    placeholder="Nombre cliente"
                    @input="$v.contrato.$touch()">
                </b-form-input>
            <b-form-invalid-feedback id="contratoInfo" v-if="$v.contrato.$dirty">
                Esta información es requerida
            </b-form-invalid-feedback>
            </b-form-group> -->
            <!-- apellido_p -->
            <b-form-group
                id="contrato2"
                label="apellido_p"
                label-for="contrato2"
                description="apellido_p"
            >
                <b-form-input
                    autocomplete="on"
                    id="contrato2"
                    v-model="contrato.apellido_p"
                    :state="!$v.contrato.apellido_p.$invalid"
                    placeholder="Apellido(1)"
                    @input="$v.contrato.$touch()">
                </b-form-input>
            <b-form-invalid-feedback id="contratoInfo" v-if="$v.contrato.$dirty">
                Esta información es requerida
            </b-form-invalid-feedback>
            </b-form-group>
            </v-col>
            <v-col>
            <!-- apellido_m -->
            <b-form-group
                id="contrato2"
                label="apellido_m"
                label-for="contrato2"
                description="apellido_m"
            >
                <b-form-input
                    autocomplete="on"
                    id="contrato2"
                    v-model="contrato.apellido_m"
                    :state="!$v.contrato.apellido_m.$invalid"
                    placeholder="Apellido(2)"
                    @input="$v.contrato.$touch()">
                </b-form-input>
            <b-form-invalid-feedback id="contratoInfo" v-if="$v.contrato.$dirty">
                Esta información es requerida
            </b-form-invalid-feedback>
            </b-form-group>
            <!-- nombre servicio -->
            <b-form-group
                id="contrato2"
                label="nombres"
                label-for="contrato2"
                description="nombres"
            >
                <b-form-input
                    autocomplete="on"
                    id="contrato2"
                    v-model="contrato.nombres"
                    :state="!$v.contrato.nombres.$invalid"
                    placeholder="Nombre empleado"
                    @input="$v.contrato.$touch()">
                </b-form-input>
            <b-form-invalid-feedback id="contratoInfo" v-if="$v.contrato.$dirty">
                Esta información es requerida
            </b-form-invalid-feedback>
            </b-form-group>
            <!--Inicia tiempo-->
            </v-col>
            </v-row>
            <v-row>
                <v-col>
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
            </v-col>
            <v-col>
            <!--Inicia pago_mensual-->
            <b-form-group
                id="contrato4"
                label="pago_mensual"
                label-for="contrato4"
                description="pago_mensual"
            >
                <b-form-input
                    autocomplete="on"
                    id="contrato4"
                    v-model="contrato.pago_mensual"
                    :state="!$v.contrato.pago_mensual.$invalid"
                    placeholder="Pago mensual"
                    @input="$v.contrato.$touch()">
                </b-form-input>
                <b-form-invalid-feedback id="contratoInfo" v-if="$v.contrato.$dirty">
                Esta información es requerida
                </b-form-invalid-feedback>
            </b-form-group>
            <!--Inicia Nombree-->
            <b-form-group
                id="contrato5"
                label="nombree"
                label-for="contrato5"
                description="nombree"
            >
                <b-form-input
                    autocomplete="on"
                    id="contrato5"
                    v-model="contrato.nombree"
                    :state="!$v.contrato.nombree.$invalid"
                    placeholder="Nombre empleado"
                    @input="$v.contrato.$touch()">
                </b-form-input>
                <b-form-invalid-feedback id="contratoInfo" v-if="$v.contrato.$dirty">
                Esta información es requerida
                </b-form-invalid-feedback>
            </b-form-group>
            </v-col>
            </v-row>
            <v-row>
                <v-col>
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
            </v-col>
            </v-row>
            <v-divider></v-divider>
            <center><b-button class="mb-5"
            type="submit"
            variant="primary"
            :disabled="$v.contrato.$invalid"
        >
            {{ contratoSubmit }}
        </b-button></center>
        
        
        </b-form>
        
        </v-card>
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
            default: 'REGISTRAR PAGO'
        }
    },
    validations: {
        contrato: {
            folio: {required},
            fecha_inicial: {required},
            fecha_final: {required},
            nombre: {required},
            apellido_p: {required},
            apellido_m: {required},
            nombres: {required},
            tiempo: {required},
            precio: {required},
            pago_mensual: {required},
            nombree: {required},
            nota: {required}
        }
    },
    data() {
      return {
          dialog: false,
        form: {
          email: '',
          name: '',
          food: null,
          checked: [],
          
        },
        foods: [{ text: 'Select One', value: null }, 'Carrots', 'Beans', 'Tomatoes', 'Corn'],
        show: true
      }
    },
    methods: {
        
    }
}
</script>