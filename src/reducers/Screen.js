const screenReducer = (state = "weather", action) => {
    switch (action.type) {
        case 'WEATHER':
           return  'weather' 
        case 'FAVORITE':
           return  'favorite' 
        default:
            return state
    }
}

export default screenReducer