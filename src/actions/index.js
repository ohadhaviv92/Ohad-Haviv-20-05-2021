export const changeCity = (city) => {
  return {
    type: 'SET',
    payload: city,
  }
}

export const addCityToFavorites = (city) => {
  return {
    type: 'TOGGLE',
    payload: city,
  }
}


export const initFavorites = (list) => {
  return {
    type: 'INIT',
    payload: list,
  }
}



export const favoriteScreen = () => {
  return {
    type: 'FAVORITE',
  }
}


export const weatherScreen = () => {
  return {
    type: 'WEATHER',
  }
}

export const toggleUnit = () => {
  return {
    type: 'TOGGLE_UNIT',
  }
}