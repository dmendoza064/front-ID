export function setSoportes(state, soportes){
    state.soportes = soportes;
}

export function setSoporte(state, soporte){
    state.selectedSoporte = soporte;
}


export function soporteError(state, payload){
    state.error = true
    state.errorMessage = payload
    state.soportes = []
}
