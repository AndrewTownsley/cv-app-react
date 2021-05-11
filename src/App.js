import './App.css';

function App() {
  let boxes = [];
  const numBoxes = 24;

  for(let i = 0; i < numBoxes.length; i++) {
    boxes.push({
      id: i,
      color: `rgb(${this.getRandomColor()}, ${this.getRandomColor()}, ${this.getRandomColor()})`
    })
  }
  return (
   
  );
}

export default App;
