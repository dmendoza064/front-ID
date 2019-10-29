export function setPagos(state, pagos){
    state.pagos = pagos;
}

export function setPago(state, pago){
    state.selectedPago = pago;
}


export function PagoError(state, payload){
    state.error = true
    state.errorMessage = payload
    state.clientes = []
}
