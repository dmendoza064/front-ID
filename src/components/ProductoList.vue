<template>
  <v-card>
    <v-card-title primary>
      <v-icon left color="black" large>supervised_user_circle</v-icon>Productos
      <div class="flex-grow-1"></div>
      <v-text-field v-model="search" append-icon="search" label="Buscar" single-line hide-details></v-text-field>
    </v-card-title>

    <v-data-table
      :headers="headers"
      :items="productos"
      :search="search"
      :items-per-page="5"
      no-data-text="No se pudieron encontrar Productos"
      no-results-text="No hay coincidencias"
    >
      <template v-slot:top>
        <div class="flex-grow-1"></div>
        <v-dialog v-model="dialog" max-width="1000px">
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
              <span class="headline">Agregar</span>
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
                  v-model="editedItem.descripcion"
                  :rules="descripcionRules"
                  validate-on-blur
                  label="Descripcion"
                ></v-text-field>

                <v-text-field
                  v-model="editedItem.cantidad"
                  :rules="cantidadRules"
                  validate-on-blur
                  label="Cantidad"
                ></v-text-field>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <div class="flex-grow-1"></div>

              <v-btn color="primary" @click="addProducto">Guardar</v-btn>
              <v-btn color="error" @click="close">Cancelar</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-dialog v-model="dialog2" persistent max-width="1000px">
          <template v-slot:activator="{ on }"></template>

          <v-card>
            <v-card-title>
              <v-icon left color="black">edit</v-icon>
              <span class="headline">Editar</span>
            </v-card-title>

            <v-card-text>
              <v-form class="px-3" ref="formEdit">
                <v-row>
                  <v-col>
                    <v-text-field
                      v-model="editedItem.nombre"
                      :rules="nameRules"
                      validate-on-blur
                      label="Nombre"
                    ></v-text-field>

                    <v-text-field
                      v-model="editedItem.descripcion"
                      :rules="descripcionRules"
                      validate-on-blur
                      label="Descripcion"
                    ></v-text-field>

                    <v-text-field
                      v-model="editedItem.cantidad"
                      :rules="cantidadRules"
                      validate-on-blur
                      label="Cantidad"
                    ></v-text-field>
                  </v-col>
                </v-row>
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

        <!-- <v-icon small @click="removeRecargo(item)" color="red">delete</v-icon> -->
      </template>
    </v-data-table>

    <v-card-text style="height: 15px; position: relative"></v-card-text>
  </v-card>
</template>
<script>
import { mapActions, mapGetters, mapState } from "vuex";
import Swal from "sweetalert2";
export default {
  props: {
    productos: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      search: "",
      dialog: false,
      dialog2: false,
      headers: [
        {
          text: "Nombre",
          align: "left",
          sortable: false,
          value: "nombre"
        },
        { text: "Descripcion", value: "descripcion" },
        { text: "Cantidad", value: "cantidad" },
        { text: "Acciones", value: "action", sortable: false }
      ],
      editedIndex: -1,
      editedItem: {
        nombre: "",
        descripcion: "",
        cantidad: ""
      },
      defaultItem: {
        nombre: "",
        descripcion: "",
        cantidad: ""
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
  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "Nuevo Usuario" : "Editar Usuario";
    },

    ...mapGetters("productos", ["productossAll"]),
    ...mapState("productos", ["error", "errorMessage"])
  },
  methods: {
    ...mapActions("productos", ["fetchProductos"]),
    ...mapActions({
      createProducto: "productos/addProducto"
    }),

    addProducto(editedItem) {
      if (this.$refs.formAdd.validate()) {
        this.createProducto(this.editedItem).then(respuesta => {
          this.disabled = true;
          console.log("bariable error:", this.error);
          if (!this.error) {
            Swal.fire({
              type: "success",
              title: "Producto registrado",
              showConfirmButton: true
              //timer: 1500
            });
            this.fetchProductos();
          } else {
            Swal.fire({
              type: "error",
              title: "Oops...",
              text: this.errorMessage.mensaje
            });
          }

          this.close();
        });
      } else {
        this.validationError();
      }
    },

    ...mapActions({
      _updateProducto: "productos/updateProducto"
    }),

    updateUsuario() {
      if (this.$refs.formEdit.validate()) {
        //console.log('esta activo', this.disabled)
        if (this.disabled) {
          this.editedItem.editIndicador = 0;
        } else {
          this.editedItem.editIndicador = 1;
        }
        this._updateProducto(this.editedItem).then(() => {
          if (!this.error) {
            Swal.fire({
              type: "success",
              title: "Producto Actualizado",
              showConfirmButton: true
            });
            this.fetchProductos();
          } else {
            Swal.fire({
              type: "error",
              title: "Oops...",
              text: this.errorMessage.mensaje
            });
          }
          this.close2();
        });
      } else {
        this.validationError();
      }
    },
    //
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
    //
    resetValidacion() {
      try {
        this.$refs.formAdd.reset();
      } catch (error) {
        this.$refs.formAdd.reset();
      }
    },
    validationError() {
      Swal.fire({
        type: "warning",
        title: "Atención!",
        text: "Todos los campos requeridos deben ser válidos"
      });
    },
    editItem(item) {
      this.editedIndex = this.productos.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog2 = true;
    }
  }
};
</script>