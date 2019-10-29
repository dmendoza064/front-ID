export function setUsuarios(state, usuarios){
    state.usuarios = usuarios;
}

export function setUsuario(state, usuario){
    state.selectedUsuario = usuario;
}


export function UsuariosError(state, payload){
    state.error = true
    state.errorMessage = payload
    state.usuarios = []
} 