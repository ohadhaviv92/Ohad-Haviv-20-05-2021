
//  true => celsius
//  true => fahrenheit

const unitReducer = (state = true, action) => {
    switch (action.type) {
        case 'TOGGLE_UNIT':
            return !state;
        default:
            return state
    }
}

export default unitReducer