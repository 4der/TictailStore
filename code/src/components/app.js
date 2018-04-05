import React from "react"
import Products from "./products/products"
import Home from "../Pages/home"
// import Category from "../Pages/category"
import Store from "./store/store"
import Categories from "./categories/categories"


class App extends React.Component {

  render() {
    return (
      <div>



        <Store />
        <Categories />
        <Products />



      </div>

    )
  }

}

export default App
