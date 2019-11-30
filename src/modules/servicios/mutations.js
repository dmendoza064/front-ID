export function setServicios(state, servicios){
    state.servicios = servicios;
}

export function setServicio(state, servicio){
    state.selectedServicio = servicio;
}


export function servicioError(state, payload){
    state.error = true
    state.errorMessage = payload
    state.servicios = []
}
