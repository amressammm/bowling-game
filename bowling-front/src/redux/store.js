import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counter'
import playersReducer from './players'
const redux= require("redux")
const applyMiddleware =redux.applyMiddleware
const thunk=require('redux-thunk').default

export const store = configureStore({
   reducer: {
    counter: counterReducer,
    players: playersReducer
    
  },
 
  
})
