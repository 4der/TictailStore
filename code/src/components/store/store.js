import React from "react"
import Header from "../header/header"
import coolgal from "../../images/coolgal.jpg"

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
    console.log(store.logotype, 'store.logotype');
    console.log(store.name, 'store.name');
    return (
      <div className="header">
        <Header
          name={store.name}
          country={store.country}
          logo={store.logotype}
        />
        <div className="hero-img">
          <img src={coolgal} alt="hello" />
        </div>
        </div>
    )
  }
}

export default Store
