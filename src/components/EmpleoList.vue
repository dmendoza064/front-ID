<template>
    <v-card>
    <v-card-title primary>
      <v-icon left color="black" large>supervised_user_circle</v-icon>Empleos
      <div class="flex-grow-1"></div>
      <v-text-field v-model="search" append-icon="search" label="Buscar" single-line hide-details></v-text-field>
    </v-card-title>

    <v-data-table
      :headers="headers"
      :items="empleos"
      :search="search"
      :items-per-page="5"
      no-data-text="No se pudieron encontrar Empleos"
      no-results-text="No hay coincidencias"
    >
      <template v-slot:item.action="{ item }">
        <v-icon small class="mr-2" @click="goToUpdateEmpleo(item)" color="blue">edit</v-icon>

        <v-icon small @click="removeEmpleo(item)" color="red">delete</v-icon>
      </template>
    </v-data-table>

    <v-card-text style="height: 15px; position: relative"></v-card-text>
  </v-card>
</template>
<script>
import EmpleoItem from './EmpleoItem'
import { mapMutations, mapActions } from "vuex";
export default {
    components: {
        EmpleoItem
    },
    props: {
        empleos: {
            type: Array,
            required: true
        }
    },
    data() {
    return {
      search: "",
      headers: [
        {
          text: "Empleo",
          align: "left",
          sortable: false,
          value: "empleo"
        },
        // { text: "direccion", value: "direccion" },
        // { text: "Cantidad", value: "cantidad" },
        { text: "Acciones", value: "action", sortable: false }
      ]
    };
  },
  methods: {
    ...mapActions({
            _removeEmpleo: 'empleos/removeEmpleo'

        }),
        ...mapMutations('empleos',['setEmpleo']),
        goToUpdateEmpleo(empleo){
            this.setEmpleo(empleo)
            this.$router.push({
                name: 'empleos-update',
                params: {id: empleo.id}
            })
        },
        removeEmpleo (empleo) {
            this._removeEmpleo(empleo.id)
        }
  }
}
</script>