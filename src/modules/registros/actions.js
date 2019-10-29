import Vue from 'vue'


export async function fetchRegistros({commit}){
    try{
        const {data} = await Vue.axios({
            url: '/registro/v0'
        })
        commit('setRegistros',data)
    }catch(e){
        commit('registroError',e.message)
        console.log('registroError',e.message)
    }finally{
        console.log('la peticion para obtener los registros a finalizado')
    }

}

export async function addRegistro({commit}, registro){
    try{
         await Vue.axios({
            method: 'POST',
            url: '/registro/v0',
            data:{
                
                tipo_sucursal: registro.tipo_sucursal,
                id_localidad: registro.id_localidad,
                id_empleado: registro.id_empleado,
                persona_cargo: registro.persona_cargo 
            }
        })
        
    }catch(e){
        commit('registroError',e.message)
        console.log('registroError',e.message)
    }finally{
        console.log('la peticion para crear  un registro a finalizado')
    }

}

export async function updateRegistro({commit}, registro){
    try{
         await Vue.axios({
            method: 'PUT',
            url: `/registro/v0`,
            data:{
                id: registro.id,
                tipo_sucursal: registro.tipo_sucursal,
                id_localidad: registro.id_localidad,
                id_empleado: registro.id_empleado,
                persona_cargo: registro.persona_cargo
            }
        })
        
    }catch(e){
        commit('registroError',e.message)
        console.log('registroError',e.message)
    }finally{
        console.log('la peticion para actualizar un registro a finalizado')
    }

}

export async function removeRegistro({commit, dispatch}, id){
    try{
         await Vue.axios({
            method: 'DELETE',
            url: `/registro/v0/${id}`
        })
        dispatch('fetchRegistros')
    }catch(e){
        commit('registroError',e.message)
        console.log('registroError',e.message)
    }finally{
        console.log('la peticion para eliminar un registro a finalizado')
    }

}