import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
  constructor(props) {
    super(props)

    // THIS IS THE ONRY TIME we do direct assignment
    this.state = { lat: null, errorMessage: '' }

    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        // We called setstate!!
        this.setState({ lat: position.coords.latitude })
      },
      (err) => {
        this.setState({ errorMessage: err.message })
      }
    )
  }

  // React says we have to define render!!
  render() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Eroor: {this.state.errorMessage}</div>
    }

    if (!this.state.errorMessage && this.state.lat) {
      return <div>Latitude: {this.state.lat}</div>
    }

    return <div>Loding...</div>
  }
}

ReactDOM.render(<App />, document.querySelector('#root'))
