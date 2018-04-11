import React from "react"
import "./style.css"

class Product extends React.Component {


  render() {
    return <div className="product-box">
      <div>
        <img className="product-img" src={this.props.images[0].url} alt="photos" />
      </div>
      <div className="product-title">{this.props.title}</div>
      <div><p>{this.props.price / 100} SEK</p></div>

      <div>
        <button className="add-to-bag-button">Add to bag</button>
      </div>
    </div>
  }
}

export default Product
