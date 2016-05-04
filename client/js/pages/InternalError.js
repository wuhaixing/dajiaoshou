import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router'

export class InternalError extends React.Component {
	render() {
	    return (
			<div className="error">
				{/*-- Heading --*/}
				<h2><strong><span className="color">!</span>404<span className="color">!</span></strong></h2>
				{/*-- Heading --*/}
				<h3>未找到您要访问的页面.</h3>
				{/*-- Paragraph --*/}
				<p>请检查您要访问的页面链接，或与我们联系！</p>
				<ul className="list-inline">
					{/*-- List --*/}
					<li><Link to='/'>首页</Link></li>
	                <li><Link to='/fixtures'>赛程&结果</Link></li>
	                <li><Link to='/team'>球队</Link></li>
	                <li><Link to='/news'>新闻动态</Link></li>
	                <li><Link to='/shop'>纪念品店</Link></li>
				</ul>
			</div> 
		)
	}
}
