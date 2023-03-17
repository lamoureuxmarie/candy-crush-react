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

  const checkForColumnOfThree = () => {
    for (let i = 0; i < 47; i++ ) {
      // define what is a column width index of squares (ex: 0, 8 and 16)
      const columnOfThree = [i, i + width, i + width * 2]
      // define colour, colour of first element in the column
      const decidedColour = currentColourArrangement[i]

      if ( columnOfThree.every(square => currentColourArrangement[square] === decidedColour )) {
        console.log(columnOfThree);
      }
    }
  }

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

  checkForColumnOfThree()

  return (
    <div className="app">
      <div className="game-board">
        {currentColourArrangement.map((candyColour, index) => (
          // for each element in the array, create an img
          <img
            key={index}
            // with a background colour of 'element colour name'
            style={{backgroundColor: candyColour}}
            alt= {candyColour}
          />
        ))}
      </div>
    </div>
  );
}
