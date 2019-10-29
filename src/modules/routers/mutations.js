export function setRouters(state, routers){
    state.routers = routers;
}

export function setRouter(state, router){
    state.selectedRouter = router;
}


export function RoutersError(state, payload){
    state.error = true
    state.errorMessage = payload
    state.routers = []
}