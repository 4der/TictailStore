import React from "react"
import Header from "../header/header"


class Store extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      store: {}
    }
  }

  componentDidMount() {
    this.fetchData()
  }

  fetchData = () => {
    fetch("https://api.tictail.com/v1.26/stores/5HSF").then((response) => {
      return response.json()
    }).then((store) => {
      this.setState({
        store: store
      })
      console.log(store)
    })
  }


  render() {
    const {store} = this.state
    const { cart } = this.props
    return (
      <div>
        <Header
          name={store.name}
          logo={store.logotype}
          cart={cart}
        />

        </div>
    )
  }
}

export default Store
