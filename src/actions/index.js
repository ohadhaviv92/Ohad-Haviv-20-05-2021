export const changeCity = (city) => {
    return {
      type: 'SET',
      payload: city,
    }
  }

  export const addCityToFavorites = (city) => {
    return {
      type: 'PUSH',
      payload: city,
    }
  }
  

  export const favoriteScreen = (city) => {
    return {
      type: 'FAVORITE',
    }
  }

  
  export const weatherScreen = (city) => {
    return {
      type: 'WEATHER',
    }
  }