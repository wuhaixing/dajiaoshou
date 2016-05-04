import React from 'react'
import {Route} from 'react-router'
import App from '../layouts/App'
import Main from '../layouts/Main'
import Simple from '../layouts/Simple'
import {Home} from '../pages/Home'
import {Coming} from '../pages/Coming'
import {NoMatch} from '../pages/NoMatch'
import {InternalError} from '../pages/InternalError'

export const routes = 
  <Route component={App}>
  	<Route component={Simple}>
		<Route path='/coming' component={Coming} />			
	</Route>
  	<Route component={Main}>
		<Route path='/' component={Home} />	
		<Route path='/error' component={InternalError} />	
		<Route path="*" component={NoMatch}/>					       
	</Route>

  </Route>

