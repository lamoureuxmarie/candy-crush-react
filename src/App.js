import './App.css'
import { useEffect, useState } from 'react'

const width = 8
const candyColours = [
  'blue',
  'green',
  'orange',
  'purple',
  'red',
  'yellow'
]


export default function App() {
  // save randomColourArrangement to a State
  const [ currentColourArrangement, setColourArrangement ] = useState([])

  const createBoard = () => {
    const randomColourArrangement = []
    // as long as number of squares is inferior to 8 * 8 add one more square
    for (let i = 0; i < width * width; i++) {
      // with a random colour
      const randomColour = candyColours[Math.floor(Math.random() * candyColours.length)]
      // add this coloured square to the grid (array of squares)
      randomColourArrangement.push(randomColour)
    }
    setColourArrangement(randomColourArrangement)
  }

  // call function only once to avoid infinite loop
  useEffect(() => {
    createBoard();
  }, [])

  return (
    <div className="App">

    </div>
  );
}
