require('es6-promise').polyfill()
import React from 'react'
import { render } from 'react-dom'
import {Router} from 'react-router'
import history from './routes/history'
import {Provider} from 'react-redux'
import {fromJS} from 'immutable'
import store from './store/store'
import {routes} from './routes'

render(
	<Provider store={store}>
	  <Router history={history}>{routes}</Router>
	</Provider>,
	document.getElementById('app')
)
