import Vue from 'vue'


export async function fetchSucurales({commit}){
    try{
        const {data} = await Vue.axios({
            url: '/sucursal/v0'
        })
        commit('setSucursales',data)
    }catch(e){
        commit('sucursalError',e.message)
        console.log('sucursalError',e.message)
    }finally{
        console.log('la peticion para obtener  las sucursales a finalizado')
    }

}

export async function addSucursal({commit}, sucursal){
    try{
         await Vue.axios({
            method: 'POST',
            url: '/sucursal/v0',
            data:{
                
                tipo_sucursal: sucursal.tipo_sucursal,
                id_localidad: sucursal.id_localidad,
                id_empleado: sucursal.id_empleado,
                persona_cargo: sucursal.persona_cargo
            }
        })
        
    }catch(e){
        commit('sucursalError',e.message)
        console.log('sucursalError',e.message)
    }finally{
        console.log('la peticion para crear  la sucursal a finalizado')
    }

}

export async function updateSucursal({commit}, sucursal){
    try{
         await Vue.axios({
            method: 'PUT',
            url: `/sucursal/v0`,
            data:{
                id: sucursal.id,
                tipo_sucursal: sucursal.tipo_sucursal,
                id_localidad: sucursal.id_localidad,
                id_empleado: sucursal.id_empleado,
                persona_cargo: sucursal.persona_cargo
            }
        })
        
    }catch(e){
        commit('sucursalError',e.message)
        console.log('sucursalError',e.message)
    }finally{
        console.log('la peticion para actualizar  la sucursal a finalizado')
    }

}

export async function removeSucursal({commit, dispatch}, id){
    try{
         await Vue.axios({
            method: 'DELETE',
            url: `/sucursal/v0/${id}`
        })
        dispatch('fetchSucursales')
    }catch(e){
        commit('sucursalError',e.message)
        console.log('sucursalError',e.message)
    }finally{
        console.log('la peticion para eliminar  una sucursal a finalizado')
    }

}