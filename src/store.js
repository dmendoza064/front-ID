import Vue from 'vue'
import Vuex from 'vuex'
import auth from '@/modules/authentication'
import soportes from './modules/soportes'
import clientes from './modules/clientes'
import estados from './modules/estados'
import municipios from './modules/municipios'
import usuarios from './modules/usuarios'
import routers from './modules/routers'
import contratos from './modules/contratos'
import empleos from './modules/empleos'
import recargos from './modules/recargos'
import registros from './modules/registros'
import sucursales from './modules/sucursales'
import productos from './modules/productos'
import pagos from './modules/pagos'
import VuexPersistence from 'vuex-persist'
Vue.use(Vuex)

const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
  modules: ['auth']
})

export default new Vuex.Store({
  state: {
    loading: false
  },
  mutations: {
    setLoading (state, bool) {
      state.loading = bool
    }
  },
  modules: {
    auth,
    soportes,
    clientes,
    estados,
    municipios,
    usuarios,
    routers,
    contratos,
    empleos,
    recargos,
    registros,
    sucursales,
    productos,
    pagos
  },
  plugins: [vuexLocal.plugin]
})
