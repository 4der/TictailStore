import React from "react"
import Product from "../product/product"

class Products extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      products: []
    }
  }

  componentDidMount() {
    this.fetchData()
  }

  fetchData = () => {
    fetch("https://api.tictail.com/v1.26/stores/5HSF/products").then((response) => {
      return response.json()
    }).then((products) => {
      this.setState({
        products: products
      })
      console.log(products)
    })
  }

  render() {
    return (
      <div className="products-container">
          <h1>hej</h1>
          {this.state.products.map((product) => {
            return <Product
              title={product.title}
              price={product.price}
              images={product.images} />
            })}
        </div>

    )
  }

}

export default Products
