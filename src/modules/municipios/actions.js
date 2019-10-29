import Vue from 'vue'


export async function fetchMunicipios({commit}, id){
    try{
        const {data} = await Vue.axios({
            url: `/municipio/v0/${id}`
        })
        commit('setMunicipios',data)
    }catch(e){
        commit('municipiosError',e.message)
        console.log('municipiosError',e.message)
    }finally{
        console.log('la peticion para obtener  los Municipios a finalizado')
    }

}