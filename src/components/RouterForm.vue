<template>
<div>
    <b-form @submit.prevent="$emit('processRouter', router)" v-if="show">
        <!-- inicia campo router.nombre-->
        <b-form-group 
            id="router"
            label="Nombre"
            label-for="router"
            description="nombre"
        >
            <b-form-input
                autocomplete="on"
                id="router"
                v-model="router.nombre"
                :state="!$v.router.nombre.$invalid"
                placeholder="Introduce el nombre"
                @input="$v.router.$touch()"><!--@input="$v.router.$touch()-->
            </b-form-input>
            <b-form-invalid-feedback id="routerInfo" v-if="$v.router.$dirty">
                Esta información es requerida
            </b-form-invalid-feedback>
        </b-form-group>
        <!--Inicia campo router.ip-->
        <b-form-group 
            id="router1"
            label="Ip"
            label-for="router1"
        >
            <b-form-input
                autocomplete="on"
                id="router1"
                v-model="router.ip"
                :state="!$v.router.ip.$invalid"
                placeholder="Introduce la Ip del router"
                @input="$v.router.$touch()"><!--@input="$v.router.$touch()-->
            </b-form-input>
            <b-form-invalid-feedback id="routerInfo" v-if="$v.router.$dirty">
                Esta información es requerida
            </b-form-invalid-feedback>
        </b-form-group>
        <!--Inicia campo  router.puerto_api-->
        <b-form-group 
            id="router2"
            label="Puerto Api"
            label-for="router2"
        >
            <b-form-input
                autocomplete="on"
                id="router2"
                v-model="router.puerto_api"
                :state="!$v.router.puerto_api.$invalid"
                placeholder="Introduce el puerto de la Api"
                @input="$v.router.$touch()"><!--@input="$v.router.$touch()-->
            </b-form-input>
            <b-form-invalid-feedback id="routerInfo" v-if="$v.router.$dirty">
                Esta información es requerida
            </b-form-invalid-feedback>
        </b-form-group>
        <!--Inicia campo  router.puerto_www-->
        <b-form-group 
            id="router3"
            label="Puerto WWW"
            label-for="router3"
        >
            <b-form-input
                autocomplete="on"
                id="router3"
                v-model="router.puerto_www"
                :state="!$v.router.puerto_www.$invalid"
                placeholder="Introduce el puerto WWW"
                @input="$v.router.$touch()"><!--@input="$v.router.$touch()-->
            </b-form-input>
            <b-form-invalid-feedback id="routerInfo" v-if="$v.router.$dirty">
                Esta información es requerida
            </b-form-invalid-feedback>
        </b-form-group>
        <!--Inicia campo  router.interfaz_lan-->
        <b-form-group 
            id="router4"
            label="Nombre"
            label-for="router4"
        >
            <b-form-input
                autocomplete="on"
                id="router4"
                v-model="router.interfaz_lan"
                :state="!$v.router.interfaz_lan.$invalid"
                placeholder="Introduce la Interfaz Lan del router"
                @input="$v.router.$touch()"><!--@input="$v.router.$touch()-->
            </b-form-input>
            <b-form-invalid-feedback id="routerInfo" v-if="$v.router.$dirty">
                Esta información es requerida
            </b-form-invalid-feedback>
        </b-form-group>
        <!--Inicia campo  router.rangos_ip-->
        <b-form-group 
            id="router5"
            label="Rangos Ip"
            label-for="router5"
        >
            <b-form-input
                autocomplete="on"
                id="router5"
                v-model="router.rangos_ip"
                :state="!$v.router.rangos_ip.$invalid"
                placeholder="Introduce el nombre"
                @input="$v.router.$touch()"><!-- @input="$v.router.$touch()-->
            </b-form-input>
            <b-form-invalid-feedback id="routerInfo" v-if="$v.router.$dirty">
                Esta información es requerida
            </b-form-invalid-feedback>
        </b-form-group>
        <b-button
            type="submit"
            variant="primary"
            :disabled="$v.router.$invalid">
            {{routerSubmit}}
        </b-button>
    </b-form>
</div>
</template>
<script>
import { validationMixin} from 'vuelidate'
import { required, minLeng } from 'vuelidate/lib/validators';
export default {
    mixins: [validationMixin],
    props: {
        router: {
            type: Object,
            required: true
        },
        routerSubmit: {
            type: String,
            default: 'Crear router'
        }

        },
        validations: {
            router: {
                 nombre: {
                required
            },
            ip: {
                required
            },
            puerto_api: {
                required
            },
            puerto_www: {
                required
            },
            interfaz_lan: {
                required
            },
            rangos_ip: {
                required
            }  
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

