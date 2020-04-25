import {combineReducers} from 'redux'
import numSignal from './signalReducer'

const allReducer  = combineReducers({
  numSignal : numSignal
})
export default allReducer;