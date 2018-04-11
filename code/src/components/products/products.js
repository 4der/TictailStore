import React from "react"
import Product from "../product/product"
import "./style.css"
import { Link } from "react-router-dom"
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

  componentDidUpdate(prevProps) {
    if ( prevProps.match.params.category !== this.props.match.params.category ) {
      this.fetchData()
    }
    console.log("prev", prevProps.match.params.category)
    console.log("this", this.props.match.params.category)
  }

  fetchData = () => {

    fetch("https://api.tictail.com/v1.26/stores/5HSF/products").then((response) => {
      return response.json()
    }).then((products) => {

      if (this.props.match.params.category === undefined) {
        return this.setState({
          products: products
        })
      }

      const filteredProducts = products.filter(product => {
        return product.categories[0].slug === this.props.match.params.category
      })

      this.setState({
        products: filteredProducts
      })
      console.log(products)
    })
  }

  render() {

    return (
      <div>
          <div className="products-container">
          {this.state.products.map((product) => {
            return <Link to={`/product/${product.id}`}><Product
              title={product.title}
              price={product.price}
              images={product.images} /> </Link>
            })}
            </div>
        </div>

    )
  }

}

export default Products
