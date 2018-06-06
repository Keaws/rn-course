import {ADD_PLACE, SELECT_PLACE, DELETE_PLACE, DESELECT_PLACE} from '../actions/actionTypes'

import kappa from '../../assets/kappa.png'

const initialState = {
  places: [],
  selectedPlace: null
}

const reducer = (state = initialState, action) => {
  switch(action.type) {

    case ADD_PLACE:
      return {
        ...state,
        places: [
          ...state.places,
          {
            key: Math.random().toString(),
            name: action.placeName,
            image: kappa
          }
        ]
      }
    
    case DELETE_PLACE:
      return {
        ...state,
        places: state.places.filter((place) => place.key !== state.selectedPlace.key),
        selectedPlace: null
      }

    case SELECT_PLACE:
      return {
        ...state,
        selectedPlace: state.places.find(place => place.key === action.key)
      }

    case DESELECT_PLACE:
      return {
        ...state,
        selectedPlace: null
      }
    
    default:
      return state
  }
}

export default reducer