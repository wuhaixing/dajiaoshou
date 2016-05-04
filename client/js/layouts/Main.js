import React from 'react'
import SlideTop from './components/SlideTop'
import Preloader from './components/Preloader'
import Header from './components/Header'
import Footer from './components/Footer'

class Main extends React.Component {
  signoutHandler() {
    this.props.history.replaceState(null, '/')
  }
  componentDidMount() {
    $(document.body).addClass("smoothscroll enable-animation")
  }
  render() {
    return (
      <div>
      	<SlideTop/>
        <div id="wrapper">
          <Header/>
          {this.props.children} 
          <Footer/>
        </div>
        <a href="#" id="toTop"></a> 
        <Preloader/>      
      </div>
    )
  }
}

export default Main