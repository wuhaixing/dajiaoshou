import React from 'react'

export default class Preloader extends React.Component {
	render() {
	    return (
			<div id="preloader">
				<div className="inner">
					<span className="loader"></span>
				</div>
			</div>
	    )
	}
}

