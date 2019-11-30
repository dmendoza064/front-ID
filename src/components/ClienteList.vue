<template>
  <v-card>
    <v-card-title primary>
      <v-icon left color="black" large>supervised_user_circle</v-icon>Clientes
      <div class="flex-grow-1"></div>
      <v-text-field v-model="search" append-icon="search" label="Buscar" single-line hide-details></v-text-field>
    </v-card-title>

    <v-data-table
      :headers="headers"
      :items="clientes"
      :search="search"
      :items-per-page="5"
      no-data-text="No se pudieron encontrar Clientes"
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
                <v-text-field
                  v-model="editedItem.nombre"
                  :rules="nameRules"
                  validate-on-blur
                  label="Nombre"
                ></v-text-field>
                <v-text-field
                  v-model="editedItem.apellido_p"
                  :rules="nameRules"
                  validate-on-blur
                  label="Apellido Paterno"
                ></v-text-field>
                <v-text-field
                  v-model="editedItem.apellido_m"
                  :rules="nameRules"
                  validate-on-blur
                  label="Apellido Materno"
                ></v-text-field>

                <v-text-field
                  v-model="editedItem.telefono"
                  :rules="descripcionRules"
                  validate-on-blur
                  label="Telefono"
                ></v-text-field>
                <v-text-field
                  v-model="editedItem.celular"
                  :rules="descripcionRules"
                  validate-on-blur
                  label="Celular"
                ></v-text-field>
                <v-text-field
                  v-model="editedItem.email"
                  :rules="descripcionRules"
                  validate-on-blur
                  label="Correo"
                ></v-text-field>
                <v-text-field
                  v-model="editedItem.cp"
                  :rules="descripcionRules"
                  validate-on-blur
                  label="Codigo Postal"
                ></v-text-field>
                <v-text-field
                  v-model="editedItem.direccion"
                  :rules="descripcionRules"
                  validate-on-blur
                  label="Direccion"
                ></v-text-field>
                <v-text-field
                  v-model="editedItem.entre_calles"
                  :rules="descripcionRules"
                  validate-on-blur
                  label="Entre Calles"
                ></v-text-field>
                <v-text-field
                  v-model="editedItem.localidad"
                  :rules="descripcionRules"
                  validate-on-blur
                  label="Localidad"
                ></v-text-field>
                <v-text-field
                  v-model="editedItem.notas"
                  :rules="descripcionRules"
                  validate-on-blur
                  label="Notas"
                ></v-text-field>

                <v-text-field
                  v-model="editedItem.folio"
                  :rules="descripcionRules"
                  validate-on-blur
                  label="folio"
                ></v-text-field>
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
                <v-text-field
                  v-model="editedItem.nombre"
                  :rules="nameRules"
                  validate-on-blur
                  label="Nombre"
                ></v-text-field>
                <v-text-field
                  v-model="editedItem.apellido_p"
                  :rules="nameRules"
                  validate-on-blur
                  label="Apellido Paterno"
                ></v-text-field>
                <v-text-field
                  v-model="editedItem.apellido_m"
                  :rules="nameRules"
                  validate-on-blur
                  label="Apellido Materno"
                ></v-text-field>

                <v-text-field
                  v-model="editedItem.telefono"
                  :rules="descripcionRules"
                  validate-on-blur
                  label="Telefono"
                ></v-text-field>
                <v-text-field
                  v-model="editedItem.celular"
                  :rules="descripcionRules"
                  validate-on-blur
                  label="Celular"
                ></v-text-field>
                <v-text-field
                  v-model="editedItem.email"
                  :rules="descripcionRules"
                  validate-on-blur
                  label="Correo"
                ></v-text-field>
                <v-text-field
                  v-model="editedItem.cp"
                  :rules="descripcionRules"
                  validate-on-blur
                  label="Codigo Postal"
                ></v-text-field>
                <v-text-field
                  v-model="editedItem.direccion"
                  :rules="descripcionRules"
                  validate-on-blur
                  label="Direccion"
                ></v-text-field>
                <v-text-field
                  v-model="editedItem.entre_calles"
                  :rules="descripcionRules"
                  validate-on-blur
                  label="Entre Calles"
                ></v-text-field>
                <v-text-field
                  v-model="editedItem.localidad"
                  :rules="descripcionRules"
                  validate-on-blur
                  label="Localidad"
                ></v-text-field>
                <v-text-field
                  v-model="editedItem.notas"
                  :rules="descripcionRules"
                  validate-on-blur
                  label="Notas"
                ></v-text-field>

                <v-text-field
                  v-model="editedItem.folio"
                  :rules="descripcionRules"
                  validate-on-blur
                  label="folio"
                ></v-text-field>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <div class="flex-grow-1"></div>

              <v-btn color="primary" @click="updateUsuario">Guardar</v-btn>
              <v-btn color="error" @click="close2">Cancelar</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </template>

      <template v-slot:item.action="{ item }">
        <v-icon small class="mr-2" @click="editItem(item)" color="blue">edit</v-icon>

        <v-icon small @click="removeCliente(item)" color="red">delete</v-icon>
      </template>
    </v-data-table>

    <v-card-text style="height: 15px; position: relative"></v-card-text>
  </v-card>
</template>
<script>
import ClienteItem from "./ClienteItem";
import { mapActions, mapGetters, mapState, mapMutations } from "vuex";
import Swal from "sweetalert2";
export default {
  components: {
    ClienteItem
  },
  props: {
    clientes: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      search: "",
      headers: [
        {
          text: "Nombre",
          align: "left",
          sortable: false,
          value: "nombre"
        },
        { text: "Apellidos", value: "apellido_m" },
        { text: "Correo", value: "email" },
        { text: "Direccion", value: "direccion" },
        { text: "Celular", value: "celular" },
        { text: "Status", value: "status" },
        { text: "Acciones", value: "action", sortable: false }
      ],
      // dialogo
      dialog: false,
      dialog2: false,
      // editar y guardar
      editedIndex: -1,
      editedItem: {
        apellido_m: "",
        apellido_p: "",
        celular: "",
        cp: "",
        direccion: "",
        email: "",
        entre_calles: "",
        folio: "",
        id_empleado: 3,
        localidades_id: '',
        nombre: "",
        notas: "",
        telefono: ""
      },
      defaultItem: {
        apellido_m: "",
        apellido_p: "",
        celular: "",
        cp: "",
        direccion: "",
        email: "",
        entre_calles: "",
        folio: "",
        id_empleado: 3,
        localidades_id: '',
        nombre: "",
        notas: "",
        telefono: ""
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

  methods: {
    // metodos para peticiones 
    ...mapActions("clientes", ["addCliente", "updateCliente", "fetchClientes"]),
    addC(editedItem) {
      // if (this.$refs.formAdd.validate()) {
        
        this.addCliente(this.editedItem).then(respuesta => {
          
          if (!this.error) {
            Swal.fire({
              type: "success",
              title: "Cliente",
              showConfirmButton: true
              //timer: 1500
            });
            this.fetchClientes();
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
    updateUsuario() {
      // if (this.$refs.formEdit.validate()) {
        
        
        this.updateCliente(this.editedItem).then(() => {
          if (!this.error) {
            Swal.fire({
              type: "success",
              title: "Cliente Actualizado",
              showConfirmButton: true
            });
            this.fetchClientes();
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
      _removeCliente: "clientes/removeCliente"
    }),
    ...mapMutations("clientes", ["setCliente"]),
    goToUpdateCliente(cliente) {
      this.setCliente(cliente);
      this.$router.push({
        name: "clientes-update",
        params: { id: cliente.id }
      });
    },
    removeCliente(cliente) {
      this._removeCliente(cliente.id);
      console.log("probar el id de la celda", cliente.id);
    },
    getColorStatus(idStatusUser) {
      if (idStatusUser == 1) return "green";
      else return "grey";
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
      this.editedIndex = this.clientes.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog2 = true;
      console.log('editItem:  ', this.editedItem);
    },
    //validaciones reset
    resetValidacion() {
      try {
        this.$refs.formAdd.reset();
      } catch (error) {
        this.$refs.formAdd.reset();
      }
    },
  },
  computed: {
    ...mapState("clientes", ["error", "errorMessage"]),
  },
};
</script>
