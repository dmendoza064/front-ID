<template>
  <v-card>
    <v-card-title primary>
      <v-icon left color="black" large>supervised_user_circle</v-icon>Registro
      <div class="flex-grow-1"></div>
      <v-text-field v-model="search" append-icon="search" label="Buscar" single-line hide-details></v-text-field>
    </v-card-title>

    <v-data-table
      :headers="headers"
      :items="registros"
      :search="search"
      :items-per-page="5"
      no-data-text="No se pudieron encontrar Registros"
      no-results-text="No hay coincidencias"
    >
      <template v-slot:item.action="{ item }">
        <v-icon small class="mr-2" @click="goToUpdateRegistro(item)" color="blue">edit</v-icon>

        <v-icon small @click="removeRecargo(item)" color="red">delete</v-icon>
      </template>
    </v-data-table>

    <v-card-text style="height: 15px; position: relative"></v-card-text>
  </v-card>
</template>
<script>
import RegistroItem from "./RegistroItem";
import { mapMutations, mapActions } from "vuex";
export default {
  components: {
    RegistroItem
  },
  props: {
    registros: {
      type: Array,
      required: true
    }
  },

  data() {
    return {
      search: "",
      headers: [
        {
          text: "tipo sucursal",
          align: "left",
          sortable: false,
          value: "tipo_sucursal"
        },
        { text: "Persona Cargo", value: "persona_cargo" },
        // { text: "Cantidad", value: "cantidad" },
        { text: "Acciones", value: "action", sortable: false }
      ]
    };
  },
  methods: {
    ...mapActions({
      _removeRegistro: "registros/removeRegistro"
    }),
    ...mapMutations("registros", ["setRegistro"]),
    goToUpdateRegistro(item) {
      this.setRecargo(item);
      this.$router.push({
        name: "recargos-update",
        params: { id: item.id }
      });
    },
    removeRecargo(item) {
      this._removeRecargo(item.id);
    }
  }
};
</script>
