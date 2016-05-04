import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router'

export class Coming extends React.Component {

	handleSubscribe(event) {
		event.preventDefault()
	}

	render() {
		const sliderStyle = {
			background:"url('/images/demo/1200x800/18-min.jpg')"
		}
		const countdownStyle = {
			maxWidth:550,
			margin:'auto',
			marginTop:60,
			marginBottom:80
		}
		const subscribeFormStyle = {
			maxWidth:500,
			margin:'auto'
		}
		const header = (
			<div id="header" className="sticky transparent clearfix">
				<header id="topNav">
					<div className="container">
						<ul className="pull-right list-inline mobile-block list-social-icons margin-top-30 hidden-xs">
							<li>
								<Link to="#" className="social-icon social-icon-transparent social-icon-sm social-facebook pull-left" 
											data-toggle="tooltip" 
											data-placement="bottom" 
											title="微信">
									<i className="icon-facebook"></i>
									<i className="icon-facebook"></i>
								</Link>
							</li>
							<li>
								<Link to="#" className="social-icon social-icon-transparent social-icon-sm social-twitter pull-left" 
											data-toggle="tooltip" 
											data-placement="bottom" 
											title="微博">
									<i className="icon-twitter"></i>
									<i className="icon-twitter"></i>
								</Link>
							</li>
							<li>
								<Link to="#" data-toggle="modal" 
											data-target="#contactModal" 
											className="social-icon social-icon-transparent social-icon-sm pull-left" 
											data-placement="bottom" 
											title="联系我们">
									<i className="et-envelope"></i>
									<i className="et-envelope"></i>
								</Link>
							</li>
						</ul>
						<Link className="logo pull-left" to="/">
							<img src="/images/logo_light.png" alt="" />
						</Link>
					</div>
				</header>

			</div>
			)
		const slider = (
			<section id="slider" className="fullheight" 
					 style={sliderStyle}>
				<div className="overlay dark-5"></div>

				<div className="display-table">
					<div className="display-table-cell vertical-align-middle">
						<div className="container text-center">
							<h1 className="margin-bottom-20 size-40 margin-top-80">正在施工</h1>
							<p className="size-20 font-lato text-muted">请常回来看看，我们会努力赶进度哒</p>

							<div style={countdownStyle}>
								<div className="countdown squared dark theme-style" 
									 data-labels="年,月,周,天,小时,分,秒" 
									 data-from="December 31, 2018 15:03:26"></div>
							</div>

							<div style={subscribeFormStyle}>
								<form className="validate nomargin" 
									  onSubmit={event => this.handleSubscribe(event)}
									  method="post" 
									  data-success="订阅成功！万分感谢！" 
									  data-toastr-position="top-right">
									<div className="input-group">
										<span className="input-group-addon"><i className="fa fa-envelope"></i></span>
										<input type="email" id="email" 
															name="email" 
															className="form-control required" 
															placeholder="Enter your Email"/>
										<span className="input-group-btn">
											<button className="btn btn-success" type="submit">订阅</button>
										</span>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</section>
			)
		const contactModal = (
			<div id="contactModal" className="modal fade" 
								   tabIndex="-1" 
								   role="dialog" 
								   aria-labelledby="myModalLabel" 
								   aria-hidden="true">
				<div className="modal-dialog">
					<div className="modal-content">
						<div className="modal-header">
							<button type="button" className="close" 
									data-dismiss="modal" 
									aria-label="关闭">
									<span aria-hidden="true">&times;</span>
							</button>
							<h4 className="modal-title" id="myModalLabel">联系我们</h4>
						</div>
						<form className="validate nomargin" onSubmit={event => this.handleSubscribe(event)}>

							<div className="modal-body">

								<fieldset>
									<input type="hidden" name="action" value="contact_send" />

									<div className="row">
										<div className="form-group">
											<div className="col-md-4">
												<label htmlFor="contact:name">全称 *</label>
												<input type="text" 
														className="form-control required" 
														name="contact[name][required]" 
														id="contact:name"/>
											</div>
											<div className="col-md-4">
												<label htmlFor="contact:email">E-mail地址 *</label>
												<input type="email"
														className="form-control required" 
														name="contact[email][required]" 
														id="contact:email"/>
											</div>
											<div className="col-md-4">
												<label htmlFor="contact:phone">电话</label>
												<input type="text" 
														className="form-control" 
														name="contact[phone]" 
														id="contact:phone"/>
											</div>
										</div>
									</div>
									<div className="row">
										<div className="form-group">
											<div className="col-md-8">
												<label htmlFor="contact:subject">主题 *</label>
												<input type="text" 
														className="form-control required" 
														name="contact[subject][required]" 
														id="contact:subject"/>
											</div>
											<div className="col-md-4">
												<label htmlFor="contact_department">部门</label>
												<select className="form-control pointer" name="contact[department]">
													<option value="">--- Select ---</option>
													<option value="Marketing">Marketing</option>
													<option value="Webdesign">Webdesign</option>
													<option value="Architecture">Architecture</option>
												</select>
											</div>
										</div>
									</div>
									<div className="row">
										<div className="form-group">
											<div className="col-md-12">
												<label htmlFor="contact:message">内容 *</label>
												<textarea maxLength="10000" rows="8" 
															className="form-control required" 
															name="contact[message]" 
															id="contact:message"></textarea>
											</div>
										</div>
									</div>

								</fieldset>

								<div className="row">
									<div className="col-md-12">
										
									</div>
								</div>

							</div>
							<div className="modal-footer">
								<button type="submit" 
										className="btn btn-primary pull-left">
									<i className="fa fa-check"></i> 发送
								</button>
								<button type="button" 
										className="btn btn-default" 
										data-dismiss="modal">取消</button>
							</div>

						</form>
					</div>
				</div>
			</div>
			)
	    return (
	    	<div id="wrapper">
				{header}		
				{slider}
				{contactModal}
			</div>
		)
	}
}
