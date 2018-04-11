import React from "react"
import { BrowserRouter, Route, Link } from "react-router-dom"
import "./header.css"
import coolgal from "../../images/coolgal.jpg"
import bag from "../../images/bag.png"

class Header extends React.Component {


  render() {
    const {country, name, logo} = this.props
    return <div>
      <div className="header-container">
        <div className="companyname">{name}</div>
        <div><img className="logo image" src={logo && logo[0].url} alt="business logotype"/></div>

        <div className="bag-img">
          <img src={bag} alt="put your stuff here!" />
        </div>
      </div>

      <div className="hero-container">
        <div className="hero-img">
          <img src={coolgal} alt="hello!" />
        </div>

        <div className="categories-container">
          <div><Link to="/">Home</Link></div>
          <div><Link to="/categories/shoes">Shoes</Link></div>
          <div><Link to="/categories/jewelry">Jewelry</Link></div>
          <div><Link to="/categories/shirts">Shirts</Link></div>
        </div>
      </div>

    </div>
  }

}

export default Header
