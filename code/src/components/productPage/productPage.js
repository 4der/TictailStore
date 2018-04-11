import React from "react"
import "./productPage.css"
import Products from "../products/products"

class ProductPage extends React.Component {
  state = {
    product: null,
  }

  componentDidMount() {
    this.fetchData()
  }

  fetchData = () => {
    const productId = this.props.match.params.productId

    fetch(`https://api.tictail.com/v1.26/stores/5HSF/products/${productId}`).then(response => {
      return response.json()
    }).then((product) => {
      this.setState({product: product})
    })
  }

  render() {
    return <div className="Box">
    <div className="prodBox">
      <div className="prodImg">
        <img className="product-img" src={this.state.product && this.state.product.images[0].url} alt="photos" />
      </div>
      <div className="content">
      <div className="productTitle">{this.state.product &&  this.state.product.title}</div>
      <div><p>{this.state.product &&  this.state.product.price / 100} SEK</p></div>

    <div className="productInfo"><p>{this.state.product && this.state.product.description}</p></div>

      <div>
        <button className="addButton">Add to bag</button>
      </div>
      </div>
      </div>
    </div>
  }
}

export default ProductPage
