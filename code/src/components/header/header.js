import React from "react"

class Header extends React.Component {


  render() {
    const {country, name} = this.props
    return <div className="hej">
      <div><h1>{name}</h1></div>
      <div>{country}</div>
      {/* <div><p>{this.props.price / 100}</p></div>
      <div><img src={this.props.images[0].url} alt="photos" /></div>
      <div><button>Add to bag</button></div> */}
    </div>
  }

}

export default Header
