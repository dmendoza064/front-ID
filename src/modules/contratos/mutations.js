export function setContratos(state, contratos){
    state.contratos = contratos;
}

export function setContrato(state, contrato){
    state.selectedContrato = contrato;
}

export function ContratosError(state, payload){
    state.error = true
    state.errorMessage = payload
    state.contratos = []
}