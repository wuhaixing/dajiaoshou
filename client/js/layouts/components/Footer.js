import React from 'react'

export default class Footer extends React.Component {
	render() {
		const socialIcons = 
						<div className="margin-top-20">
							<a href="#" className="social-icon social-icon-border social-facebook pull-left" 
										data-toggle="tooltip" data-placement="top" title="Facebook">

								<i className="icon-facebook"></i>
								<i className="icon-facebook"></i>
							</a>

							<a href="#" className="social-icon social-icon-border social-twitter pull-left" 
										data-toggle="tooltip" data-placement="top" title="Twitter">
								<i className="icon-twitter"></i>
								<i className="icon-twitter"></i>
							</a>

							<a href="#" className="social-icon social-icon-border social-gplus pull-left" 
										data-toggle="tooltip" data-placement="top" title="Google plus">
								<i className="icon-gplus"></i>
								<i className="icon-gplus"></i>
							</a>

							<a href="#" className="social-icon social-icon-border social-linkedin pull-left" 
										data-toggle="tooltip" data-placement="top" title="Linkedin">
								<i className="icon-linkedin"></i>
								<i className="icon-linkedin"></i>
							</a>

							<a href="#" className="social-icon social-icon-border social-rss pull-left" 
										data-toggle="tooltip" data-placement="top" title="Rss">
								<i className="icon-rss"></i>
								<i className="icon-rss"></i>
							</a>
				
						</div>
		const copyright =
						<div className="copyright">
							<div className="container">
								<ul className="pull-right nomargin list-inline mobile-block">
									<li><a href="#">Terms &amp; Conditions</a></li>
									<li>&bull;</li>
									<li><a href="#">Privacy</a></li>
								</ul>
								&copy; All Rights Reserved, Company LTD
							</div>
						</div>

	    return (
			<footer id="footer">
					<div className="container">

						<div className="row">
							
							<div className="col-md-3">
								<img className="footer-logo" src="/images/logo-footer.png" alt="" />

								<p>Integer posuere erat a ante venenatis dapibus posuere velit aliquet.</p>

								<address>
									<ul className="list-unstyled">
										<li className="footer-sprite address">
											PO Box 21132<br/>
											Here Weare St, Melbourne<br/>
											Vivas 2355 Australia<br/>
										</li>
										<li className="footer-sprite phone">
											Phone: 1-800-565-2390
										</li>
										<li className="footer-sprite email">
											<a href="mailto:support@yourname.com">support@yourname.com</a>
										</li>
									</ul>
								</address>

							</div>

							<div className="col-md-3">

								<h4 className="letter-spacing-1">LATEST NEWS</h4>
								<ul className="footer-posts list-unstyled">
									<li>
										<a href="#">Donec sed odio dui. Nulla vitae elit libero, a pharetra augue</a>
										<small>29 June 2015</small>
									</li>
									<li>
										<a href="#">Nullam id dolor id nibh ultricies</a>
										<small>29 June 2015</small>
									</li>
									<li>
										<a href="#">Duis mollis, est non commodo luctus</a>
										<small>29 June 2015</small>
									</li>
								</ul>

							</div>

							<div className="col-md-2">

								<h4 className="letter-spacing-1">EXPLORE SMARTY</h4>
								<ul className="footer-links list-unstyled">
									<li><a href="#">Home</a></li>
									<li><a href="#">About Us</a></li>
									<li><a href="#">Our Services</a></li>
									<li><a href="#">Our Clients</a></li>
									<li><a href="#">Our Pricing</a></li>
									<li><a href="#">Smarty Tour</a></li>
									<li><a href="#">Contact Us</a></li>
								</ul>

							</div>

							<div className="col-md-4">

								<h4 className="letter-spacing-1">KEEP IN TOUCH</h4>
								<p>Subscribe to Our Newsletter to get Important News &amp; Offers</p>

								<form className="validate" action="php/newsletter.php" 
										data-success="Subscribed! Thank you!" 
										data-toastr-position="bottom-right">
									<div className="input-group">
										<span className="input-group-addon"><i className="fa fa-envelope"></i></span>
										<input type="email" id="email" name="email" 
												className="form-control required" 
												placeholder="Enter your Email"/>
										<span className="input-group-btn">
											<button className="btn btn-success" type="submit">订阅</button>
										</span>
									</div>
								</form>
								{socialIcons}

							</div>

						</div>

					</div>

					{copyright}
				</footer>
	    )
	}
}

