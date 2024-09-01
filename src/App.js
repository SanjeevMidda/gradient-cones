import "./index.css";
import Circle from "./components/Circle";

function App() {
  return (
    <div className="App">
      <h3>music.</h3>
      <div className="gridContainer">
        <Circle
          colors={["silver", "yellow", "orange"]}
          rotation="rotateReverse"
        />
        <Circle colors={["silver", "pink", "red"]} rotation="rotate" />
        <Circle
          colors={["silver", "rgb(113, 228, 234)", "blue"]}
          rotation="rotateReverse"
        />
        <Circle
          colors={["silver", "rgb(153, 113, 234)", "purple"]}
          rotation="rotate"
        />
      </div>
    </div>
  );
}

export default App;
