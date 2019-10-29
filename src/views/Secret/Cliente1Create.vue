<template>
    
    <b-form @submit.prevent="addCliente" class="mb-5">

          <cliente-form 
          :cliente="cliente" 
          :idEstado="idEstado"
          :idMunicipio="idMunicipio"
          :estados="estadosAll" 
           ></cliente-form>
    


        <b-row>
            <b-col>
                <b-button
                    class="mt-3"
                    type="submit"
                    variant="primary"
                    block
                >
                    Enviar
                </b-button>
            </b-col>
            
        </b-row>

    </b-form>
</template>

<script>
    import {mapActions, mapGetters} from 'vuex'

   import ClienteForm from '@/components/ClienteForm'
   export default {
       components: {
           ClienteForm
       },
       data (){
           return {
               cliente: {
                nombre: '',
                apellido_p: '',
                apellido_m: '',
                telefono: '',
                celular: '',
                email: '',
                cp: '',
                direccion: '',
                entre_calles: '',
                localidades_id: '',
                notas: ''
               },
               idEstado: {
                   id: ''
               },
               idMunicipio: {
                   id: ''
               }
           }
       },
       mounted(){
            this.fetchEstados()
           
       },
       computed: {
           ...mapGetters('estados',['estadosAll']),
          
       },
       methods: {
           ...mapActions('estados', ['fetchEstados']),
           
           ...mapActions({
               createCliente: 'clientes/addCliente'
           }),
           addCliente (cliente) {
               this.createCliente(this.cliente).then(() => {
                   this.$router.push('/clientes')
               })
           },
           
               
           
       }
   }
</script>