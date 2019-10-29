export function setEmpleos(state, empleos){
    state.empleos = empleos;
}

export function setEmpleo(state, empleo){
    state.selectedEmpleo = empleo
}


export function empleoError(state, payload){
    state.error = true
    state.errorMessage = payload
    state.empleos = []
}