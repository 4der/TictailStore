import React from "react"
import "./product.css"

class Product extends React.Component {

  render() {
    return (
      <div className="product-box">
        <div className="product-image-box">
          <div className="product-image-padder" />
          <div className="product-img-wrapper">
            <img className="product-img" src={this.props.images[0].url} alt="photos" />
          </div>
        </div>

        <div className="product-info">
          <div className="product-title">{this.props.title}</div>

          <div className="price-txt">
            <div><p>{this.props.price / 100} SEK</p></div>
          </div>
        </div>

        <div>
          <button className="add-to-bag-button">ADD TO BAG</button>
        </div>

      </div>
    )
  }
}

export default Product
