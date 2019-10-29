import Vue from 'vue'


export async function fetchEstados({commit}){
    try{
        const {data} = await Vue.axios({
            url: '/state/v0'
        })
        commit('setEstados',data)
    }catch(e){
        commit('estadoError',e.message)
        console.log('estadoError',e.message)
    }finally{
        console.log('la peticion para obtener  los estados a finalizado')
    }

}