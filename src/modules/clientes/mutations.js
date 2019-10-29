export function setClientes(state, clientes){
    state.clientes = clientes;
}

export function setCliente(state, cliente){
    state.selectedCliente = cliente;
}


export function clienteError(state, payload){
    state.error = true
    state.errorMessage = payload
    state.clientes = []
}
