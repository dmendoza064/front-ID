import Vue from 'vue'


export async function fetchLocalidades({commit}, id){
    try{
        const {data} = await Vue.axios({
            url: `/localidad/v0/2456`
        })
        commit('setLocalidades',data)
    }catch(e){
        commit('localidadesError',e.message)
        console.log('localidadesError',e.message)
    }finally{
        console.log('la peticion para obtener  las localidades a finalizado')
    }

}