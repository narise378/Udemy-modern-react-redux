// Import the React and ReactDOM libraries
import React from 'react'
import ReactDOM from 'react-dom'

// function getButtonText() {
//   return 'Click on Me!'
// }

// Create a react Component
const App = () => {
  const buttonText = { text: 'Click Me!' }
  const labelText = 'Enter Name : '
  const style = { backgroundColor: 'blue', color: 'white' }
  return (
    <div>
      <label className="label" htmlFor="name">
        {labelText}
      </label>
      <input id="name" type="text" />
      <button style={style}>{buttonText.text}</button>
    </div>
  )
}
// Take the react Component and show it on the screen
ReactDOM.render(<App />, document.querySelector('#root'))
