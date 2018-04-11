import React from "react"
import { BrowserRouter, Route, Link } from "react-router-dom"
import "./header.css"
import coolgal from "../../images/coolgal.jpg"
import shoppingbag from "../../images/shoppingbag.jpg"

class Header extends React.Component {


  render() {
    const {country, name, logo} = this.props
    return <div>
      <div className="header-container">
        <Link to="/"><div className="companyname">{name}</div></Link>
        <div><img className="logo image" src={logo && logo[0].url} alt="business logotype"/></div>

        <div className="bag-img">
          <img src={shoppingbag} alt="put your stuff here!" />
        </div>
      </div>

      <div className="hero-container">
        <div className="hero-img">
          <img src={coolgal} alt="hello!" />
        </div>

        <div className="categories-container">
          <div className="shop-headline">Look out <br /> for the news</div>
          <div className="category-txt-container">
            <div className="category-txt"><Link to="/categories/shoes">Shoes</Link></div>
            <div className="category-txt"><Link to="/categories/jewelry">Jewelry</Link></div>
            <div className="category-txt"><Link to="/categories/shirts">Shirts</Link></div>
          </div>
        </div>
      </div>
    </div>
  }

}

export default Header
