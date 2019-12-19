import Vue from 'vue'

export async function fetchContratos({commit}){
    try{
        const {data} = await Vue.axios({
            url: '/contrato/v0'
        })
         commit('setContratos', data.object)
    }catch(e){
        commit('ContratosError', e.message)
        console.log('ContratosError',e.message)
    }finally{
        console.log('la peticion para mostrar los contratos ha finalizado')
    }
}

export async function addContrato({commit}, contrato){
    try{
        await Vue.axios({
            method: 'POST',
            url: '/contrato/v0',
            data: {
                //id: data.now(),
                fecha_inicial: contrato.fecha_inicial,
                fecha_final: contrato.fecha_final,
                tiempo: contrato.tiempo,
                precio: contrato.precio,
                servicios_id: contrato.servicios_id,
                clientes_id: contrato.clientes_id,
                nota: contrato.nota,
                id_empleado: 3
            }
            
        })
    }catch(e){
        commit('ContratosError',e.message)
        console.log('ContratosError',e.message)
    }finally{
        console.log('la peticion para añadir los contratos ha finalizado')
    }
}

export async function updateContrato({commit}, contrato){
    console.log('update contrato: ', contrato)
    try{
        await Vue.axios({
            method: 'PUT',
            url:`/contrato/v0`,
            data: {
                id: contrato.id,
                fecha_inicial: contrato.fecha_inicial,
                fecha_final: contrato.fecha_final,
                tiempo: contrato.tiempo,
                precio: contrato.precio,
                servicios_id: contrato.servicios_id,
                clientes_id: contrato.clientes_id,
                nota: contrato.nota,
                id_empleado: 3
            }
            
        })
    }catch(e){
        commit('ContratosError',e.message)
        console.log('ContratosError',e.message)
    }finally{
        console.log('la peticion para añadir los contratos ha finalizado')
    }
}


export async function removeContrato({commit,dispatch}, id){
    try{
        await Vue.axios({
            method: 'DELETE',
            url: `/contrato/v0/${id}`
        })
        dispatch('fetchContratos')
    }catch(e){
        commit('ContratosError',e.message)
        console.log('ContratosError',e.message)
    }finally{
        console.log('La peticion para eliminar el contrato ha finalizado')
    }
}

export async function fetchContratosP({commit}){
    try{
        const {data} = await Vue.axios({
            url: '/contrato/v0/contratop'
        })
         commit('setContratos', data)
    }catch(e){
        commit('ContratosError', e.message)
        console.log('ContratosError',e.message)
    }finally{
        console.log('la peticion para mostrar el listado de pagos ha finalizado')
    }
}