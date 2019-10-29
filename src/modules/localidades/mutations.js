export function setLocalidades(state, localidades){
    state.localidades = localidades;
}

export function setLocalidad(state, localidad){
    state.selectedLocalidad = localidad;
}


export function localidadesError(state, payload){
    state.error = true
    state.errorMessage = payload
    state.localidades = []
}
