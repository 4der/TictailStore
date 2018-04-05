import React from "react"

class Product extends React.Component {

  render() {
    return <div className="hej">
      <div><h1>{this.props.title}</h1></div>
    </div>
  }
}

export default Product
