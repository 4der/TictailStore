import React from "react"
import Products from "./products/products"
import Home from "../Pages/home"
import Category from "../Pages/category"

class App extends React.Component {

  render() {
    return (
      <div>
        Find me in src/app.js!
        <Home />
        <Products />
        <Category />
      </div>

    )
  }

}

export default App
