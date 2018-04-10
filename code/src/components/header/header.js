import React from "react"
import "./header.css"

class Header extends React.Component {


  render() {
    const {country, name, logo} = this.props
    return <div className="headercontainer">
      <div className="companyname">{name}</div>
      <div><img className="logo image" src={logo && logo[0].url} alt="business logotype"/></div>
    </div>
  }

}

export default Header
