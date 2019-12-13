<template>
  <v-card>
    <v-card-title primary>
      <v-icon left color="black" large>supervised_user_circle</v-icon>Usuarios
      <div class="flex-grow-1"></div>
      <v-text-field v-model="search" append-icon="search" label="Buscar" single-line hide-details></v-text-field>
    </v-card-title>

    <v-data-table
      :headers="headers"
      :items="usuarios"
      :search="search"
      :items-per-page="5"
      no-data-text="No se pudieron encontrar Usuarios"
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
                  v-model="userItem.nombre"
                  :rules="nameRules"
                  validate-on-blur
                  label="Nombre"
                ></v-text-field>

                <v-text-field
                  v-model="userItem.apellidos"
                  :rules="descripcionRules"
                  validate-on-blur
                  label="apellidos"
                ></v-text-field>

                <v-text-field
                  v-model="userItem.email"
                  :rules="cantidadRules"
                  validate-on-blur
                  label="Correro"
                ></v-text-field>
                <v-text-field
                  v-model="userItem.password"
                  :rules="cantidadRules"
                  validate-on-blur
                  label="Contraseña"
                ></v-text-field>
                <v-text-field
                  v-model="userItem.tipo"
                  :rules="cantidadRules"
                  validate-on-blur
                  label="Tipo"
                ></v-text-field>
                
              </v-form>
            </v-card-text>
            <v-card-actions>
              <div class="flex-grow-1"></div>

              <v-btn color="primary" @click="addUser">Guardar</v-btn>
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
              <v-form class="px-3" ref="formAdd">
                <v-text-field
                  v-model="userItem.nombre"
                  :rules="nameRules"
                  validate-on-blur
                  label="Nombre"
                ></v-text-field>

                <v-text-field
                  v-model="userItem.apellidos"
                  :rules="descripcionRules"
                  validate-on-blur
                  label="apellidos"
                ></v-text-field>

                <v-text-field
                  v-model="userItem.email"
                  :rules="cantidadRules"
                  validate-on-blur
                  label="Correro"
                ></v-text-field>
                <v-text-field
                  v-model="userItem.password"
                  :rules="cantidadRules"
                  validate-on-blur
                  label="Contraseña"
                ></v-text-field>
                <v-text-field
                  v-model="userItem.tipo"
                  :rules="cantidadRules"
                  validate-on-blur
                  label="Tipo"
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
      <template v-slot:item.status="{ item }">
        <v-chip :color="getColorStatus(item.status)" outlined>
          <v-icon>mdi-account</v-icon>
        </v-chip>
      </template>

      <template v-slot:item.action="{ item }">
        <v-icon small class="mr-2" @click="editItem(item)" color="blue">edit</v-icon>

        <v-icon small @click="removeUsuario(item)" color="red">delete</v-icon>
      </template>
    </v-data-table>

    <v-card-text style="height: 15px; position: relative"></v-card-text>
  </v-card>
</template>
<script>
import UsuarioItem from "./UsuarioItem";
import Swal from "sweetalert2";
import { mapMutations, mapActions, mapState} from "vuex";
export default {
  components: {
    UsuarioItem
  },
  props: {
    usuarios: {
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
        { text: "Apellidos", value: "apellidos" },
        { text: "Correo", value: "email" },
        { text: "Tipo", value: "tipo" },
        { text: "Estatus", value: "status" },
        { text: "Acciones", value: "action", sortable: false }
      ],
      userItem: {
        apellidos: "",
        email: "",
        id: '',
        nombre: "",
        password: "",
        status: '',
        tipo: ""
      },
      dialog: false,
      dialog2: false,
      defaultItem: {
        apellidos: "",
        email: "",
        id: '',
        nombre: "",
        password: "",
        status: '',
        tipo: ""
      },
      editedIndex: -1,
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

    // ...mapGetters("usuarios", ["productossAll"]),
    ...mapState("usuarios", ["error", "errorMessage"])
  },
  methods: {
    ...mapActions({
      _removeUsuario: "usuarios/removeUsuario"
    }),
    ...mapActions("usuarios", ["addUser","updateusuario", "fetchUsuarios"]),
    addUser() {
      if (this.$refs.formAdd.validate()) {
        this.addUser(this.userItem).then(respuesta => {
          this.disabled = true;
          console.log("bariable error:", this.error);
          if (!this.error) {
            Swal.fire({
              type: "success",
              title: "Producto registrado",
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
      } else {
        this.validationError();
      }
    },
    updateUsuario() {
      if (this.$refs.formEdit.validate()) {
        
        this.updateusuario(this.userItem).then(() => {
          if (!this.error) {
            Swal.fire({
              type: "success",
              title: "Producto Actualizado",
              showConfirmButton: true
            });
            this.fetchUsuarios();
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
    removeUsuario(item) {
      this._removeUsuario(item.id);
    },
    getColorStatus(idStatusUser) {
      if (idStatusUser == 1) return "green";
      else return "grey";
    },
    //
    close() {
      this.dialog = false;
      setTimeout(() => {
        this.userItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      }, 300);
    },
    close2() {
      this.dialog2 = false;
      this.disabled = true;
      setTimeout(() => {
        this.userItem = Object.assign({}, this.defaultItem);
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
      this.editedIndex = this.usuarios.indexOf(item);
      this.userItem = Object.assign({}, item);
      this.dialog2 = true;
    }
  }
};
</script>