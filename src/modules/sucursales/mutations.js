export function setSucursales(state, sucursales){
    state.sucursales = sucursales;
}

export function setSucursal(state, sucursal){
    state.selectedSucursal = sucursal
}


export function sucursalError(state, payload){
    state.error = true
    state.errorMessage = payload
    state.sucursales = []
}