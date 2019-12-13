<template>
  <v-card>
    <v-card-title primary>
      <v-icon left color="black" large>supervised_user_circle</v-icon>Contratos
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
      <template v-slot:item.status="{ item }">
        <v-chip :color="getColorStatus(item.status)" outlined>
          <v-icon>mdi-account</v-icon>
        </v-chip>
      </template>
      <template v-slot:top>
        <div class="flex-grow-1"></div>
        <v-dialog v-model="dialog" max-width="500px">
          <template v-slot:activator="{ on }">
            <v-fab-transition>
              <v-btn v-on="on" color="blue" dark absolute bottom right fab @click="resetValidacion">
                <v-icon>add</v-icon>
              </v-btn>
            </v-fab-transition>
          </template>

          <v-card>
            <v-card-title>
              <v-icon left color="black">person_add</v-icon>
              <span class="headline">Agregar Cliente</span>
            </v-card-title>

            <v-card-text>
              <v-form class="px-3" ref="formAdd">
                
                <v-menu
                  v-model="menu"
                  :close-on-content-click="false"
                  transition="scale-transition"
                  offset-y
                >
                  <template v-slot:activator="{ on }">
                    <v-text-field
                      v-model="editedItem.fecha_inicial"
                      label="Fecha inicio"
                      prepend-icon="event"
                      readonly
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-date-picker
                    v-model="editedItem.fecha_inicial"
                    @input="menu = false"
                    locale="es-mx"
                    no-title
                    scrollable
                  ></v-date-picker>
                </v-menu>
                <v-menu
                  v-model="menu2"
                  :close-on-content-click="false"
                  transition="scale-transition"
                  offset-y
                >
                  <template v-slot:activator="{ on }">
                    <v-text-field
                      v-model="editedItem.fecha_final"
                      label="Fecha terminacion"
                      prepend-icon="event"
                      readonly
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-date-picker
                    v-model="editedItem.fecha_final"
                    @input="menu2 = false"
                    locale="es-mx"
                    no-title
                    scrollable
                  ></v-date-picker>
                </v-menu>
                
                <v-text-field
                  v-model="editedItem.tiempo"
                  :rules="nameRules"
                  validate-on-blur
                  label="Tiempo"
                ></v-text-field>

                <v-text-field
                  v-model="editedItem.precio"
                  :rules="descripcionRules"
                  validate-on-blur
                  label="Precio"
                  prefix="$"
                ></v-text-field>
                
                <v-select
                  v-model="editedItem.servicios_id"
                  :items="serviciosAll"
                  item-text="nombre"
                  item-value="id"
                  label="Servicios"
                ></v-select>
                
                <v-select
                  v-model="editedItem.clientes_id"
                  :items="clientesAll"
                  item-text="nombre"
                  item-value="id"
                  label="Clientes"
                ></v-select>
                
                <v-textarea
                  v-model="editedItem.nota"
                  label="Nota"
                  counter
                  maxlength="120"
                  full-width
                  single-line
                ></v-textarea>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <div class="flex-grow-1"></div>

              <v-btn color="primary" @click="addC">Guardar</v-btn>
              <v-btn color="error" @click="close">Cancelar</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-dialog v-model="dialog2" persistent max-width="500px">
          <template v-slot:activator="{ on }"></template>

          <v-card>
            <v-card-title>
              <v-icon left color="black">person_add</v-icon>
              <span class="headline">Agregar Cliente</span>
            </v-card-title>

            <v-card-text>
              <v-form class="px-3" ref="formAdd">
                
                <v-menu
                  v-model="menu"
                  :close-on-content-click="false"
                  transition="scale-transition"
                  offset-y
                >
                  <template v-slot:activator="{ on }">
                    <v-text-field
                      v-model="editedItem.fecha_inicial"
                      label="Fecha inicio"
                      prepend-icon="event"
                      readonly
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-date-picker
                    v-model="editedItem.fecha_inicial"
                    @input="menu = false"
                    locale="es-mx"
                    no-title
                    scrollable
                  ></v-date-picker>
                </v-menu>
                <v-menu
                  v-model="menu2"
                  :close-on-content-click="false"
                  transition="scale-transition"
                  offset-y
                >
                  <template v-slot:activator="{ on }">
                    <v-text-field
                      v-model="editedItem.fecha_final"
                      label="Fecha terminacion"
                      prepend-icon="event"
                      readonly
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-date-picker
                    v-model="editedItem.fecha_final"
                    @input="menu2 = false"
                    locale="es-mx"
                    no-title
                    scrollable
                  ></v-date-picker>
                </v-menu>
                
                <v-text-field
                  v-model="editedItem.tiempo"
                  :rules="nameRules"
                  validate-on-blur
                  label="Tiempo"
                ></v-text-field>

                <v-text-field
                  v-model="editedItem.precio"
                  :rules="descripcionRules"
                  validate-on-blur
                  label="Precio"
                  prefix="$"
                ></v-text-field>
                
                <v-select
                  v-model="editedItem.servicios_id"
                  :items="serviciosAll"
                  item-text="nombre"
                  item-value="id"
                  label="Servicios"
                ></v-select>
                
                <v-select
                  v-model="editedItem.clientes_id"
                  :items="clientesAll"
                  item-text="nombre"
                  item-value="id"
                  label="Clientes"
                ></v-select>
                
                <v-textarea
                  v-model="editedItem.nota"
                  label="Nota"
                  counter
                  maxlength="120"
                  full-width
                  single-line
                ></v-textarea>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <div class="flex-grow-1"></div>

              <v-btn color="primary" @click="updateCon">Guardar</v-btn>
              <v-btn color="error" @click="close2">Cancelar</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </template>

      <template v-slot:item.action="{ item }">
        <v-icon small class="mr-2" @click="editItem(item)" color="blue">edit</v-icon>

        <v-icon small @click="removeContrato(item)" color="red">delete</v-icon>
      </template>
    </v-data-table>

    <v-card-text style="height: 15px; position: relative"></v-card-text>
  </v-card>
</template>
<script>
import ContratoItem from "./ContratoItem";
import { mapActions, mapGetters, mapState, mapMutations } from "vuex";
import Swal from "sweetalert2";
export default {
  components: {
    ContratoItem
  },
  props: {
    contratos: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      search: "",
      headers: [
        {
          text: "Fecha Inicial",
          align: "left",
          sortable: false,
          value: "fecha_inicial"
        },
        { text: "Fecha Final", value: "fecha_final" },
        { text: "Tiempo", value: "tiempo" },
        { text: "Precio", value: "precio" },
        { text: "Servicios", value: "servicio" },
        { text: "Cliente", value: "cliente" },
        { text: "Folio", value: "folio" },

        { text: "Empleado", value: "empleado" },
        { text: "Nota", value: "nota" },
        { text: "Acciones", value: "action", sortable: false }
      ],
      // calendario

      menu: false,

      menu2: false,
      // dialogo
      dialog: false,
      dialog2: false,
      // editar y guardar
      editedIndex: -1,
      editedItem: {
        clientes_id: "",
        fecha_final: "",
        fecha_inicial: new Date().toISOString().substr(0, 10),
        id_empleado1: 3,
        nota: "",
        precio: "",
        servicios_id: "",
        status: "",
        tiempo: ""
      },
      defaultItem: {
        clientes_id: "",
        fecha_final: "",
        fecha_inicial: new Date().toISOString().substr(0, 10),
        id_empleado1: 3,
        nota: "",
        precio: "",
        servicios_id: "",
        status: "",
        tiempo: ""
      },
      // validaciones para los fromularios
      nameRules: [
        v => !!v || "Requerido"
        // v => {
        //   const patron = /^([ \u00c0-\u01ffa-zA-Z'])+$/;
        //   return patron.test(v) || "Nombre inválido";
        // }
      ],
      descripcionRules: [
        v => !!v || "Requerido"
        // v => {
        //   const patron = /^([ \u00c0-\u01ffa-zA-Z'])+$/;
        //   return patron.test(v) || "Nombre inválido";
        // }
      ],
      cantidadRules: [
        v => !!v || "Requerido"
        // v => {
        //   const patron = /^([ \u00c0-\u01ffa-zA-Z'])+$/;
        //   return patron.test(v) || "Nombre inválido";
        // }
      ]
    };
  },
  mounted(){
     this.fetchClientes(),
     this.fetchSevircios()
  },
  methods: {
    // metodos para peticiones
    ...mapActions("contratos", [
      "addContrato",
      "updateContrato",
      "fetchContratos"
    ]),
    // clientes
     ...mapActions('clientes', ['fetchClientes']),
      ...mapActions('servicios', ['fetchSevircios']),
    addC(editedItem) {
      // if (this.$refs.formAdd.validate()) {

      this.addContrato(this.editedItem).then(respuesta => {
        if (!this.error) {
          Swal.fire({
            type: "success",
            title: "Contrato creado",
            showConfirmButton: true
            //timer: 1500
          });
          this.fetchContratos();
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
    updateCon() {
      // if (this.$refs.formEdit.validate()) {

      this.updateContrato(this.editedItem).then(() => {
        if (!this.error) {
          Swal.fire({
            type: "success",
            title: "Contrato Actualizado",
            showConfirmButton: true
          });
          this.fetchContratos();
        } else {
          Swal.fire({
            type: "error",
            title: "Oops...",
            text: this.errorMessage.mensaje
          });
        }
        this.close2();
      });
      // } else {
      //   this.validationError();
      // }
    },
    ...mapActions({
      _removeContrato: "contratos/removeContrato"
    }),
    ...mapMutations("contratos", ["setContrato"]),
    goToUpdateContrato(contrato) {
      this.setContrato(contrato);
      this.$router.push({
        name: "contratos-update",
        params: { id: contrato.id }
      });
    },
    removeContrato(contrato) {
      this._removeContrato(contrato.id);
    },
    // cerrar dialogos
    close() {
      this.dialog = false;
      setTimeout(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      }, 300);
    },
    close2() {
      this.dialog2 = false;
      this.disabled = true;
      setTimeout(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      }, 300);
    },
    // para editar
    editItem(item) {
      this.editedIndex = this.contratos.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog2 = true;
      console.log("editItem:  ", this.editedItem);
    },
    //validaciones reset
    resetValidacion() {
      try {
        this.$refs.formAdd.reset();
      } catch (error) {
        this.$refs.formAdd.reset();
      }
    },
    // cantidad de tiempo
    countMeses: function(evt) {
      
      console.log('fecha', this.editedItem.fecha_inicial)
    },
  },
  computed: {
    ...mapState("contratos", ["error", "errorMessage"]),
    // clientes
     ...mapGetters('clientes',['clientesAll']),
    //  servicios
    ...mapGetters('servicios',['serviciosAll'])
  }
};
</script>