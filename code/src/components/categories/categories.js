import React from "react"
import Sidebar from "../sidebar/sidebar"


class Categories extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      categories: []
    }
  }

  componentDidMount() {
    this.fetchData()
  }

  fetchData = () => {
    fetch("https://api.tictail.com/v1.26/stores/5HSF/categories").then((response) => {
      return response.json()
    }).then((categories) => {
      this.setState({
        categories: categories
      })
      console.log(categories)
    })
  }
  render() {
    return (
      <div className="sidebar">
      </div>

    )
  }

}


export default Categories
