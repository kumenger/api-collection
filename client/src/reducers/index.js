import {combineReducers} from 'redux'
import {reducer as fromReducer  } from 'redux-form'
import _ from 'lodash'

const getwikireduce=(state=[],action)=>{
    if(action.type==="Get_Result"){
      const newsState=_.concat([], action.payload)
      return newsState
    }
    return state
}

export default combineReducers({form:fromReducer,getwikireduce:getwikireduce})