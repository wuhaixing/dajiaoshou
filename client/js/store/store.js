import {createStore, applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import {reducers} from './reducers'

function makeStore() {
	const createStoreWithMiddleware = applyMiddleware(
	  thunkMiddleware,
	  createLogger()
	)(createStore)

	return createStoreWithMiddleware(reducers)
} 

/**
* Make store avaliable to route onEnter
* http://stackoverflow.com/questions/33488090/how-to-connect-to-redux-store-from-react-router-onenter-hook
* 
*/
const store = makeStore()

export default store