import React from "react"
import { BrowserRouter, Route, Link } from "react-router-dom"
import Products from "./products/products"
import Home from "../Pages/home"
// import Category from "../Pages/category"
import Store from "./store/store"
import Categories from "./categories/categories"
import ProductPage from "./productPage/productPage"
import CategoryPage from "./categoryPage/categoryPage"
import Footer from "./footer/footer"


class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <div>
          <Store />

          <div className="categoriesContainer">
            <div><Link to="/">Home</Link></div>
            <div><Link to="/categories/shoes">Shoes</Link></div>
            <div><Link to="/categories/jewelry">Jewelry</Link></div>
            <div><Link to="/categories/shirts">Shirts</Link></div>
          </div>

          <Route exact path="/" component={Home} />


          <Categories />
          <Products />

          <Footer />
        </div>
      </BrowserRouter>
    )
  }

}

export default App
