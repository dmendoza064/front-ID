import Vue from 'vue'


export async function fetchProductos({ commit }) {
    try {
        const { data } = await Vue.axios({
            url: '/pagosclientes/v0'
        })
        commit('setPagos', data)
    } catch (e) {
        commit('PagoError', e.message)
        console.log('PagoError', e.message)
    } finally {
        console.log('la peticion para obtener  los pagos a finalizado')
    }

}

export async function addProducto({ commit }, pago) {
    console.log('para pagos:', pago)
    try {
        // console.log('/POST cliente', cliente)
        await Vue.axios({
            method: 'POST',
            url: '/pagosclientes/v0',
            data: {

                clientes_id: pago.clientes_id,
                contrato_id: pago.contrato_id,
                descripcion: pago.descripcion,
                folio: pago.folio,
                recargos_id: 1,
                sucursales_id: 1,
                total: pago.total
            }
        })

    } catch (e) {
        commit('PagoError', e.message)
        console.log('PagoError', e.message)
    } finally {
        console.log('la peticion para crear  el pago a finalizado')
    }

}

export async function updateProducto({ commit }, producto) {
    try {
        await Vue.axios({
            method: 'PUT',
            url: `/productos/v0`,
            data: {
                id: producto.id,
                nombre: producto.nombre,
                descripcion: producto.descripcion,
                cantidad: producto.cantidad
            }
        })

    } catch (e) {
        commit('ProductoError', e.message)
        console.log('ProductoError', e.message)
    } finally {
        console.log('la peticion para actualizar  los Productos a finalizado')
    }

}
// export async function removeCliente({commit, dispatch}, id){
//     try{
//          await Vue.axios({
//             method: 'DELETE',
//             url: `/consumers/v0/${id}`
//         })
//         dispatch('fetchClientes')
//     }catch(e){
//         commit('clieteError',e.message)
//         console.log('clienteError',e.message)
//     }finally{
//         console.log('la peticion para eliminar  los soportes a finalizado')
//     }

// }