const favoritesReducer = (state = [], action) => {
    switch (action.type) {
        case 'PUSH':
            if (state.findIndex(city => city.Key == action.payload.Key) == -1)
                return [...state, action.payload];
            else
                return state.filter(city => city.Key != action.payload.Key)
        default:
            return state
    }
}

export default favoritesReducer