export function setMunicipios(state, municipios){
    state.municipios = municipios;
}

export function setMunicipio(state, municipio){
    state.selectedMunicipio = municipio;
}


export function municipiosError(state, payload){
    state.error = true
    state.errorMessage = payload
    state.estados = []
}
