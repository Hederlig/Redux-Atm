import "./App.css";
import ATM from "./components/ATM";
import { useDispatch, useSelector } from "react-redux";
import { toggleAtm } from "./redux/atmSlicer";
function App() {
  const dispatch = useDispatch();
  const { showAtm } = useSelector((state) => state.atm);
  const handleAtm = () => {
    dispatch(toggleAtm());
  };
  return (
    <div className="App">
      <header className="App-header">
        <button className="startButton" onClick={handleAtm}>
          {showAtm ? "Close ATM" : "Start ATM"}
        </button>
        {showAtm && <ATM />}
      </header>
      <footer><strong>&copy; Copyright 2022 Author: Oscar "Buse" Hederlig</strong></footer>
    </div>
  );
}

export default App;