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
    }).then((json) => {
      this.setState({
      })
      console.log(json)
    })
  }

  render() {
    return (
      <div className="products-container">
          {this.state.products.map(product => {
            return <Product
              name={product.name}
              />
            })}
        </div>

    )
  }

}

export default Products
