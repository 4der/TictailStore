import React from "react"
import { BrowserRouter, Route, Link } from "react-router-dom"
import Products from "./products/products"
import Home from "../Pages/home"
// import Category from "../Pages/category"
import Store from "./store/store"
import ProductPage from "./productPage/productPage"
import Footer from "./footer/footer"

class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <div>
          <Store />



          <Route exact path="/" component={Products} />
          <Route path="/categories/:category" component={Products} />
          <Route path="/product/:productId" component={ProductPage} />


          <Footer />
        </div>
      </BrowserRouter>
    )
  }

}

export default App
