import {Map,fromJS} from 'immutable'

import {
	REQUEST_HOME,
	REQUEST_HOME_SUCCEED,
	REQUEST_HOME_FAILED,
} from '../creators/home'

const initialState = Map(fromJS({
	isFetching:true,
	home: {}
}))

export default function home(state = initialState,action) {
	
	switch(action.type) {		
		case REQUEST_HOME:
			return state.set('isFetching',true)
		case REQUEST_HOME_SUCCEED: 
			if(action.result && action.result.home) {
				var home = action.result.home
				return Map(fromJS({
					isFetching:false,
					success: true,
					home: home,					
					lastUpdate: action.receivedAt
				}))
			} else {
				return state
			}

		case REQUEST_HOME_FAILED: 
			return state.mergeDeep({
				isFetching:false,
				success: false,
				message:action.message,
				lastUpdate: action.receivedAt
			})	
		default:
			return state
	}
}