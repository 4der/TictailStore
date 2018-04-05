import React from "react"
import "./style.css"

class Product extends React.Component {

  render() {
    return <div className="product-box">
      <div><h1>{this.props.title}</h1></div>
      <div><p>{this.props.price / 100}</p></div>
      <div>
        <img className="product-img" src={this.props.images[0].url} alt="photos" />
      </div>
      <div><button>Add to bag</button></div>
    </div>
  }
}

export default Product
