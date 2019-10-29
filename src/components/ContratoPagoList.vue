<template>
  <v-card>
    mes {{dato}}
    <!-- {{contratos}} -->
    <v-text-field v-model="contratos.fecha_inicial"></v-text-field>

    <!-- {{contrato}} -->
    <!-- <v-btn @click="fecha"></v-btn> -->
    <!-- {{dato}} -->
    <v-card-title primary>
      <v-icon left color="black" large>supervised_user_circle</v-icon>Pagos
      <div class="flex-grow-1"></div>
      <v-text-field v-model="search" append-icon="search" label="Buscar" single-line hide-details></v-text-field>
    </v-card-title>

    <v-data-table
      :headers="headers"
      :items="contratos"
      :search="search"
      :items-per-page="5"
      no-data-text="No se pudieron encontrar Contratos"
      no-results-text="No hay coincidencias"
    >
      <template v-slot:item.action="{ item }">
        <v-dialog v-model="dialog" persistent max-width="600px">
          
          <v-card>
            <v-card-title>
              Pago Cliente: 
            </v-card-title>
            <v-card-text>
              <h2><span class="headline"> {{editedItem.cliente}}</span></h2>
              Fecha Pago: <span> {{editedItem.fechaPago}}</span> <br>
              Dias que debe: <span> {{editedItem.diasAtrasados}}</span> <br>
              Servicio: <span> {{editedItem.servicio}}</span> <br>
              Pago por mes: <span> {{editedItem.precio}}</span> <br>
              <v-container>
                <v-row>
                  
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      label="Recargo"
                      v-model="editedItem.recargos"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      label="Folio"
                      v-model="editedItem.folio"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      label="Descripcion"
                      v-model="editedItem.descripcion"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <H3>Total: {{ (editedItem.precio *1) +(editedItem.recargos * 1)  }}</H3>
                  </v-col>
                  
                </v-row>
              </v-container>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
              <v-btn color="blue darken-1" text @click="addPago">Save</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <!-- </v-row> -->
        <v-icon class="mr-2" color="blue" dark @click="editItem(item)" small>call_to_action</v-icon>
        <v-icon small @click="removeContrato(item)" color="red">delete</v-icon>
      </template>
    </v-data-table>

    <v-card-text style="height: 15px; position: relative"></v-card-text>
  </v-card>
  <!-- <div v-if="contratos.length">
        <contrato-item 
            v-for="contrato in contratos"
            :key=" contrato.id"
            :contrato="contrato"
            ></contrato-item>
  </div>-->
  <!-- <b-alert show variant="info" v-else><center> No hay Lista de pagos</center></b-alert> -->
</template>

<script>
import ContratoItem from "./ContratoPagoItem";
import { mapActions, mapGetters, mapState, mapMutations } from "vuex";
import Swal from "sweetalert2";
export default {
  components: {
    ContratoItem
  },
  props: {
    contratos: {
      type: Object,
      required: true
    }

    // contrato:{
    //     type: Object,
    //     required: true
    // }
  },
  data() {
    return {
      dato: new Date().toISOString().substr(5, 2),
      dialog: false,
      search: "",
      headers: [
        // {
        //   text: 'Fecha Inicial',
        //   align: 'left',
        //   sortable: false,
        //   value: 'fecha_inicial',
        // },
        { text: "Fecha Pago", value: "fechaPago" },
        { text: "Fecha Final", value: "fecha_final" },
        { text: "Dias atrasados", value: "diasAtrasados" },
        // { text: 'Dias a nuevo pago', value: 'fechaPago' },
        { text: "Tiempo", value: "tiempo" },
        { text: "Precio", value: "precio" },
        { text: "Servicios", value: "servicio" },
        { text: "Cliente", value: "cliente" },
        { text: "Folio", value: "folio" },

        { text: "Empleado", value: "empleado" },
        { text: "Nota", value: "nota" },
        { text: "Acciones", value: "action", sortable: false }
      ],
      editedIndex: -1,
      editedItem: {
        fecha_inicial: "",
        fechaPago: "",
        fecha_final: "",
        tiempo: "",
        precio: "",
        pago_mensual: "",
        diasAtrasados: "",
        diasFaltantes: "",
        servicio: "",
        cliente: "",
        folio: "",
        nota: "",
        empleado: "",
        clientes_id: "",
        contrato_id: "",
        recargo: 0,
        descripcion: "",
        total: 0
      }
    };
  },
  methods: {
    fecha() {
      const mes = this.dato++;
      // const mes = this.dato;
      mes++;
      console.log(mes);
    },
    ...mapActions({
      _removeContrato: "contratos/removeContrato"
    }),
    ...mapMutations("contratos", ["setContrato"]),
    goToUpdateContrato(contrato) {
      this.setContrato(contrato);
      this.$router.push({
        name: "clientespagosupdate",
        params: { id: contrato.id } //se toma el folio como id para registrar el pago del cliente
      });
    },
    removeContrato(contrato) {
      this._removeContrato(contrato.id);
    },
    editItem(item) {
      this.editedIndex = this.contratos.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },
    ...mapActions({
      createPago: "pagos/addProducto"
    }),

    addPago(editedItem) {
      // if (this.$refs.formAdd.validate()) {
        this.editedItem.total = ((this.editedItem.precio * 1) + (this.editedItem.recargos * 1))
        console.log('total: ', this.editedItem.tota)
        this.createPago(this.editedItem).then(respuesta => {
          
          if (!this.status) {
            Swal.fire({
              type: "success",
              title: "Pago registrado",
              showConfirmButton: true
              //timer: 1500
            });
            this.fetchUsuarios();
          } else {
            Swal.fire({
              type: "error",
              title: "Oops...",
              text: this.errorMessage.mensaje
            });
          }

          this.close();
        });
      // } else {
      //   this.validationError();
      // }
    },
    close() {
      this.dialog = false;
      setTimeout(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      }, 300);
    }

  },
  computed: {
    ...mapState("pagos", ["status", "errorMessage"]),
  },


};

</script>