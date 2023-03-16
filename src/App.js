import './App.css';

const width = 8
const candyColours = [
  'blue',
  'green',
  'orange',
  'purple',
  'red',
  'yellow'
]


function App() {

  const createBoard = () => {
    for (let i = 0; i < width * width; i++) {
      const randomColour = candyColours[Math.floor(Math.random() * candyColours.length)]
      console.log(randomColour);
    }
  }

  createBoard();

  return (
    <div className="App">
    </div>
  );
}

export default App;
