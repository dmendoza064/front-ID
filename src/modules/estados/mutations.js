export function setEstados(state, estados){
    state.estados = estados;
}

export function setEstado(state, estado){
    state.selectedEstado = estado;
}


export function EstadosError(state, payload){
    state.error = true
    state.errorMessage = payload
    state.estados = []
}
