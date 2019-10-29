import Vue from 'vue'


export async function fetchProductos({commit}){
    try{
        const {data} = await Vue.axios({
            url: '/productos/v0'
        })
        commit('setProductos',data)
    }catch(e){
        commit('ProductoError',e.message)
        console.log('ProductoError',e.message)
    }finally{
        console.log('la peticion para obtener  los productos a finalizado')
    }

}

export async function addProducto({commit}, producto){
    try{
        // console.log('/POST cliente', cliente)
         await Vue.axios({
            method: 'POST',
            url: 'productos/v0',
            data:{
                
                nombre: producto.nombre,
                descripcion: producto.descripcion,
                cantidad: producto.cantidad
            }
        })
        
    }catch(e){
        commit('ProductoError',e.message)
        console.log('ProductoError',e.message)
    }finally{
        console.log('la peticion para crear  los productos a finalizado')
    }

}

export async function updateProducto({commit}, producto){
    try{
         await Vue.axios({
            method: 'PUT',
            url: `/productos/v0`,
            data:{
                id: producto.id,
                nombre: producto.nombre,
                descripcion: producto.descripcion,
                cantidad: producto.cantidad
            }
        })
        
    }catch(e){
        commit('ProductoError',e.message)
        console.log('ProductoError',e.message)
    }finally{
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