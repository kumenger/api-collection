import {combineReducers} from 'redux'
import {reducer as fromReducer  } from 'redux-form'
import _ from 'lodash'
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
const getwikireduce=(state=[],action)=>{
    if(action.type==="Get_Result"){
      const newsState=_.concat([], action.payload)
      return newsState
    }
    return state
}
const fetchPicsReducer=(state={status:"",pictures:""},action)=>{
  switch(action.type){
      case "FETCH_PICS":
          return {...state,status:"ok",pictures:action.payload}
          default:
              return state;
  }
}
const rootPersistConfig = {
  key: "root",
  storage,
  blacklist: [
    'form'

  ],
}

export default persistReducer(rootPersistConfig, combineReducers({form:fromReducer,getwikireduce:getwikireduce,fetchPicsReducer:fetchPicsReducer}))