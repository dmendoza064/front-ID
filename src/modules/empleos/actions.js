import Vue from 'vue'


export async function fetchEmpleos({commit}){
    try{
        const {data} = await Vue.axios({
            url: '/empleos/v0'
        })
        commit('setEmpleos',data)
    }catch(e){
        commit('empleoError',e.message)
        console.log('empleoError',e.message)
    }finally{
        console.log('la peticion para obtener  los empleos a finalizado')
    }

}

export async function addEmpleo({commit}, empleo){
    try{
         await Vue.axios({
            method: 'POST',
            url: '/empleos/v0',
            data:{
                
                empleo: empleo.empleo
            }
        })
        
    }catch(e){
        commit('empleoError',e.message)
        console.log('empleoError',e.message)
    }finally{
        console.log('la peticion para crear  el empleo a finalizado')
    }

}

export async function updateEmpleo({commit}, empleo){
    try{
         await Vue.axios({
            method: 'PUT',
            url: `/empleos/v0`,
            data:{
                id: empleo.id,
                empleo: empleo.empleo
            }
        })
        
    }catch(e){
        commit('empleoError',e.message)
        console.log('empleoError',e.message)
    }finally{
        console.log('la peticion para actualizar  el empleo a finalizado')
    }

}

export async function removeEmpleo({commit, dispatch}, id){
    try{
         await Vue.axios({
            method: 'DELETE',
            url: `/empleos/v0/${id}`
        })
        dispatch('fetchEmpleos')
    }catch(e){
        commit('empleoError',e.message)
        console.log('empleoError',e.message)
    }finally{
        console.log('la peticion para eliminar el empleo a finalizado')
    }

}