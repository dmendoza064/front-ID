import Vue from 'vue'

export async function fetchUsuarios ({commit}) {
  try {
    const {data} = await Vue.axios({
      url: '/usuarios/v0'
    })
    commit('setUsuarios', data)
  } catch (e) {
    commit('UsuariosError', e.message)
  } finally {
    console.log('La petición para obtener los usuarios ha finalizado')
  }
}

export async function addUsuario ({commit}, usuario) {
  try {
    await Vue.axios({
      method: 'POST',
      url: '/usuarios/v0',
      data: {
        id: Date.now(),
        nombre: usuario.nombre,
        apellidos: usuario.apellidos,
        email: usuario.email,
        password: usuario.password,
        tipo: usuario.tipo
      }
    })
  } catch (e) {
    commit('UsuariosError', e.message)
    console.log('UsuariosError',e.message)
  } finally {
    console.log('La petición para crear usuarios ha finalizado')
  }
}

export async function updateusuario ({commit}, usuario) {
  try {
    await Vue.axios({
      method: 'PUT',
      url: `/usuarios/v0/${usuario.id}`,
      data: {
        id: usuario.id,
        nombre: usuario.nombre,
        apellidos: usuario.apellidos,
        email: usuario.email,
        password: usuario.password,
        tipo: usuario.tipo
      }
    })
  } catch (e) {
    commit('UsuariosError', e.message)
    console.log('UsuariosError',e.message)
  } finally {
    console.log('La petición para actualizar usuarios ha finalizado')
  }
}

export async function removeUsuario ({commit, dispatch}, id) {
  try {
    await Vue.axios({
      method: 'DELETE',
      url: `/usuarios/v0/${id}`,
    })
    dispatch('fetchUsuarios')
  } catch (e) {
    commit('UsuariosError', e.message)
    console.log('UsuariosError',e.message)
  } finally {
    console.log('La petición para eliminar un usuario ha finalizado')
  }
}