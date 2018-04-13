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
  createMarkup() {
    return {__html: this.state.product && this.state.product.description}
  }

  goToCheckout = () => {
    console.log(this.state.product)
    const productId = this.state.product.id
    const variationId = this.state.product.variations[0].id
    const token = this.props.token
    console.log(productId, variationId)

    return fetch(`https://api.tictail.com/v1.26/carts/${token}/items`, {
      method: "POST",
      body: JSON.stringify({
        product_id: productId,
        variation_id: variationId,
        quantity: 1
      }),
      headers: {
        "content-type": "application/json"
      }
    })
    .then((response) => {
      console.log(response);
      return response.json()
    })
    .then((json) => {
    this.props.updateCart()
    })
    .catch(error => {
      console.log(error)
    })
  }
  render() {
    return (
     <div className="Box">
      <div className="prodBox">

        <div className="prodImg">
          <img className="product-img" src={this.state.product && this.state.product.images[0].url} alt="photos" />
        </div>

        <div className="content">
            <div className="productInfoContainer">
              <div className="productTitle">{this.state.product &&  this.state.product.title}</div>
              <div><p  className="productPrice">{this.state.product &&  this.state.product.price / 100} SEK</p></div>
              <div className="productInfo" dangerouslySetInnerHTML={this.createMarkup()} />
            </div>

            <div>
              <button onClick={this.goToCheckout} className="add-to-bag-button-big">Add to bag</button>
            </div>
        </div>

      </div>
    </div>
    )}
}

export default ProductPage
