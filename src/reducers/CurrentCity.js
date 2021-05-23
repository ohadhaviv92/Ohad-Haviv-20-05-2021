const currentCityReducer = (state = null, action) => {
    switch (action.type) {
        case 'SET':
            let newState = action.payload
            return newState
        default:
            return state
    }
}

export default currentCityReducer