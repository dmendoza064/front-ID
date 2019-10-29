<template>
  
    <b-card title="Agregar Cliente" class="mt-3">
        <b-row>
            <b-col>
      <b-form-group
        id="nombre"
        label="nombre"
        label-for="nmbre"
        description="el nombre"
      >
        <b-form-input
          id="nombre-1"
          v-model="cliente.nombre"
          :state="!$v.cliente.nombre.$invalid"
          placeholder="Introduce la nombre del problema"
         @input="$v.cliente.$touch"
          
        ></b-form-input>
      </b-form-group>
      <b-form-group
        id="apellido_p"
        label="apellido_p"
        label-for="apellido_p"
        description="apellido_p"
      >
        <b-form-input
          id="apellido_p"
          v-model="cliente.apellido_p"
          :state="!$v.cliente.apellido_p.$invalid"
          placeholder="Introduce el nombre del "
         @input="$v.cliente.$touch"
          
        ></b-form-input>
      </b-form-group>
      <b-form-group
        id="apellido_m"
        label="apellido_m"
        label-for="apellido_m"
        description="apellido_m"
      >
        <b-form-input
          id="apellido_m"
          v-model="cliente.apellido_m"
          :state="!$v.cliente.apellido_p.$invalid"
          placeholder="Introduce el apellido materno "
         @input="$v.cliente.$touch"
          
        ></b-form-input>
      </b-form-group>
      <b-form-group
        id="telefono"
        label="telefono"
        label-for="telefono"
        description="telefono"
      >
        <b-form-input
          id="telefono"
          v-model="cliente.telefono"
          :state="!$v.cliente.telefono.$invalid"
          placeholder="Introduce el telefono paps "
         @input="$v.cliente.$touch"
          
        ></b-form-input>
      </b-form-group>
      <b-form-group
        id="celular"
        label="celular"
        label-for="celular"
        description="celular"
      >
        <b-form-input
          id="celular"
          v-model="cliente.celular"
          :state="!$v.cliente.celular.$invalid"
          placeholder="Introduce el celular paps "
         @input="$v.cliente.$touch"
          
        ></b-form-input>
      </b-form-group>
       <b-form-group
        id="email"
        label="email"
        label-for="email"
        description="email"
      >
        <b-form-input
          id="email"
          v-model="cliente.email"
          type="email"
          :state="!$v.cliente.email.$invalid"
          placeholder="Introduce el email paps "
         @input="$v.cliente.$touch"
          
        ></b-form-input>
      </b-form-group>
      <b-form-group
        id="cp"
        label="cp"
        label-for="cp"
        description="cp"
      >
        <b-form-input
          id="cp"
          v-model="cliente.cp"
          type="cp"
          :state="!$v.cliente.cp.$invalid"
          placeholder="Introduce el cp paps "
         @input="$v.cliente.$touch"
          
        ></b-form-input>
      </b-form-group>
      <b-form-group
        id="direccion"
        label="direccion"
        label-for="direccion"
        description="direccion"
      >
        <b-form-input
          id="direccion"
          v-model="cliente.direccion"
          type="direccion"
          :state="!$v.cliente.direccion.$invalid"
          placeholder="Introduce el direccion paps "
         @input="$v.cliente.$touch"
          
        ></b-form-input>
      </b-form-group>
      <b-form-group
        id="entre_calles"
        label="entre_calles"
        label-for="entre_calles"
        description="entre_calles"
      >
        <b-form-input
          id="entre_calles"
          v-model="cliente.entre_calles"
          type="entre_calles"
          :state="!$v.cliente.entre_calles.$invalid"
          placeholder="Introduce la calles paps "
         @input="$v.cliente.$touch"
          
        ></b-form-input>
      </b-form-group>
      <!-- select de estados-->
      <b-form-group
        id="estados"
        label="estados"
        label-for="estados"
        description="estados"
      >
        <b-form-select
        id="estados"
        v-model="idEstado.id"
         v-on:change="cambioEstado"
         >
        <option :value="null" >selecciona estado</option>
        <option v-for="estado in estados"
        :key="estado.id"
         v-bind:value="estado.id">{{estado.estado}}</option>
        </b-form-select>
      </b-form-group>
      <!-- fin select de estados-->
      <!-- select de municipios-->
      <b-form-group
        id="municipios"
        label="municipios"
        label-for="municipios"
        description="municipios"
      >
        <b-form-select
        id="municipios"
        v-model="idMunicipio.id"
         
        v-on:change="cambioMunicipio1"
         >
        <option :value="null">selecciona municipios</option>
        <option v-for="municipio in municipiosAll"
        :key="municipio.id"
         v-bind:value="municipio.id">{{municipio.municipio}}</option>
        </b-form-select>
      </b-form-group>
      <!-- fin select de municipios-->
      <!-- select de localidades-->
      <b-form-group
        id="localidades_id"
        label="localidades_id"
        label-for="localidades_id"
        description="localidades_id"
      >
        <b-form-select
        id="localidades_id"
        v-model="cliente.localidades_id"
        :state="!$v.cliente.localidades_id.$invalid" >
        <option :value="null">selecciona localidad</option>
        <option v-for="localidad in localidadesAll"
        :key="localidad.id"
         v-bind:value="localidad.id">{{localidad.localidad}}</option>
        </b-form-select>
      </b-form-group>
      <!-- fin select de localidades-->
      <!-- text de notas-->
      <b-form-group
        id="notas"
        label="notas"
        label-for="notas"
        description="notas"
      >
       <b-form-textarea
          id="notas"
          v-model="cliente.notas"
          type="entre_calles"
          :state="!$v.cliente.notas.$invalid"
          placeholder="Escribe la nota"
          rows="3"
          max-rows="6"
          @input="$v.cliente.$touch"
        ></b-form-textarea>
      </b-form-group>
      <!-- fin text de notas-->
      
      
       </b-col>
      </b-row>
    </b-card>
</template>

<script>
import {mapMutations, mapActions, mapGetters} from 'vuex'
import {validationMixin } from 'vuelidate' 
import { required, minLeng} from 'vuelidate/lib/validators';
export default {
    mixins: [validationMixin],
    props: {
        cliente: {
            type: Object,
            required: true
        },
        clienteSubmit: {
            type: String,
            default: 'crear cliente'
        },
        estados: {
          type: Object,
          required: true
        },
        idEstado: {
          type: Object,
          required: true
        },
        idMunicipio: {
          type: Object,
          required: true
        }
    },   
        validations: {
            cliente: {
                nombre: {
                    required
                    },
                apellido_p: {
                    required
                },
                apellido_m: {
                    required
                },
                telefono: {
                    required
                },
                celular: {
                    required
                    },
                email: {
                    required
                    },
                cp: {
                    required
                    },
                direccion: {
                    required
                    },
                localidades_id: {
                    required
                    },
                    entre_calles: {
                      required
                    },
                    notas:{
                      required
                    }
            }

        },
        computed: {
       
           
           ...mapGetters('municipios',['municipiosAll']),
           ...mapGetters('localidades',['localidadesAll']),
       
       },
        mounted(){
            this.fetchMunicipios(),
            this.fetchLocalidades()
        },
       methods: {
         ...mapActions({
          getMunicipios: 'municipios/fetchMunicipios'
        }),
        ...mapActions({
          getLocalidades: 'localidades/fetchLocalidades'
        }),
         cambioEstado: function ()
         {
             this.getMunicipios(this.idEstado.id).then(() => {
               console.log('los municipios se entregaron', '')
             })
         },
         cambioMunicipio1: function ()
         {
             this.getLocalidades(this.idMunicipio.id).then(() => {
               console.log(idMunicipio.id)
               console.log('las localidades se entregaron', '')
             })
         }
         
    }
  }
</script>
		
