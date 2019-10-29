import Vue from 'vue'


export async function fetchRecargos({commit}){
    try{
        const {data} = await Vue.axios({
            url: '/recargo/v0'
        })
        commit('setRecargos',data)
    }catch(e){
        commit('recargoError',e.message)
        console.log('recargoError',e.message)
    }finally{
        console.log('la peticion para obtener  los soportes a finalizado')
    }

}

export async function addRecargo({commit}, recargo){
    try{
         await Vue.axios({
            method: 'POST',
            url: '/recargo/v0',
            data:{
                
                descripcion: recargo.descripcion,
                tipo: recargo.tipo,
                cantidad: recargo.cantidad
            }
        })
        
    }catch(e){
        commit('recargoError',e.message)
        console.log('recargoError',e.message)
    }finally{
        console.log('la peticion para crear  un recargo a finalizado')
    }

}

export async function updateRecargo({commit}, recargo){
    try{
         await Vue.axios({
            method: 'PUT',
            url: `/recargo/v0`,
            data:{
                id: recargo.id,
                descripcion: recargo.descripcion,
                tipo: recargo.tipo,
                cantidad: recargo.cantidad
            }
        })
        
    }catch(e){
        commit('recargoError',e.message)
        console.log('recargoError',e.message)
    }finally{
        console.log('la peticion para actualizar  un recargo a finalizado')
    }

}

export async function removeRecargo({commit, dispatch}, id){
    try{
         await Vue.axios({
            method: 'DELETE',
            url: `/recargo/v0/${id}`
        })
        dispatch('fetchRecargos')
    }catch(e){
        commit('recargoError',e.message)
        console.log('recargoError',e.message)
    }finally{
        console.log('la peticion para eliminar un recargo a finalizado')
    }

}