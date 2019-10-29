export function setRegistros(state, registros){
    state.registros = registros;
}

export function setRegistro(state, registro){
    state.selectedRegistro = registro
}


export function registroError(state, payload){
    state.error = true
    state.errorMessage = payload
    state.registros = []
}