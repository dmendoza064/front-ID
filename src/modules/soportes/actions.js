import Vue from 'vue'


export async function fetchSoportes({commit}){
    try{
        const {data} = await Vue.axios({
            url: `soporte/v0/?pageNo=1&pageSize=8`
        })
        commit('setSoportes',data)
    }catch(e){
        commit('soporteError',e.message)
        console.log('soporteError',e.message)
    }finally{
        console.log('la peticion para obtener  los soportes a finalizado')
    }

}


export async function fetchSoportesP({commit},pageNo){
    try{
        const {data} = await Vue.axios({
            url: `soporte/v0/?pageNo=${pageNo}&pageSize=8`
        })
        commit('setSoportes',data)
    }catch(e){
        commit('soporteError',e.message)
        console.log('soporteError',e.message)
    }finally{
        console.log('la peticion para obtener  los soportes a finalizado')
    }

}

export async function addSoporte({commit}, soporte){
    try{
         await Vue.axios({
            method: 'POST',
            url: '/soporte/v0',
            data:{
                //id: data.now(),
                descripcion: soporte.descripcion,
                remplazo_equipo: soporte.remplazo_equipo,
                cliente_id: soporte.cliente_id,
                usuario_id: soporte.usuario_id,
                tiempo_solucion: soporte.tiempo_solucion
            }
        })
        
    }catch(e){
        commit('soporteError',e.message)
        console.log('error al crear el soporte',e.message)
    }finally{
        console.log('la peticion para crear  los soportes a finalizado')
    }

}

export async function updateSoporte({commit}, soporte){
    try{
         await Vue.axios({
            method: 'PUT',
            //url: `/soporte/v0/${soporte.id}`, ruta erronea
            url: '/soporte/v0',//la api no cupa el id en la ruta se manda desde
            data:{
                id: soporte.id,
                descripcion: soporte.descripcion,
                remplazo_equipo: soporte.remplazo_equipo,
                cliente_id: soporte.cliente_id
            }
        })
        
    }catch(e){
        commit('soporteError',e.message)
        console.log('error al actualizar el soporte ',e.message)
    }finally{
        console.log('la peticion para actualizar  los soportes a finalizado')
    }

}