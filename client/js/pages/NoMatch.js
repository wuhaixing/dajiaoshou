import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router'

export class NoMatch extends React.Component {
	render() {
		const pageHeader = 
					<section className="page-header dark">
						<div className="container">

							<h1>PAGE NOT FOUND</h1>

							<ol className="breadcrumb">
								<li><a href="#">Home</a></li>
								<li><a href="#">Pages</a></li>
								<li className="active">Error 404</li>
							</ol>

						</div>
					</section>
		const mainBlock = 
					<section className="padding-xlg">
						<div className="container">
							
							<div className="row">

								<div className="col-md-6 col-sm-6 hidden-xs">
									
									<div className="error-404">
										404
									</div>
								
								</div>

								<div className="col-md-6 col-sm-6">
								
									<h3 className="nomargin">Sorry, <strong>The page you requested can not be found!</strong></h3>
									<p className="nomargin-top size-20 font-lato text-muted">Please, search again using more specific keywords.</p>

									
									<div className="inline-search clearfix margin-bottom-60">
										<form action="" method="get" className="widget_search">
											<input type="search" placeholder="Search..." id="s" name="s" className="serch-input"/>
											<button type="submit">
												<i className="fa fa-search"></i>
											</button>
											<div className="clear"></div>
										</form>
									</div>
									

									<div className="divider nomargin-bottom"></div>

									<a className="size-16 font-lato" href="index.html"><i className="glyphicon glyphicon-menu-left margin-right-10 size-12"></i> back to Smarty homepage now!</a>

								</div>

							</div>
							
						</div>
					</section>
	    
	    return (
			<div>
				{pageHeader}
				{mainBlock}
			</div>
		)
	}
}
