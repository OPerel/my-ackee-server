import { combineReducers } from 'redux'

import {
	RESET_STATE
} from '../actions'

import modals from './modals'
import token from './token'
import permanentTokens from './permanentTokens'
import route from './route'
import filter from './filter'
import domains from './domains'
import events from './events'
import overview from './overview'
import durations from './durations'
import widgets from './widgets'

const reducers = combineReducers({
	modals,
	token,
	permanentTokens,
	route,
	filter,
	domains,
	events,
	overview,
	durations,
	widgets
})

export default (state, action) => {

	switch (action.type) {
		case RESET_STATE:
			// Reducers are supposed to return the initial state when called with undefined.
			// Set state to undefined and let the other reducers return the initial state.
			state = undefined
			break
	}

	return reducers(state, action)

}