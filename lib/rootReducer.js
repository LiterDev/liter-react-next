import { combineReducers } from 'redux'


import count from './count/reducers'
import placeholder from './placeholder/reducers'

export default combineReducers({
  
  count,
  placeholder
})
