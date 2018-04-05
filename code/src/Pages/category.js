import React from "react"

class Category extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      category: []
    }
  }

  componentDidMount() {
    this.fetchData()
  }

  fetchData = () => {
    fetch("https://api.tictail.com/v1.26/stores/5HSF/categories").then((response) => {
      return response.json()
    }).then((json) => {
      this.setState({
        channels: json.channels
      })
      console.log(json)
    })
  }

  render() {
    return (
      <div>
        Category!
      </div>
    )
  }

}

export default Category
