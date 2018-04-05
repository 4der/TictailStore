import React from "react"
import "./style.css"

class Sidebar extends React.Component {

  render() {
    return <div className="sideBar">
      <div>{this.props.title}</div>
    </div>
  }
}


export default Sidebar
