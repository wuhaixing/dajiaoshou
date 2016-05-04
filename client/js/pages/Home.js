import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router'

export class Home extends React.Component {
	render() {
	    const welcome = 
	    		<section>
					<div className="container">

						<div className="text-center">
							<h1 className="nomargin-bottom">
								<small>学习</small> <span>创新</span> <small>实践</small>
							</h1>
							<h2 className="col-sm-10 col-sm-offset-1 nomargin-bottom weight-300 text-muted size-20">
								努力为乐于实践的创造者寻找专业知识和技术指导
							</h2>
						</div>
					</div>
				</section>
		const slider = 
				<section>
					<div className="container">

						{/*--
							data-controlNav="thumbnails" 	- thumbnails navigation
							data-controlNav="true" 		- arrows navigation
							data-controlNav="false"		- no navigation
							data-arrowNav="false"		- no arrows navigation
							data-slideshowSpeed="7000"	- slideshow speed
							data-pauseOnHover="true"	- pause on mouse over
						--*/}
						<div className="flexslider">
							<ul className="slides">
							
								{/*-- Slide 1 --*/}
								<li>
									<a href="#">
										<img src="/images/demo/content_slider/10-min.jpg" alt="Slide 2"/>
										<div className="flex-caption">Flexslider Caption #1</div>
									</a>
								</li>
								
								{/*-- Slide 2 --*/}
								<li>
									<a href="#">
										<img src="/images/demo/content_slider/3-min.jpg" alt="Slide 3"/>
										<div className="flex-caption">Flexslider Caption #2</div>
									</a>
								</li>
								
								{/*-- Slide 3 --*/}
								<li>
									<a href="#">
										<img src="/images/demo/content_slider/21-min.jpg" alt="Slide 4"/>
										<div className="flex-caption">Flexslider Caption #3</div>
									</a>
								</li>
								
								{/*-- Slide 4 --*/}
								<li>
									<a href="#">
										<img src="/images/demo/content_slider/23-min.jpg" alt="Slide 5"/>
										<div className="flex-caption">Flexslider Caption #4</div>
									</a>
								</li>

							</ul>
						</div>

						{/*-- callout --*/}
						<div className="callout callout-transparent">
							<div className="">{/*-- add here .container if needed for fullwidth --*/}
								<div className="row">

									<div className="col-md-9">{/*-- title + shortdesc --*/}
										<h3>Call now at +800-565-2390 and get 15% discount!</h3>
										<p>If so, click to buy now, including <strong>lifetime upgrade</strong> for free!</p>
									</div>

									<div className="col-md-3 text-right">{/*-- button --*/}
										<a href="#purchase" rel="nofollow" target="_blank" className="btn btn-default btn-lg">马上注册</a>
									</div>

								</div>
							</div>
						</div>
						{/*-- /callout --*/}

					</div>
				</section>
		const portfolio = 
				<section>
					<div className="container">

						<div id="portfolio" className="portfolio-nogutter">

							<ul className="nav nav-pills mix-filter margin-bottom-60">
								<li data-filter="all" className="filter active"><a href="#">All</a></li>
								<li data-filter="development" className="filter"><a href="#">Development</a></li>
								<li data-filter="photography" className="filter"><a href="#">Photography</a></li>
								<li data-filter="design" className="filter"><a href="#">Design</a></li>
							</ul>


							<div className="row mix-grid">

								<div className="col-md-3 col-sm-3 mix design">{/*-- item --*/}

									<div className="item-box">
										<figure>
											<span className="item-hover">
												<span className="overlay dark-5"></span>
												<span className="inner">

													{/*-- lightbox --*/}
													<a className="ico-rounded lightbox" href="/images/demo/mockups/1200x800/8-min.jpg" data-plugin-options='{"type":"image"}'>
														<span className="fa fa-plus size-20"></span>
													</a>

													{/*-- details --*/}
													<a className="ico-rounded" href="portfolio-single-slider.html">
														<span className="glyphicon glyphicon-option-horizontal size-20"></span>
													</a>

												</span>
											</span>

											{/*-- carousel --*/}
											<div className="owl-carousel buttons-autohide controlls-over nomargin" data-plugin-options='{"singleItem": true, "autoPlay": 4000, "navigation": false, "pagination": true, "transitionStyle":"goDown"}'>
												<div>
													<img className="img-responsive" src="/images/demo/mockups/600x399/8-min.jpg" width="600" height="399" alt=""/>
												</div>
												<div>
													<img className="img-responsive" src="/images/demo/mockups/600x399/9-min.jpg" width="600" height="399" alt=""/>
												</div>
												<div>
													<img className="img-responsive" src="/images/demo/mockups/600x399/10-min.jpg" width="600" height="399" alt=""/>
												</div>
											</div>
											{/*-- /carousel --*/}


										</figure>

										<div className="item-box-desc">
											<h3>Street Photography</h3>
											<ul className="list-inline categories nomargin">
												<li><a href="#">Photography</a></li>
												<li><a href="#">Design</a></li>
											</ul>
										</div>

									</div>

								</div>{/*-- /item --*/}


								<div className="col-md-3 col-sm-3 mix development">{/*-- item --*/}

									<div className="item-box">
										<figure>
											<span className="item-hover">
												<span className="overlay dark-5"></span>
												<span className="inner">

													{/*-- lightbox --*/}
													<a className="ico-rounded lightbox" href="/images/demo/mockups/1200x800/9-min.jpg" data-plugin-options='{"type":"image"}'>
														<span className="fa fa-plus size-20"></span>
													</a>

													{/*-- details --*/}
													<a className="ico-rounded" href="portfolio-single-slider.html">
														<span className="glyphicon glyphicon-option-horizontal size-20"></span>
													</a>

												</span>
											</span>

											<img className="img-responsive" src="/images/demo/mockups/600x399/9-min.jpg" width="600" height="399" alt=""/>
										</figure>

										<div className="item-box-desc">
											<h3>Nature Photography</h3>
											<ul className="list-inline categories nomargin">
												<li><a href="#">Photography</a></li>
												<li><a href="#">Design</a></li>
											</ul>
										</div>

									</div>

								</div>{/*-- /item --*/}


								<div className="col-md-3 col-sm-3 mix photography">{/*-- item --*/}

									<div className="item-box">
										<figure>
											<span className="item-hover">
												<span className="overlay dark-5"></span>
												<span className="inner">

													{/*-- lightbox --*/}
													<a className="ico-rounded lightbox" href="/images/demo/mockups/1200x800/10-min.jpg" data-plugin-options='{"type":"image"}'>
														<span className="fa fa-plus size-20"></span>
													</a>

													{/*-- details --*/}
													<a className="ico-rounded" href="portfolio-single-slider.html">
														<span className="glyphicon glyphicon-option-horizontal size-20"></span>
													</a>

												</span>
											</span>

											<img className="img-responsive" src="/images/demo/mockups/600x399/10-min.jpg" width="600" height="399" alt=""/>
										</figure>

										<div className="item-box-desc">
											<h3>Fashion Design</h3>
											<ul className="list-inline categories nomargin">
												<li><a href="#">Photography</a></li>
												<li><a href="#">Design</a></li>
											</ul>
										</div>

									</div>

								</div>{/*-- /item --*/}


								<div className="col-md-3 col-sm-3 mix design">{/*-- item --*/}

									<div className="item-box">
										<figure>
											<span className="item-hover">
												<span className="overlay dark-5"></span>
												<span className="inner">

													{/*-- lightbox --*/}
													<a className="ico-rounded lightbox" href="/images/demo/mockups/1200x800/11-min.jpg" data-plugin-options='{"type":"image"}'>
														<span className="fa fa-plus size-20"></span>
													</a>

													{/*-- details --*/}
													<a className="ico-rounded" href="portfolio-single-slider.html">
														<span className="glyphicon glyphicon-option-horizontal size-20"></span>
													</a>

												</span>
											</span>

											<img className="img-responsive" src="/images/demo/mockups/600x399/11-min.jpg" width="600" height="399" alt=""/>
										</figure>

										<div className="item-box-desc">
											<h3>Ocean Project</h3>
											<ul className="list-inline categories nomargin">
												<li><a href="#">Photography</a></li>
												<li><a href="#">Design</a></li>
											</ul>
										</div>

									</div>

								</div>{/*-- /item --*/}


								<div className="col-md-3 col-sm-3 mix design">{/*-- item --*/}

									<div className="item-box">
										<figure>
											<span className="item-hover">
												<span className="overlay dark-5"></span>
												<span className="inner">

													{/*-- lightbox --*/}
													<a className="ico-rounded lightbox" href="/images/demo/mockups/1200x800/12-min.jpg" data-plugin-options='{"type":"image"}'>
														<span className="fa fa-plus size-20"></span>
													</a>

													{/*-- details --*/}
													<a className="ico-rounded" href="portfolio-single-slider.html">
														<span className="glyphicon glyphicon-option-horizontal size-20"></span>
													</a>

												</span>
											</span>

											<img className="img-responsive" src="/images/demo/mockups/600x399/12-min.jpg" width="600" height="399" alt=""/>
										</figure>

										<div className="item-box-desc">
											<h3>Architect Project</h3>
											<ul className="list-inline categories nomargin">
												<li><a href="#">Architecture</a></li>
												<li><a href="#">Design</a></li>
											</ul>
										</div>

									</div>

								</div>{/*-- /item --*/}


								<div className="col-md-3 col-sm-3 mix development">{/*-- item --*/}

									<div className="item-box">
										<figure>
											<span className="item-hover">
												<span className="overlay dark-5"></span>
												<span className="inner">

													{/*-- lightbox --*/}
													<a className="ico-rounded lightbox" href="/images/demo/mockups/1200x800/13-min.jpg" data-plugin-options='{"type":"image"}'>
														<span className="fa fa-plus size-20"></span>
													</a>

													{/*-- details --*/}
													<a className="ico-rounded" href="portfolio-single-slider.html">
														<span className="glyphicon glyphicon-option-horizontal size-20"></span>
													</a>

												</span>
											</span>

											<img className="img-responsive" src="/images/demo/mockups/600x399/13-min.jpg" width="600" height="399" alt=""/>
										</figure>

										<div className="item-box-desc">
											<h3>Speaker Design</h3>
											<ul className="list-inline categories nomargin">
												<li><a href="#">Audio</a></li>
												<li><a href="#">Design</a></li>
											</ul>
										</div>

									</div>

								</div>{/*-- /item --*/}


								<div className="col-md-3 col-sm-3 mix photography">{/*-- item --*/}

									<div className="item-box">
										<figure>
											<span className="item-hover">
												<span className="overlay dark-5"></span>
												<span className="inner">

													{/*-- lightbox --*/}
													<a className="ico-rounded lightbox" href="/images/demo/mockups/1200x800/14-min.jpg" data-plugin-options='{"type":"image"}'>
														<span className="fa fa-plus size-20"></span>
													</a>

													{/*-- details --*/}
													<a className="ico-rounded" href="portfolio-single-slider.html">
														<span className="glyphicon glyphicon-option-horizontal size-20"></span>
													</a>

												</span>
											</span>

											<img className="img-responsive" src="/images/demo/mockups/600x399/14-min.jpg" width="600" height="399" alt=""/>
										</figure>

										<div className="item-box-desc">
											<h3>Mobile Development</h3>
											<ul className="list-inline categories nomargin">
												<li><a href="#">Development</a></li>
												<li><a href="#">Design</a></li>
											</ul>
										</div>

									</div>

								</div>{/*-- /item --*/}


								<div className="col-md-3 col-sm-3 mix design">{/*-- item --*/}

									<div className="item-box">
										<figure>
											<span className="item-hover">
												<span className="overlay dark-5"></span>
												<span className="inner">

													{/*-- lightbox --*/}
													<a className="ico-rounded lightbox" href="/images/demo/mockups/1200x800/15-min.jpg" data-plugin-options='{"type":"image"}'>
														<span className="fa fa-plus size-20"></span>
													</a>

													{/*-- details --*/}
													<a className="ico-rounded" href="portfolio-single-slider.html">
														<span className="glyphicon glyphicon-option-horizontal size-20"></span>
													</a>

												</span>
											</span>

											<img className="img-responsive" src="/images/demo/mockups/600x399/15-min.jpg" width="600" height="399" alt=""/>
										</figure>

										<div className="item-box-desc">
											<h3>Nature Art</h3>
											<ul className="list-inline categories nomargin">
												<li><a href="#">Nature</a></li>
												<li><a href="#">Art</a></li>
											</ul>
										</div>

									</div>

								</div>{/*-- /item --*/}


								<div className="col-md-3 col-sm-3 mix design">{/*-- item --*/}

									<div className="item-box">
										<figure>
											<span className="item-hover">
												<span className="overlay dark-5"></span>
												<span className="inner">

													{/*-- lightbox --*/}
													<a className="ico-rounded lightbox" href="/images/demo/mockups/1200x800/16-min.jpg" data-plugin-options='{"type":"image"}'>
														<span className="fa fa-plus size-20"></span>
													</a>

													{/*-- details --*/}
													<a className="ico-rounded" href="portfolio-single-slider.html">
														<span className="glyphicon glyphicon-option-horizontal size-20"></span>
													</a>

												</span>
											</span>

											<img className="img-responsive" src="/images/demo/mockups/600x399/16-min.jpg" width="600" height="399" alt=""/>
										</figure>

										<div className="item-box-desc">
											<h3>Nature Art</h3>
											<ul className="list-inline categories nomargin">
												<li><a href="#">Nature</a></li>
												<li><a href="#">Art</a></li>
											</ul>
										</div>

									</div>

								</div>{/*-- /item --*/}


								<div className="col-md-3 col-sm-3 mix photography">{/*-- item --*/}

									<div className="item-box">
										<figure>
											<span className="item-hover">
												<span className="overlay dark-5"></span>
												<span className="inner">

													{/*-- lightbox --*/}
													<a className="ico-rounded lightbox" href="/images/demo/mockups/1200x800/1-min.jpg" data-plugin-options='{"type":"image"}'>
														<span className="fa fa-plus size-20"></span>
													</a>

													{/*-- details --*/}
													<a className="ico-rounded" href="portfolio-single-slider.html">
														<span className="glyphicon glyphicon-option-horizontal size-20"></span>
													</a>

												</span>
											</span>

											<img className="img-responsive" src="/images/demo/mockups/600x399/1-min.jpg" width="600" height="399" alt=""/>
										</figure>

										<div className="item-box-desc">
											<h3>Mobile Development</h3>
											<ul className="list-inline categories nomargin">
												<li><a href="#">Development</a></li>
												<li><a href="#">Design</a></li>
											</ul>
										</div>

									</div>

								</div>{/*-- /item --*/}


								<div className="col-md-3 col-sm-3 mix design">{/*-- item --*/}

									<div className="item-box">
										<figure>
											<span className="item-hover">
												<span className="overlay dark-5"></span>
												<span className="inner">

													{/*-- lightbox --*/}
													<a className="ico-rounded lightbox" href="/images/demo/mockups/1200x800/2-min.jpg" data-plugin-options='{"type":"image"}'>
														<span className="fa fa-plus size-20"></span>
													</a>

													{/*-- details --*/}
													<a className="ico-rounded" href="portfolio-single-slider.html">
														<span className="glyphicon glyphicon-option-horizontal size-20"></span>
													</a>

												</span>
											</span>

											<img className="img-responsive" src="/images/demo/mockups/600x399/2-min.jpg" width="600" height="399" alt=""/>
										</figure>

										<div className="item-box-desc">
											<h3>Nature Art</h3>
											<ul className="list-inline categories nomargin">
												<li><a href="#">Nature</a></li>
												<li><a href="#">Art</a></li>
											</ul>
										</div>

									</div>

								</div>{/*-- /item --*/}


								<div className="col-md-3 col-sm-3 mix design">{/*-- item --*/}

									<div className="item-box">
										<figure>
											<span className="item-hover">
												<span className="overlay dark-5"></span>
												<span className="inner">

													{/*-- lightbox --*/}
													<a className="ico-rounded lightbox" href="/images/demo/mockups/1200x800/3-min.jpg" data-plugin-options='{"type":"image"}'>
														<span className="fa fa-plus size-20"></span>
													</a>

													{/*-- details --*/}
													<a className="ico-rounded" href="portfolio-single-slider.html">
														<span className="glyphicon glyphicon-option-horizontal size-20"></span>
													</a>

												</span>
											</span>

											<img className="img-responsive" src="/images/demo/mockups/600x399/3-min.jpg" width="600" height="399" alt=""/>
										</figure>

										<div className="item-box-desc">
											<h3>Nature Art</h3>
											<ul className="list-inline categories nomargin">
												<li><a href="#">Nature</a></li>
												<li><a href="#">Art</a></li>
											</ul>
										</div>

									</div>

								</div>{/*-- /item --*/}


							</div>

						</div>

					</div>
				</section>

		const testimonials =
				<section>
					<div className="container">

						<div className="row">
							<div className="col-md-4">
								<div className="testimonial testimonial-bordered padding-15">
									<figure className="pull-left">
										<img className="rounded" src="/images/demo/people/300x300/2-min.jpg" alt="" />
									</figure>
									<div className="testimonial-content">
										<p>Incidunt deleniti blanditiis quas aperiam recusandae consequatur ullam quibusdam cum libero!</p>
										<cite>
											Felicia Doe
											<span>Company Ltd.</span>
										</cite>
									</div>
								</div>
							</div>
							<div className="col-md-4">
								<div className="testimonial testimonial-bordered padding-15">
									<figure className="pull-left">
										<img className="rounded" src="/images/demo/people/300x300/1-min.jpg" alt="" />
									</figure>
									<div className="testimonial-content">
										<p>Incidunt deleniti blanditiis quas aperiam recusandae consequatur ullam quibusdam cum libero!</p>
										<cite>
											Joana Doe
											<span>Company Ltd.</span>
										</cite>
									</div>
								</div>
							</div>
							<div className="col-md-4">
								<div className="testimonial testimonial-bordered padding-15">
									<figure className="pull-left">
										<img className="rounded" src="/images/demo/people/300x300/6-min.jpg" alt="" />
									</figure>
									<div className="testimonial-content">
										<p>Incidunt deleniti blanditiis quas aperiam recusandae consequatur ullam quibusdam cum libero!</p>
										<cite>
											Melissa Doe
											<span>Company Ltd.</span>
										</cite>
									</div>
								</div>
							</div>
						</div>

					</div>
				</section>

		const callout =
				<div className="alert alert-transparent bordered-bottom nomargin">
					<div className="container">

						<div className="row">

							<div className="col-md-9 col-sm-12">{/*-- left text --*/}
								<h3>Call now at <span><strong>+800-565-2390</strong></span> and get 15% discount!</h3>
								<p className="font-lato weight-300 size-20 nomargin-bottom">
									We truly care about our users and our product.
								</p>
							</div>{/*-- /left text --*/}

							
							<div className="col-md-3 col-sm-12 text-right">{/*-- right btn --*/}
								<a href="page-contact-1.html" className="btn btn-primary btn-lg">CONTACT US</a>
							</div>{/*-- /right btn --*/}

						</div>

					</div>
				</div>
	    return (
			<div>

				{welcome}

				{slider}

				{portfolio}

				{testimonials}

				{callout}

			</div>
		)
	}
}
