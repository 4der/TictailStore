import React from "react"

class Product extends React.component {

  render() {
    return <div className="hej">
      <div><h1>{this.props.name}</h1></div>
    </div>
  }
}

export default Product
