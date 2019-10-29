export function setRecargos(state, recargos){
    state.recargos = recargos;
}

export function setRecargo(state, recargo){
    state.selectedRecargo = recargo
}


export function recargoError(state, payload){
    state.error = true
    state.errorMessage = payload
    state.recargos = []
}