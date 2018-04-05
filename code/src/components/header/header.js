import React from "react"

class Header extends React.Component {


  render() {
    const {country, name, logo} = this.props
    return <div className="hej">
      <div><h1>{name}</h1></div>
      <div>{country}</div>
    </div>
  }

}

export default Header
