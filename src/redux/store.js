import { createStore, applyMiddleware } from 'redux' 
import rootReducer from '../redux/rootReducer'
import logger from 'redux-logger'
import {persistStore} from 'redux-persist'
const middleWare = [logger]

export const store = createStore(rootReducer, applyMiddleware(...middleWare))

//creating persisted version of store
export const persistor = persistStore(store)
export default { store, persistor };

