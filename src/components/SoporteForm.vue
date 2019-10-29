<template>
    <b-form @submit.prevent="$emit('processSoporte', soporte)">
        <b-form-group
            id="soporte"
            label="Soporte"
            label-for="soporte"
        >
            <b-form-input
                autocomplete="on"
                id="soporte"
                v-model="soporte.descripcion"
                :state="!$v.soporte.descripcion.$invalid"
                placeholder="Introduce la descripcion del problema"
                @input="$v.soporte.$touch"
            ></b-form-input>
            <b-form-invalid-feedback id="soporteInfo" v-if="$v.soporte.$dirty">
                Este campo es requerido 
            </b-form-invalid-feedback>
        </b-form-group>
        <b-form-group
            id="remplazo_equipo"
            label="remplazo_equipo"
            label-for="remplazo_equipo"
        >
            <b-form-input
                autocomplete="on"
                id="remplazo_equipo"
                v-model="soporte.remplazo_equipo"
                :state="!$v.soporte.remplazo_equipo.$invalid"
                placeholder="Agrega si/no dependiendo el caso"
                @input="$v.soporte.$touch"
            ></b-form-input>
            <b-form-invalid-feedback id="todoInfo" v-if="$v.soporte.$dirty">
                Este campo es requerido 
            </b-form-invalid-feedback>
        </b-form-group>
        <b-form-group
            id="cliente_id"
            label="cliente_id"
            label-for="cliente_id"
        >
        <b-form-select 
        id="cliente_id"
        v-model="soporte.cliente_id"
        :state="!$v.soporte.cliente_id.$invalid" >
        <option :value="null">selecciona nombre</option>
        
        <option v-for="cliente in clientes"
        :key=" cliente.id"
         v-bind:value="cliente.id">{{cliente.nombre}}</option></b-form-select>
            <!--<b-form-input
                autocomplete="on"
                id="cliente_id"
                v-model="soporte.cliente_id"
                :state="!$v.soporte.cliente_id.$invalid"
                placeholder="SI/NO"
                @input="$v.soporte.$touch"
            ></b-form-input>-->
            <b-form-invalid-feedback id="soporteInfo" v-if="$v.soporte.$dirty">
                Este campo es requerido 
            </b-form-invalid-feedback>
        </b-form-group>
        <b-form-group
            id="usuario"
            label="usuario"
            label-for="usuario"
        >
        
            <b-form-input
                autocomplete="on"
                id="usuario"
                v-model="soporte.usuario_id"
                :state="!$v.soporte.usuario_id.$invalid"
                placeholder="introduce usuario"
                @input="$v.soporte.$touch"
            ></b-form-input>
            <b-form-invalid-feedback id="soporteInfo" v-if="$v.soporte.$dirty">
                Este campo es requerido 
            </b-form-invalid-feedback>
        </b-form-group>
        
        <b-form-group
            id="tiempo_solucion"
            label="tiempo_solucion"
            label-for="tiempo_solucion"
        >
            <b-form-input
                autocomplete="on"
                id="tiempo_solucion"
                v-model="soporte.tiempo_solucion"
                :state="!$v.soporte.tiempo_solucion.$invalid"
                placeholder="introduce usuario"
                @input="$v.soporte.$touch"
            ></b-form-input>
            <b-form-invalid-feedback id="soporteInfo" v-if="$v.soporte.$dirty">
                Este campo es requerido 
            </b-form-invalid-feedback>
        </b-form-group>
        
        <b-button
            type="submit"
            variant="primary"
            :disabled="$v.soporte.$invalid"
        >
            {{ soporteSubmit }}
        </b-button>
    </b-form>
</template>

<script>
    import { validationMixin } from 'vuelidate'
    //import {mapActions, mapGetters, mapState} from 'vuex'
    import { required, minLength } from 'vuelidate/lib/validators'
    export default {
      mixins: [validationMixin],
      props: {
        soporte: {
          type: Object,
          required: true
        },
        soporteSubmit: {
          type: String,
          default: 'Crear soporte'
        },
        clientes: {
          type: Object,
          required: true
        }
      },
      
      validations: {
        soporte: {
            
            descripcion: {
                required
                },
            remplazo_equipo: {
                required
                },
               cliente_id: {
                required
                },
                usuario_id: {
                    required
                },
                tiempo_solucion: {
                    required
                }
          },
      }
    }
</script>
