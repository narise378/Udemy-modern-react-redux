import React, { useState } from 'react'
//import Accordion from './components/Accordion'
//import Search from './components/Search'
import Dropdown from './components/Dropdown'

// const items = [
//   {
//     title: 'What is React？',
//     content: 'React is a front end javascript framework',
//   },
//   {
//     title: 'Why use React?',
//     content: 'React is a favorite JS library among engineers',
//   },
//   {
//     title: 'How do you React?',
//     content: 'You use React by createing component',
//   },
// ]

const options = [
  {
    label: 'The Color Red',
    value: 'red',
  },
  {
    label: 'The Color Green',
    value: 'green',
  },
  {
    label: 'The Color Blue',
    value: 'blue',
  },
]

export default () => {
  const [selected, setSelected] = useState(options[0])
  const [showDropdown, setShowDorpdown] = useState(true)
  return (
    <div>
      <button onClick={() => setShowDorpdown(!showDropdown)}>
        Toggle Dropdown
      </button>
      {showDropdown ? (
        <Dropdown
          selected={selected}
          onSelectedChange={setSelected}
          options={options}
        />
      ) : null}
    </div>
  )
}
