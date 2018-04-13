import React from "react"
import { BrowserRouter, Route, Link } from "react-router-dom"
import Products from "./products/products"
import Home from "../Pages/home"
import Store from "./store/store"
import ProductPage from "./productPage/productPage"
import Footer from "./footer/footer"

class App extends React.Component {
  state = {cart: {}}

  componentDidMount() {
    fetch(`https://api.tictail.com/v1.26/carts`, {
      method: "POST",
      body: JSON.stringify({
        store_id: "5HSF",
        attribution: "marketplace"
      }),
      headers: {
        "content-type": "application/json"
      }
    })
    .then(response => {
      return response.json()
    })
    .then(json => {
    console.log(json);
      this.setState({cart: json})
    })
  }

  updateCart = () => {
    fetch(`https://api.tictail.com/v1.26/carts/${this.state.cart.token}`)
    .then((response) => {
      return response.json()
    })
    .then((json) => {
    this.setState({ cart: json })
    })
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Store cart={this.state.cart} />
          <Route exact path="/" component={Products} />
          <Route path="/categories/:category" component={Products} />
          <Route path="/product/:productId" render={(props) => {
            return <ProductPage updateCart={this.updateCart} token={this.state.cart.token} {...props} />
            // spread operator
          }} />


          <Footer />
        </div>
      </BrowserRouter>
    )
  }

}

export default App
