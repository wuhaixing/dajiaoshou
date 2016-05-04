import React from 'react'
import {Link} from 'react-router'

export default class Header extends React.Component {
	render() {
		const mobileMenuButton = 
						<button className="btn btn-mobile" data-toggle="collapse" data-target=".nav-main-collapse">
							<i className="fa fa-bars"></i>
						</button>
		const mobileNavs =
						<ul className="pull-right nav nav-pills nav-second-main">

							<li className="search">
								<a href="javascript:;">
									<i className="fa fa-search"></i>
								</a>
								<div className="search-box">
									<form action="page-search-result-1.html" method="get">
										<div className="input-group">
											<input type="text" name="src" placeholder="关键字..." className="form-control" />
											<span className="input-group-btn">
												<button className="btn btn-primary" type="submit">搜索</button>
											</span>
										</div>
									</form>
								</div> 
							</li>
							{/*--/SEARCH -- */}

							{/*--QUICK SHOP CART -- */}
							<li className="quick-cart">
								<a href="#">
									<span className="badge badge-aqua btn-xs badge-corner">2</span>
									<i className="fa fa-shopping-cart"></i> 
								</a>
								<div className="quick-cart-box">
									<h4>Shop Cart</h4>

									<div className="quick-cart-wrapper">

										<a href="#">{/*--cart item -- */}
											<img src="assets/images/demo/people/300x300/4-min.jpg" width="45" height="45" alt="" />
											<h6><span>2x</span> RED BAG WITH HUGE POCKETS</h6>
											<small>$37.21</small>
										</a>{/*--/cart item -- */}

										<a href="#">{/*--cart item -- */}
											<img src="assets/images/demo/people/300x300/5-min.jpg" width="45" height="45" alt="" />
											<h6><span>2x</span> THIS IS A VERY LONG TEXT AND WILL BE TRUNCATED</h6>
											<small>$17.18</small>
										</a>{/*--/cart item -- */}

										{/*--cart no items example -- */}
										{/*--
										<a className="text-center" href="#">
											<h6>0 ITEMS ON YOUR CART</h6>
										</a>
										-- */}

									</div>

									{/*--quick cart footer -- */}
									<div className="quick-cart-footer clearfix">
										<a href="shop-cart.html" className="btn btn-primary btn-xs pull-right">VIEW CART</a>
										<span className="pull-left"><strong>TOTAL:</strong> $54.39</span>
									</div>
									{/*--/quick cart footer -- */}

								</div>
							</li>

						</ul>					
	    const desktopNavs = 
	    				<div className="navbar-collapse pull-right nav-main-collapse collapse">
							<nav className="nav-main">
								<ul id="topMain" className="nav nav-pills nav-main">
									<li>{/*--HOME -- */}
										<Link to="/">首页</Link>
									</li>
									<li className="dropdown">
										<a className="dropdown-toggle" href="#">
											问题
										</a>
										<ul className="dropdown-menu">
											<li className="dropdown">
												<a className="dropdown-toggle" href="#">
													DEFAULT
												</a>
												<ul className="dropdown-menu">
													<li><a href="blog-default-aside-left.html">LEFT SIDEBAR</a></li>
													<li><a href="blog-default-aside-right.html">RIGHT SIDEBAR</a></li>
													<li><a href="blog-default-aside-both.html">BOTH SIDEBAR</a></li>
													<li><a href="blog-default-fullwidth.html">FULL WIDTH</a></li>
												</ul>
											</li>
											<li className="dropdown">
												<a className="dropdown-toggle" href="#">
													GRID
												</a>
												<ul className="dropdown-menu">
													<li><a href="blog-column-2colums.html">2 COLUMNS</a></li>
													<li><a href="blog-column-3colums.html">3 COLUMNS</a></li>
													<li><a href="blog-column-4colums.html">4 COLUMNS</a></li>
													<li className="divider"></li>
													<li><a href="blog-column-aside-left.html">LEFT SIDEBAR</a></li>
													<li><a href="blog-column-aside-right.html">RIGHT SIDEBAR</a></li>
												</ul>
											</li>
											<li className="dropdown">
												<a className="dropdown-toggle" href="#">
													MASONRY
												</a>
												<ul className="dropdown-menu">
													<li><a href="blog-masonry-2colums.html">2 COLUMNS</a></li>
													<li><a href="blog-masonry-3colums.html">3 COLUMNS</a></li>
													<li><a href="blog-masonry-4colums.html">4 COLUMNS</a></li>
													<li><a href="blog-masonry-fullwidth.html">FULLWIDTH</a></li>
												</ul>
											</li>
											<li className="dropdown">
												<a className="dropdown-toggle" href="#">
													TIMELINE
												</a>
												<ul className="dropdown-menu">
													<li><a href="blog-timeline-aside-left.html">LEFT SIDEBAR</a></li>
													<li><a href="blog-timeline-aside-right.html">RIGHT SIDEBAR</a></li>
													<li><a href="blog-timeline-right-aside-right.html">RIGHT + TIMELINE RIGHT</a></li>
													<li><a href="blog-timeline-right-aside-left.html">LEFT + TIMELINE RIGHT</a></li>
													<li><a href="blog-timeline-fullwidth-left.html">FULL WIDTH - LEFT</a></li>
													<li><a href="blog-timeline-fullwidth-right.html">FULL WIDTH - RIGHT</a></li>
												</ul>
											</li>
											<li className="dropdown">
												<a className="dropdown-toggle" href="#">
													SMALL IMAGE
												</a>
												<ul className="dropdown-menu">
													<li><a href="blog-smallimg-aside-left.html">LEFT SIDEBAR</a></li>
													<li><a href="blog-smallimg-aside-right.html">RIGHT SIDEBAR</a></li>
													<li><a href="blog-smallimg-aside-both.html">BOTH SIDEBAR</a></li>
													<li><a href="blog-smallimg-fullwidth.html">FULL WIDTH</a></li>
													<li className="divider"></li>
													<li><a href="blog-smallimg-alternate-1.html">ALTERNATE 1</a></li>
													<li><a href="blog-smallimg-alternate-2.html">ALTERNATE 2</a></li>
												</ul>
											</li>
											<li className="dropdown">
												<a className="dropdown-toggle" href="#">
													SINGLE
												</a>
												<ul className="dropdown-menu">
													<li><a href="blog-single-default.html">DEFAULT</a></li>
													<li><a href="blog-single-aside-left.html">LEFT SIDEBAR</a></li>
													<li><a href="blog-single-aside-right.html">RIGHT SIDEBAR</a></li>
													<li><a href="blog-single-fullwidth.html">FULL WIDTH</a></li>
													<li><a href="blog-single-small-image-left.html">SMALL IMAGE - LEFT</a></li>
													<li><a href="blog-single-small-image-right.html">SMALL IMAGE - RIGHT</a></li>
													<li><a href="blog-single-big-image.html">BIG IMAGE</a></li>
													<li><a href="blog-single-fullwidth-image.html">FULLWIDTH IMAGE</a></li>
												</ul>
											</li>
											<li className="dropdown">
												<a className="dropdown-toggle" href="#">
													COMMENTS
												</a>
												<ul className="dropdown-menu">
													<li><a href="blog-comments-bordered.html#comments">BORDERED COMMENTS</a></li>
													<li><a href="blog-comments-default.html#comments">DEFAULT COMMENTS</a></li>
													<li><a href="blog-comments-facebook.html#comments">FACEBOOK COMMENTS</a></li>
													<li><a href="blog-comments-disqus.html#comments">DISQUS COMMENTS</a></li>
												</ul>
											</li>
										</ul>
									</li>
									<li className="dropdown">
										<a className="dropdown-toggle" href="#">
											实践课
										</a>
										<ul className="dropdown-menu pull-right">
											<li className="dropdown">
												<a className="dropdown-toggle" href="#">
													1 COLUMN
												</a>
												<ul className="dropdown-menu">
													<li><a href="shop-1col-left.html">LEFT SIDEBAR</a></li>
													<li><a href="shop-1col-right.html">RIGHT SIDEBAR</a></li>
													<li><a href="shop-1col-both.html">BOTH SIDEBAR</a></li>
													<li><a href="shop-1col-full.html">FULL WIDTH</a></li>
												</ul>
											</li>
											<li className="dropdown">
												<a className="dropdown-toggle" href="#">
													2 COLUMNS
												</a>
												<ul className="dropdown-menu">
													<li><a href="shop-2col-left.html">LEFT SIDEBAR</a></li>
													<li><a href="shop-2col-right.html">RIGHT SIDEBAR</a></li>
													<li><a href="shop-2col-both.html">BOTH SIDEBAR</a></li>
												</ul>
											</li>
											<li className="dropdown">
												<a className="dropdown-toggle" href="#">
													3 COLUMNS
												</a>
												<ul className="dropdown-menu">
													<li><a href="shop-3col-left.html">LEFT SIDEBAR</a></li>
													<li><a href="shop-3col-right.html">RIGHT SIDEBAR</a></li>
													<li><a href="shop-3col-full.html">FULL WIDTH</a></li>
												</ul>
											</li>
											<li className="dropdown">
												<a className="dropdown-toggle" href="#">
													4 COLUMNS
												</a>
												<ul className="dropdown-menu">
													<li><a href="shop-4col-left.html">LEFT SIDEBAR</a></li>
													<li><a href="shop-4col-right.html">RIGHT SIDEBAR</a></li>
													<li><a href="shop-4col-full.html">FULL WIDTH</a></li>
												</ul>
											</li>
											<li className="dropdown">
												<a className="dropdown-toggle" href="#">
													SINGLE PRODUCT
												</a>
												<ul className="dropdown-menu">
													<li><a href="shop-single-left.html">LEFT SIDEBAR</a></li>
													<li><a href="shop-single-right.html">RIGHT SIDEBAR</a></li>
													<li><a href="shop-single-both.html">BOTH SIDEBAR</a></li>
													<li><a href="shop-single-full.html">FULL WIDTH</a></li>
												</ul>
											</li>
											<li><a href="shop-compare.html">COMPARE</a></li>
											<li><a href="shop-cart.html">CART</a></li>
											<li><a href="shop-checkout.html">CHECKOUT</a></li>
											<li><a href="shop-checkout-final.html">ORDER PLACED</a></li>
										</ul>
									</li>
									<li className="dropdown mega-menu">
										<a className="dropdown-toggle" href="#">
											知识
										</a>
										<ul className="dropdown-menu">
											<li>
												<div className="row">

													<div className="col-md-5th">
														<ul className="list-unstyled">
															<li><a href="shortcode-animations.html">ANIMATIONS</a></li>
															<li><a href="shortcode-buttons.html">BUTTONS</a></li>
															<li><a href="shortcode-carousel.html">CAROUSEL</a></li>
															<li><a href="shortcode-charts.html">GRAPHS</a></li>
															<li><a href="shortcode-clients.html">CLIENTS</a></li>
															<li><a href="shortcode-columns.html">GRID &amp; COLUMNS</a></li>
															<li><a href="shortcode-counters.html">COUNTERS</a></li>
															<li><a href="shortcode-forms.html">FORM ELEMENTS</a></li>
														</ul>
													</div>

													<div className="col-md-5th">
														<ul className="list-unstyled">
															<li><a href="shortcode-dividers.html">DIVIDERS</a></li>
															<li><a href="shortcode-icon-boxes.html">BOXES &amp; ICONS</a></li>
															<li><a href="shortcode-galleries.html">GALLERIES</a></li>
															<li><a href="shortcode-headings.html">HEADING STYLES</a></li>
															<li><a href="shortcode-icon-lists.html">ICON LISTS</a></li>
															<li><a href="shortcode-labels.html">LABELS &amp; BADGES</a></li>
															<li><a href="shortcode-lightbox.html">LIGHTBOX</a></li>
															<li><a href="shortcode-forms-editors.html">HTML EDITORS</a></li>
														</ul>
													</div>

													<div className="col-md-5th">
														<ul className="list-unstyled">
															<li><a href="shortcode-list-pannels.html">LIST &amp; PANNELS</a></li>
															<li><a href="shortcode-maps.html"><span className="label label-success pull-right">new</span> MAPS</a></li>
															<li><a href="shortcode-media-embeds.html">MEDIA EMBEDS</a></li>
															<li><a href="shortcode-modals.html">MODAL / POPOVER / NOTIF</a></li>
															<li><a href="shortcode-navigations.html">NAVIGATIONS</a></li>
															<li><a href="shortcode-paginations.html">PAGINATIONS</a></li>
															<li><a href="shortcode-progress-bar.html">PROGRESS BARS</a></li>
															<li><a href="shortcode-widgets.html">WIDGETS</a></li>
														</ul>
													</div>

													<div className="col-md-5th">
														<ul className="list-unstyled">
															<li><a href="shortcode-pricing.html">PRICING BOXES</a></li>
															<li><a href="shortcode-process-steps.html">PROCESS STEPS</a></li>
															<li><a href="shortcode-callouts.html">CALLOUTS</a></li>
															<li><a href="shortcode-info-bars.html">INFO BARS</a></li>
															<li><a href="shortcode-blockquotes.html">BLOCKQUOTES</a></li>
															<li><a href="shortcode-responsive.html">RESPONSIVE</a></li>
															<li><a href="shortcode-sections.html">SECTIONS</a></li>
															<li><a href="shortcode-social-icons.html">SOCIAL ICONS</a></li>
														</ul>
													</div>

													<div className="col-md-5th">
														<ul className="list-unstyled">
															<li><a href="shortcode-alerts.html">ALERTS</a></li>
															<li><a href="shortcode-styled-icons.html">STYLED ICONS</a></li>
															<li><a href="shortcode-tables.html">TABLES</a></li>
															<li><a href="shortcode-tabs.html">TABS</a></li>
															<li><a href="shortcode-testimonials.html">TESTIMONIALS</a></li>
															<li><a href="shortcode-thumbnails.html">THUMBNAILS</a></li>
															<li><a href="shortcode-toggles.html">TOGGLES</a></li>
														</ul>
													</div>

												</div>
											</li>
										</ul>
									</li>
								</ul>
							</nav>
						</div>
	    return (
			<div id="header" className="sticky clearfix">
				<header id="topNav">
					<div className="container">

						{mobileMenuButton}
						
						{mobileNavs}

						<a className="logo pull-left" href="/">
							<img src="/images/logo_dark.png" alt="" />
						</a>

						{desktopNavs}

					</div>
				</header>
			</div>
	    )
	}
}

