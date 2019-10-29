export function setProductos(state, productos){
    state.productos = productos;
}

export function setProducto(state, producto){
    state.selectedProducto = producto;
}


export function ProductoError(state, payload){
    state.error = true
    state.errorMessage = payload
    state.clientes = []
}
