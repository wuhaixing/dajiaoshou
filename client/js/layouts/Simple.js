import React from 'react'

class ImageBck extends React.Component {
  componentDidMount() {
  	$(document.body).addClass("enable-animation")
  }
  render() {
    return (
        <div>{this.props.children}</div>
    )
  }
}

export default ImageBck