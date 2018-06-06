import {createStore, combineReducers} from 'redux'

import reducer from './reducers/places'

const rootReducer = combineReducers({
  places: reducer
})

const configureStore = () => {
  return createStore(rootReducer)
}

export default configureStore