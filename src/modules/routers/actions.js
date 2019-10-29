import Vue from 'vue'


export async function fetchRouters({commit}){
    try{
        const {data} = await Vue.axios({
            url: '/router/v0'
        })
        commit('setRouters',data)
    }catch(e){
        commit('RoutersError',e.message)
    }finally{
        console.log('la peticion para obtener  los router a finalizado')
    }

}

export async function addRouter({commit}, router){
    try{
         await Vue.axios({
            method: 'POST',
            url: '/router/v0',
            data:{
                
                nombre: router.nombre,
                ip: router.ip,
                puerto_api: router.puerto_api,
                puerto_www: router.puerto_www,
                interfaz_lan: router.interfaz_lan,
                rangos_ip: router.rangos_ip
            }
        })
        
    }catch(e){
        commit('RoutersError',e.message)
        console.log('RoutersError',e.message)
    }finally{
        console.log('la peticion para crear  los routers a finalizado')
    }

}

export async function updateRouter({commit}, router){
    try{
         await Vue.axios({
            method: 'PUT',
            url: `/router/v0`,
            data:{
                id: router.id,
                nombre: router.nombre,
                ip: router.ip,
                puerto_api: router.puerto_api,
                puerto_www: router.puerto_www,
                interfaz_lan: router.interfaz_lan,
                rangos_ip: router.rangos_ip
            }
        })
        
    }catch(e){
        commit('RoutersError',e.message)
        console.log('RoutersError',e.message)
    }finally{
        console.log('la peticion para actualizar  los routers a finalizado')
    }

}

export async function removeRouter({commit, dispatch}, id){
    try{
         await Vue.axios({
            method: 'DELETE',
            url: `/router/v0/${id}`
        })
        dispatch('fetchRouters')
    }catch(e){
        commit('RoutersError',e.message)
        console.log('RoutersError',e.message)
    }finally{
        console.log('la peticion para eliminar  los routers a finalizado')
    }

}