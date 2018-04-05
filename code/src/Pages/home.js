import React from "react"

class Home extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      home: []
    }
  }

  componentDidMount() {
    this.fetchData()
  }

  fetchData = () => {
    fetch("https://api.tictail.com/v1.26/stores/5HSF").then((response) => {
      return response.json()
    }).then((json) => {
      this.setState({
      })
      console.log(json)
    })
  }

  render() {
    return (
      <div>
        home!
      </div>
    )
  }

}

export default Home
