import React from "react"
import "./productPage.css"

class Product extends React.Component {
  componentDidMount() {

    this.fetchData()
  }

  fetchData = () => {
  const productId = this.props.match.params.productId
  console.log('productId', productId)

    fetch(`https://api.tictail.com/v1.26/stores/5HSF/products/${productId}`).then((response) => {
      return response.json()
    }).then((product) => {

      console.log(product)
    })
  }

  render() {
    return <div className="product-box">

    </div>
  }
}

export default Product
