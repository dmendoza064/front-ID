import Vue from 'vue'


export async function fetchClientes({commit}){
    try{
        const {data} = await Vue.axios({
            url: '/consumers/v0'
        })
        commit('setClientes',data)
    }catch(e){
        commit('clienteError',e.message)
        console.log('clienteError',e.message)
    }finally{
        console.log('la peticion para obtener  los clientes a finalizado')
    }

}

export async function addCliente({commit}, cliente){
    try{
        console.log('/POST cliente', cliente)
         await Vue.axios({
            method: 'POST',
            url: '/consumers/v0',
            data:{
                
                nombre: cliente.nombre,
                apellido_p: cliente.apellido_p,
                apellido_m: cliente.apellido_m,
                telefono: cliente.telefono,
                celular: cliente.celular,
                email: cliente.email,
                cp: cliente.cp,
                direccion: cliente.direccion,
                entre_calles: cliente.entre_calles,
                localidades_id: cliente.localidades_id,
                id_empleado: 2,
                status: 1,
                notas: cliente.notas
               // estatus: cliente.estatus
            }
        })
        
    }catch(e){
        commit('clienteError',e.message)
        console.log('clienteError',e.message)
    }finally{
        console.log('la peticion para crear  los cliente a finalizado')
    }

}

export async function updateCliente({commit}, cliente){
    try{
         await Vue.axios({
            method: 'PUT',
            url: `/soporte/v0/${cliente.id}`,
            data:{
                id: cliente.id,
                nombre: cliente.nombre,
                apellido_p: cliente.apellido_p,
                apellido_m: cliente.apellido_m,
                telefono: cliente.telefono,
                celular: cliente.celular,
                email: cliente.email,
                cp: cliente.cp,
                direccion: cliente.direccion,
                localidades_id: cliente.localidades_id,
                estatus: cliente.estatus
            }
        })
        
    }catch(e){
        commit('clienteError',e.message)
        console.log('clienteError',e.message)
    }finally{
        console.log('la peticion para actualizar  los cliente a finalizado')
    }

}
export async function removeCliente({commit, dispatch}, id){
    try{
         await Vue.axios({
            method: 'DELETE',
            url: `/consumers/v0/${id}`
        })
        dispatch('fetchClientes')
    }catch(e){
        commit('clieteError',e.message)
        console.log('clienteError',e.message)
    }finally{
        console.log('la peticion para eliminar  los soportes a finalizado')
    }

}