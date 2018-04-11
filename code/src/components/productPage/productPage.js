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
    return <div className="product-box">
      <div>
        <img className="product-img" src={this.state.product && this.state.product.images[0].url} alt="photos" />
      </div>
      <div className="product-title">{this.state.product &&  this.state.product.title}</div>
      <div><p>{this.state.product &&  this.state.product.price / 100}</p></div>

      <div>
        <button className="add-to-bag-button">Add to bag</button>
      </div>
    </div>
  }
}

export default ProductPage
