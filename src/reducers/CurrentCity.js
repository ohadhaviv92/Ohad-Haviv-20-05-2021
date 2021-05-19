const currentCityReducer = (state = null, action) => {
    switch (action.type) {
        case 'GET':
            return state
        case 'SET':
            let newState = action.payload
            return newState
        default:
            return state
    }
}

export default currentCityReducer