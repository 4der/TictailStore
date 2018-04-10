import React from "react"
import { BrowserRouter, Route, Link } from "react-router-dom"
import Products from "./products/products"
import Home from "../Pages/home"
// import Category from "../Pages/category"
import Store from "./store/store"
import Categories from "./categories/categories"
import ProductPage from "./productPage/productPage"
import CategoryPage from "./categoryPage/categoryPage"


class App extends React.Component {

  render() {
    return (

<BrowserRouter>
      <div>




        <Store />
        <Categories />
        <Products />



      </div>
</BrowserRouter>
    )
  }

}

export default App
