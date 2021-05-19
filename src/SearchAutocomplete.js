

import React, { useState } from "react"
import axios from 'axios'


import auto from './CitiesAutocomplete'



export default function SearchAutocomplete() {
  const [selectedPrediction, setSelectedPrediction] = useState(null)
  const [searchValue, setSearchValue] = useState("")
  
  const [predictions,setPredictions] = useState([])

  const seta = (searchValue) => {
    setPredictions(auto)
      //  axios.get(
        // `http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=0B6K5ar9SAnAcKQMsGpak3HE7pqSulqz&q=${searchValue}`
        // ).then((response) => {
        //     // handle success
        //     console.log(response);
            
        //   })
  }

  const handlePredictionSelection = (e, prediction) => {
    e.preventDefault()
    setSelectedPrediction(prediction)
  }

  return (
    <>
      <form>
        <input
          name="predictionSearch"
          value={searchValue}
          onChange={e =>{seta(e.target.value) }}
        />
        <ul>
          {predictions?.map(prediction => (
            <li key={prediction.Key}>
              <button
                onClick={e => handlePredictionSelection(e, prediction)}
                onKeyDown={e => handlePredictionSelection(e, prediction)}
              >
                {prediction.LocalizedName }
              </button>
            </li>
          ))}
        </ul>
        <h3>You searched for: {searchValue}</h3>
        <h3>
          You selected:{" "}
          {selectedPrediction?.structured_formatting?.main_text || "None"}
        </h3>
      </form>
    </>
  )
}